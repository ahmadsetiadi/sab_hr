{*********************************************************}
{                                                         }
{                 Zeos Database Objects                   }
{               Universal Dataset component               }
{                                                         }
{        Originally written by Sergey Seroukhov           }
{                                                         }
{*********************************************************}

{@********************************************************}
{    Copyright (c) 1999-2012 Zeos Development Group       }
{                                                         }
{ License Agreement:                                      }
{                                                         }
{ This library is distributed in the hope that it will be }
{ useful, but WITHOUT ANY WARRANTY; without even the      }
{ implied warranty of MERCHANTABILITY or FITNESS FOR      }
{ A PARTICULAR PURPOSE.  See the GNU Lesser General       }
{ Public License for more details.                        }
{                                                         }
{ The source code of the ZEOS Libraries and packages are  }
{ distributed under the Library GNU General Public        }
{ License (see the file COPYING / COPYING.ZEOS)           }
{ with the following  modification:                       }
{ As a special exception, the copyright holders of this   }
{ library give you permission to link this library with   }
{ independent modules to produce an executable,           }
{ regardless of the license terms of these independent    }
{ modules, and to copy and distribute the resulting       }
{ executable under terms of your choice, provided that    }
{ you also meet, for each linked independent module,      }
{ the terms and conditions of the license of that module. }
{ An independent module is a module which is not derived  }
{ from or based on this library. If you modify this       }
{ library, you may extend this exception to your version  }
{ of the library, but you are not obligated to do so.     }
{ If you do not wish to do so, delete this exception      }
{ statement from your version.                            }
{                                                         }
{                                                         }
{ The project web site is located on:                     }
{   http://zeos.firmos.at  (FORUM)                        }
{   http://sourceforge.net/p/zeoslib/tickets/ (BUGTRACKER)}
{   svn://svn.code.sf.net/p/zeoslib/code-0/trunk (SVN)    }
{                                                         }
{   http://www.sourceforge.net/projects/zeoslib.          }
{                                                         }
{                                                         }
{                                 Zeos Development Group. }
{********************************************************@}

unit ZDataset;

interface

{$I ZComponent.inc}

uses SysUtils, classes, StrUtils, zconnection,
     ZAbstractRODataset, ZAbstractDataset, ZAbstractTable {$IFDEF OLDFPC}, DB {$ENDIF};

type

  {** Implements an universal SQL query for read/only data access. }
  TZReadOnlyQuery = class (TZAbstractRODataSet)
  published
    property Active;
  {$IFDEF WITH_FUNIDIRECTIONAL}
    property IsUniDirectional;
  {$ENDIF}
    property SQL;
    property ParamCheck;
    property Params;
    property FetchRow;     // added by Patyi
    property Properties;
    property DataSource;
    property MasterFields;
    property MasterSource;
    property LinkedFields; {renamed by bangfauzan}
    property IndexFieldNames; {bangfauzan addition}
    property Options;
  end;

  {** Implements an universal SQL query for read/write data access. }
  TZQuery = class (TZAbstractDataSet)
  published
    property Active;
    property ReadOnly default False;
    property SQL;
    property ParamCheck;
    property ParamChar;
    property Params;
    property FetchRow;      // added by Patyi
    property ShowRecordTypes;
    property Properties;
    property DataSource;
    property MasterFields;
    property MasterSource;
    property LinkedFields; {renamed by bangfauzan}
    property IndexFieldNames; {bangfauzan addition}
    property UpdateMode;
    property WhereMode;
    property Options;
    property Sequence;
    property SequenceField;

    //buatan Ahmad Setiadi
    constructor CreateQuery; overload;
    function Query(const SQL: string) : integer;
    function QueryExcel(const SQL: string) : integer;
    function QueryExcel2(const SQL: string; const z :tzconnection) : integer;
    function QueryTo(const SQL: string; const z :tzconnection) : integer;
    function QuerySQL(const SQL: string) : integer;
    function setField(const Field:string; const Value:variant): variant;
    function SetFieldInteger(const Field:string; const Value:Integer): Integer;
    function SetFieldDouble(const Field:string; const Value:Double): Double;
    function SetFieldString(const Field:string; const Value:String): String;
    function SetFieldDateTime(const Field:string; const Value:TDateTime): Tdatetime;

    function SetMultiField(const MultiField:string; const Value:Variant):variant;
    function SetMultiFieldQ(const MultiField:string; const Q:TZQuery) : variant;

    function SetColumn(const Column:Integer; const Value:variant): variant;
    function SetColumnInteger(const Column:Integer; const Value:Integer): Integer;
    function SetColumnDouble(const Column:Integer; const Value:Double): Double;
    function SetColumnString(const Column:Integer; const Value:String): String;
    function SetColumnDateTime(const Column:Integer; const Value:TDateTime): Tdatetime;

    function getField(const Field:string) : variant;
    function getFieldInteger(const Field:string) : Integer;
    function getFieldDouble(const Field:string) : Double;
    function getFieldString(const Field:string) : String;
    function getQ(const Field:string) : String;
    function getFieldDateTime(const Field:string) : TDateTime;
    function getCSV(const Field:string) : String;
    function getColumn(const Column:Integer) : variant;
    function getColumnInteger(const Column:Integer) : Integer;
    function getColumnDouble(const Column:Integer) : Double;
    function getColumnString(const Column:Integer) : String;
    function getColumnDateTime(const Column:Integer) : TDateTime;

    function date2sql(const Field:string) : string;
    function time2sql(const Field:string) : string;
    function getYearSQL(const Field:string):string;
    function getMonthSQL(const Field: string):string;
    function getDateSQL(const Field: string):string;

    function isNull(const Field : string) : Boolean;
    function isNotNull(const Field : string) : Boolean;
    function isNotFieldExist(const Field : string) : Boolean;
    function isFieldExist(const Field : string) : Boolean;

    function fieldName(const Column:Integer) : String;
    procedure copyData(const Q:TZQuery);
    function RecNoStr : string;
    function RecordCountStr : string;
    //end buatan Ahmad Setiadi
  end;

  {** Implements an universal SQL query for single table access. }
  TZTable = class (TZAbstractTable)
  public
    property Exists;
  published
    property Active;
    property ReadOnly default False;
    property TableName;
    property ShowRecordTypes;
    property Properties;
    property FetchRow;      // added by Patyi
    property MasterFields;
    property MasterSource;
    property LinkedFields; {renamed by bangfauzan}
    property IndexFieldNames; {bangfauzan addition}
    property UpdateMode;
    property WhereMode;
    property Options;
    property Sequence;
    property SequenceField;
  end;

implementation
uses UMenuLogin, Unit1;

constructor TZquery.CreateQuery;
begin
  inherited Create(nil);
end;

function TZQuery.Query(const SQL: string) : integer;
begin
  self.Properties.Clear;
  self.Properties.add('ValidateUpdateCount=False');
  self.Close;
  self.active := false;
  self.Connection := MenuLogin.ZConnection ;
  self.sql.Clear;
  self.SQL.Add(SQL);
  self.active := true;
  self.Open;
  result := self.RecordCount;
end;
function TZQuery.QueryTo(const SQL: string; const z :tzconnection) : integer;
begin
  self.Close;
  self.active := false;
  self.Connection := z;
  self.sql.Clear;
  self.SQL.Add(SQL);
  self.active := true;
  self.Open;
  result := self.RecordCount;
end;
function TZQuery.QueryExcel2(const SQL: string; const z :tzconnection) : integer;
begin
  self.Close;
  self.active := false;
  self.Connection := z;
  self.sql.Clear;
  self.SQL.Add(SQL);
  self.active := true;
  self.Open;
  result := self.RecordCount;
end;
function TZQuery.QueryExcel(const SQL: string) : integer;
begin
  self.Close;
  self.active := false;
  self.Connection := MenuLogin.ZExcel;
  self.sql.Clear;
  self.SQL.Add(SQL);
  self.active := true;
  self.Open;
  result := self.RecordCount;
end;
function TZQuery.QuerySQL(const SQL: string) : integer;
begin
  self.Close;
  self.active := false;
  self.Connection := MenuLogin.ZSQLServer;
  self.sql.Clear;
  self.SQL.Add(SQL);
  self.active := true;
  self.Open;
  result := self.RecordCount;
end;
function tzquery.setField(const Field:string; const Value:variant): variant;
begin
  self.Edit;
  self.FieldByName(Field).AsVariant := value;
  result := value;
end;

function tzquery.isNull(const Field : string) : Boolean;
begin
  result := false;
  if self.FieldByName(Field).IsNull then result := true;
end;
function tzquery.isNotNull(const Field : string) : Boolean;
begin
  result := false;
  if self.FieldByName(Field).IsNull = False then result := true;
end;
function tzquery.isNotFieldExist(const Field : string) : Boolean;
var
  x : integer;
begin
  result := True;
  for x := 0 to (self.FieldCount - 1 ) do
  begin
    if self.Fields[x].FieldName = Field then
    begin
      result := False;
      exit;
    end;
  end;

end;

function tzquery.isFieldExist(const Field : string) : Boolean;
var
  x : integer;
begin
  result := false;
  for x := 0 to (self.FieldCount - 1 ) do
  begin
    if self.Fields[x].FieldName = Field then
    begin
      result := true;
      exit;
    end;
  end;

end;

function tzquery.SetFieldInteger(const Field:string; const Value:Integer): Integer;
begin
  self.Edit;
  self.FieldByName(Field).asInteger := value;
  result := value;
end;
function tzquery.SetFieldDouble(const Field:string; const Value:Double): Double;
begin
  self.Edit;
  self.FieldByName(Field).AsFloat := value;
  result := value;
end;
function tzquery.SetFieldString(const Field:string; const Value:String): String;
begin
  self.Edit;
  self.FieldByName(Field).AsString := value;
  result := value;
end;

function tzquery.SetFieldDateTime(const Field:string; const Value:TDateTime): Tdatetime;
begin
  self.Edit;
  self.FieldByName(Field).AsDatetime := value;
  result := value;
end;

function tzquery.SetMultiField(const MultiField:string; const Value:Variant):variant;
	function explodeString(const field: String; const explode:String) : string;
	var
	  x,koma, mulai, panjang : integer;
	  ts:tstringlist;
	  stringjadi : string;
	begin
	  ts := tstringlist.Create;
	  ts.Clear;
	  koma:=0;
	  for x := 0 to length(field)-1 do
	  begin
		 if MidStr(field,x,1) = explode then ts.Add(inttostr(x));
	  end;

	  mulai := 0;
	  stringjadi := '';
	  for x := 0 to ts.Count - 1 do
	  begin
		koma    := strtoint(ts.Strings[x]);
		panjang := koma-mulai-1;
		if x > 0 then panjang := koma-mulai;
		stringjadi := stringjadi + MidStr(field,mulai,panjang ) +#13+#10;
		if x =0 then mulai := mulai+1;
		mulai := mulai + panjang+1;
	  end;
	  stringjadi := stringjadi + MidStr(field,koma+1,length(field)-1 );
	  result := stringjadi;
	  ts.Free;
	end;

var
  ts : tstringlist;
  x  : integer;
begin
  result := value;
  ts := tstringlist.Create;
  ts.Clear;
  ts.CommaText := explodeString(MultiField,',');
  self.Edit;
  for x := 0 to ts.Count-1 do
  begin
    if self.isFieldExist(ts.Strings[x]) then
    begin
      self.SetField(ts.Strings[x],value);
    end;
  end;
  ts.Free;
end;

function TZQuery.SetMultiFieldQ(const MultiField:String; const Q:TZQuery) : variant;
	function explodeString(const field: String; const explode:String) : string;
	var
	  x,koma, mulai, panjang : integer;
	  ts:tstringlist;
	  stringjadi : string;
	begin
	  ts := tstringlist.Create;
	  ts.Clear;
	  koma:=0;
	  for x := 0 to length(field)-1 do
	  begin
		 if MidStr(field,x,1) = explode then ts.Add(inttostr(x));
	  end;
	  mulai := 0;
	  stringjadi := '';
	  for x := 0 to ts.Count - 1 do
	  begin
  		koma    := strtoint(ts.Strings[x]);
	  	panjang := koma-mulai-1;
  		if x > 0 then panjang := koma-mulai;
	  	stringjadi := stringjadi + MidStr(field,mulai,panjang ) +#13+#10;
		  if x =0 then mulai := mulai+1;
   		mulai := mulai + panjang+1;
	  end;

    if ts.Count = 0 then
    begin
      stringjadi := trim(field);
    end else
    begin
  	  stringjadi := stringjadi + MidStr(field,koma+1,length(field)-1 );
    end;
	  result := stringjadi;
	  ts.Free;
	end;
var
  ts : tstringlist;
  x  : integer;
begin
  result := '';
  ts := tstringlist.Create;
  ts.Clear;
  ts.CommaText := explodeString(MultiField,',');
  self.Edit;
  for x := 0 to ts.Count-1 do
  begin
    self.SetField(ts.Strings[x],Q.getField(ts.Strings[x]));
  end;
  ts.Free;
end;

function tzquery.SetColumn(const Column:Integer; const Value:variant): variant;
begin
  self.Edit;
  self.Fields[Column].AsVariant := value;
  result := value;
end;

function tzquery.SetColumnInteger(const Column:Integer; const Value:Integer): Integer;
begin
  self.Edit;
  self.Fields[Column].asInteger := value;
  result := value;
end;

function tzquery.SetColumnDouble(const Column:Integer; const Value:Double): Double;
begin
  self.Edit;
  self.Fields[Column].AsFloat := value;
  result := value;
end;

function tzquery.SetColumnString(const Column:Integer; const Value:String): String;
begin
  self.Edit;
  self.Fields[Column].asstring := value;
  result := value;
end;

function tzquery.SetColumnDateTime(const Column:Integer; const Value:TDateTime): Tdatetime;
begin
  self.Edit;
  self.Fields[Column].asDateTime := value;
  result := value;
end;

function TZQuery.getField(const Field:string) : variant;
begin
  result := self.FieldByName(field).AsVariant;
end;

function TZQuery.getFieldInteger(const Field:string) : Integer;
begin
  if self.FieldByName(Field).IsNull then
  begin
    result := 0;
    exit;
  end;

  if trim(self.FieldByName(Field).AsString) = '' then
  begin
    result := 0;
    exit;
  end;

  result := self.FieldByName(field).AsInteger;
end;

function TZQuery.getFieldString(const Field:string) : String;
begin
  if self.FieldByName(Field).IsNull then
  begin
    result := '';
    exit;
  end;
  result := self.FieldByName(field).AsString;
end;
function TZQuery.getCSV(const Field:string) : String;
var
  d : string;
begin
  d := self.getFieldString(Field);
  d := Replace(d, ';', '');
  d := Replace(d, #13, '');
  d := Replace(d, '''', '');
  result := d;
end;
function TZQuery.getQ(const Field:string) : String;
var
  s : string;
begin
  s := '''';
  result := s + self.FieldByName(field).AsString + s;
end;

function TZQuery.getFieldDouble(const Field:string) : Double;
begin
  if self.FieldByName(Field).IsNull then
  begin
    result := 0;
    exit;
  end;

  if trim(self.FieldByName(Field).AsString) = '' then
  begin
    result := 0;
    exit;
  end;
  result := self.FieldByName(field).AsFloat;
end;

function TZQuery.getFieldDateTime(const Field:string) : TDateTime;
begin
  result := self.FieldByName(field).AsDateTime;
end;

function tzquery.getColumn(const Column:Integer) : variant;
begin
  if self.Fields[column].IsNull then
    result := 0
  else
    result := self.Fields[column].AsVariant;
end;

function tzquery.getColumnInteger(const Column:Integer) : Integer;
begin
  result := self.Fields[column].asinteger;
end;

function tzquery.getColumnDouble(const Column:Integer) : Double;
begin
  if self.Fields[column].IsNull then result := 0 else
        result := self.Fields[column].asfloat;
end;

function tzquery.getColumnString(const Column:Integer) : String;
begin
  result := self.Fields[column].asString;
end;

function tzquery.getColumnDateTime(const Column:Integer) : TDateTime;
begin
  result := self.Fields[column].AsDateTime;
end;

function tZquery.date2sql(const Field:string) : string;
begin
  result := formatdatetime('yyyy-MM-dd',self.FieldByName(field).AsDateTime);
end;
function tZquery.time2sql(const Field:string) : string;
begin
  result := formatdatetime('hh:nn:ss',self.FieldByName(field).AsDateTime);
end;
function TZQuery.fieldName(const Column:Integer) : String;
begin
  result := self.Fields[Column].FieldName;
end;
procedure TZQuery.copyData(const Q:TZQuery);
var
  k : integer;
  fn : string;
begin
  for k := 0 to self.FieldCount - 1 do
  begin
    fn  := self.fieldname(k);
    if Q.isfieldexist(fn) = true then
    begin
      self.setField( fn , Q.getField(fn) );
    end;
  end;
end;
function TZQuery.RecNoStr : string;
begin
  result := inttostr(self.RecNo);
end;
function TZQuery.RecordCountStr : string;
begin
  result := inttostr(self.RecordCount);
end;
function TZQuery.getYearSQL(const Field: string):string;
begin
  result := formatdatetime('yyyy', self.FieldByName(field).AsDateTime );
end;
function TZQuery.getMonthSQL(const Field: string):string;
begin
  result := formatdatetime('mm', self.FieldByName(field).AsDateTime );
end;
function TZQuery.getDateSQL(const Field: string):string;
begin
  result := formatdatetime('dd', self.FieldByName(field).AsDateTime );
end;
end.


