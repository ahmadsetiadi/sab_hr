unit UImport;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, cxGraphics, cxControls, cxLookAndFeels,
  cxLookAndFeelPainters, cxStyles, dxSkinsCore, dxSkinBlack, dxSkinBlue,
  dxSkinBlueprint, dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom, dxSkinDarkSide,
  dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinsDefaultPainters, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, dxSkinscxPCPainter, cxCustomData,
  cxFilter, cxData, cxDataStorage, cxEdit, cxNavigator, Data.DB, cxDBData,
  cxGridCustomTableView, cxGridTableView, cxGridBandedTableView,
  cxGridDBBandedTableView, ZAbstractRODataset, ZAbstractDataset, ZDataset,
  cxGridCustomPopupMenu, cxGridPopupMenu, cxGridLevel, cxClasses,
  cxGridCustomView, cxGrid, Vcl.ExtCtrls, cxContainer, Vcl.Menus, Vcl.StdCtrls,
  cxButtons, cxLabel, cxTextEdit, cxDBLookupComboBox, cxMaskEdit, cxDropDownEdit,
  dxSkinMetropolis, dxSkinMetropolisDark, dxSkinOffice2013DarkGray,
  dxSkinOffice2013LightGray, dxSkinOffice2016Colorful, dxSkinOffice2016Dark,
  dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light,
  cxDataControllerConditionalFormattingRulesManagerDialog, dxBarBuiltInMenu;

type
  TFrmImport = class(TForm)
    Panel1: TPanel;
    GRID_MASTER: TcxGrid;
    MASTER: TcxGridDBBandedTableView;
    GRID_MASTERLevel1: TcxGridLevel;
    cxGridPopupMenu1: TcxGridPopupMenu;
    DS_MASTER: TDataSource;
    Q_MASTER: TZQuery;
    MASTERid_module: TcxGridDBBandedColumn;
    MASTERtablename: TcxGridDBBandedColumn;
    MASTERno: TcxGridDBBandedColumn;
    MASTERcolumnexcel: TcxGridDBBandedColumn;
    txtFilename: TcxTextEdit;
    cxLabel1: TcxLabel;
    btnFilename: TcxButton;
    BtnCekFile: TcxButton;
    BtnImport: TcxButton;
    Q_Module: TZQuery;
    DS_Module: TDataSource;
    MASTERcolumnname: TcxGridDBBandedColumn;
    MASTERcaptionname: TcxGridDBBandedColumn;
    cxLabel2: TcxLabel;
    CboSheet: TcxComboBox;
    Q_Column: TZQuery;
    DS_Column: TDataSource;
    MASTERkolom_id: TcxGridDBBandedColumn;
    MASTERcolumntype: TcxGridDBBandedColumn;
    MASTERlength: TcxGridDBBandedColumn;
    MASTER_visible: TcxGridDBBandedColumn;
    MASTER_readonly: TcxGridDBBandedColumn;
    MASTERtipekolom: TcxGridDBBandedColumn;
    MASTERisi: TcxGridDBBandedColumn;
    MASTERlistfieldnames: TcxGridDBBandedColumn;
    MASTERkeyfieldnames: TcxGridDBBandedColumn;
    MASTERlookup_id_module: TcxGridDBBandedColumn;
    Button1: TButton;
    procedure FormCreate(Sender: TObject);
    procedure btnFilenameClick(Sender: TObject);
    procedure CboSheetPropertiesChange(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure BtnImportClick(Sender: TObject);
    procedure BtnCekFileClick(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure afterPost(tn:string;qm : tzquery);
    procedure beforePost(tn:string;qm : tzquery);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmImport: TFrmImport;

implementation

{$R *.dfm}

uses unit1, UMenuLogin;

procedure TFrmImport.BtnCekFileClick(Sender: TObject);
begin
  ShowProgressbar;
end;
procedure TFrmImport.btnFilenameClick(Sender: TObject);
var
  ts : tstringlist;
begin
  txtFilename.Text := '';
  txtfilename.Text := FileOpenDialog('Excel Files 2007 (*.xlsx)|*.xlsx|Excel Files 2003 (*.xls)|*.xls');
  if ConnectExcel(txtfilename.Text) = false then exit;
  ts := tstringlist.Create;
  ts.clear;
  GetTableExcel(ts);
  CboSheet.Properties.Items.Clear;
  CboSheet.Properties.Items := ts;
  DisconnetExcel;
  {ClearErrorList;
  AddErrorListFromTS(ts);
  ShowError;}
  ts.Free;
end;
procedure TFrmImport.BtnImportClick(Sender: TObject);
var
  ql, qk, qm, qe : tzquery;
  tse, tsk : tstringlist;
  x : integer;
  pr, sqllookup, lfn, kfn, tn, ke, cn, kn, sy, tk : string;
  isNew : Boolean;
begin
  if Confirm('Are You Sure Want to IMPORT ?') <> 'YES' then exit;  
  if ConnectExcel(txtfilename.Text) = false then exit;
  qm := createquery;
  qe := createquery;
  qk := createquery;
  ql := createquery;
  tsk:= tstringlist.Create;
  tse:= tstringlist.Create;

  tn := getQValueString('select tablename from s_sheet where name='''+cbosheet.Text+''' ');
  if tn = '' then
  begin    
    qm.Free;
    qe.Free;
    qk.Free;
    ql.Free;
    tsk.Free;
    DisconnetExcel;      
    MsgError('This Sheet is Not Allowed to Import');
    exit;
  end;  
  
  qe.QueryExcel('select * from ['+cbosheet.Text+']'); //select dari excel
  if LookupQuery('Choose Data From Excel', qe, 800, true, '', '',false) =false then
  begin
    qm.Free;
    qe.Free;
    qk.Free;
    ql.Free;
    tsk.Free;
    DisconnetExcel;      
    exit;
  end;

  ShowProgressbar;  
  //dbg('1');
  ClearErrorList;
  tsk.Clear;
  tse.Clear;
  q_master.First;
  q_master.DisableControls;
  while not q_master.Eof do
  begin
    if q_master.getFieldInteger('unique') = 1 then tsk.add(q_master.getFieldString('columnname'));
    q_master.next; //ambil yang unique = 1 di s_kolom buat di where
  end;
  //dbg('2');
  qe.First;
  while not qe.Eof do
  begin //pengulangan isi excel
    SetProgressbarDefault(qe);
    //dbg('3');
    sy := '';
    pr := '';
    for x := 0 to tsk.count -1 do
    begin //buat ambil where dan isinya
      qk.Query('select * from s_kolom where tablename='''+tn+''' and columnname='''+tsk.Strings[x]+''' ');
      if qk.RecordCount > 0 then
      begin
        kn := qk.getFieldString('columnname');
        ke := qk.getFieldString('columnexcel');
        if lowercase(qk.getFieldString('tipekolom')) ='date' then
        begin
          sy := sy + ' and ' + kn + '=''' + qe.date2sql(ke) + ''' ';
        end else
        begin
          sy := sy + ' and ' + kn + '=''' + qe.getFieldString(ke) + ''' ';
        end;
        pr := pr + UpperCase(ke) + ':"' + qe.getFieldString(ke) + '", ';
      end;
    end;
    //dbg('4');
    qm.Query('select * from '+tn+es+
             'where  (0=0) '+sy+' ');  //select ke table mysql
    //pesan(qm.SQL.Text+es+pr+' recordcount:'+qm.RecordCountStr);
    if qm.RecordCount = 0 then
    begin
      qm.Append;
      isNew := true;
      isiKolomUser(isNew, qm);
    end else
    begin
      qm.edit;
      isNew := False;
      isiKolomUser(isNew, qm);
    end;
    q_master.First;
    while not q_master.Eof do
    begin
      kn := q_master.getFieldString('columnname');
      cn := q_master.getFieldString('captionname');
      ke := q_master.getFieldString('columnexcel');
      tk := q_master.getFieldString('tipekolom');
      tk := lowercase(tk);
      lfn:= q_master.getFieldString('listfieldnames');
      kfn:= q_master.getFieldString('keyfieldnames');
      sqllookup := q_master.getFieldString('isi');
      if ke <> '' then
      begin //begin ke <> ''
      {dbg('cn : '+cn+es+
          'kn : '+kn+es+
          'tk : '+tk+es+
          'lfn: '+lfn+es+
          'kfn: '+kfn+es+
          'isi: '+sqllookup);}
      if ( qe.isNull(ke) ) or (qe.getFieldString(ke)='') then
      begin
        qm.setField(kn, null);
      end else
      begin
        try
          if (tk = '') or (tk = 'combobox') or (tk = 'memo') or (tk = 'memo2') then qm.setField(kn, trim(qe.getField(ke)) );
          if (tk = 'calc0') or (tk = 'calc2') or (tk = 'calc4') then qm.setField(kn, qe.getFieldDouble(ke));
          if (tk = 'spin') then qm.setField(kn, qe.getFieldInteger(ke));
          if (tk = 'month') or (tk = 'date') or (tk = 'datetime') then qm.setField(kn, qe.getFieldDateTime(ke) );
          if (tk = 'time') then
          begin
            //dbg( formatdatetime('hh:nn:ss', qe.getFieldDateTime(ke)) );
            //qm.setField(kn, formatdatetime('hh:nn:ss', qe.getFieldDateTime(ke)) );
            //dbg('1');
            //dbg(trim(qe.getFieldString(ke)));
            qm.setField(kn, trim(qe.getFieldString(ke)) );
          end;
          if (tk = 'checkbox') then
          begin
            if lowercase(trim(qe.getFieldString(ke))) = 'active' then qm.setField(kn, '1') else qm.setField(kn, '0');
          end;
          if tk = 'lookup' then
          begin
            {if (tn='m_employee_salary') and (kn='salary_id') then
            begin
              sqllookup := Replace(sqllookup, '$syarat', ' '+lfn+'='''+qe.getField(ke)+''' and tables=''m_employee_salary'' ');
            end else
            begin}
              sqllookup := Replace(sqllookup, '$syarat', ' '+lfn+'='''+qe.getField(ke)+''' ');
            //end;
            ql.Query(sqllookup);
            if ql.RecordCount = 0 then ql.Append else ql.Edit;
            ql.setField(lfn, qe.getField(ke) );
            ql.Post;
            qm.setField(kn, ql.getField(kfn));
          end;
        except
          on E : Exception do begin tse.Add('Data No : '+qe.RecNoStr+', '+pr+', Column Name :"'+cn+'", ['+e.Message+']'); end;
        end;
      end;
      end;//end ke <> ''
      q_master.next;
    end;

    //dbg(tn);
    if tn <> 'm_employee' then
    begin
      if (qm.isFieldExist('employee_id')) and (qm.isFieldExist('nip')) then
      begin
        //pesan('select employee_id from m_employee where nip='''+qm.getFieldString('nip')+''' ');
        qm.setField('employee_id', getQValueInteger('select employee_id from m_employee where nip='''+qm.getFieldString('nip')+''' ') );
      end;
    end;

    //dbg('1');
    try
      if (tn = 't_attendance') or (tn = 't_ad') then
      begin
        if payrollNotExist(qm.getFieldString('employee_id'), qm.getFieldDateTime('tdate')) then
        begin
          beforePost(tn, qm);
          if qm.getFieldInteger('employee_id') > 0 then
          begin
            if tn='t_ad' then
            begin
              qm.Post
              //if qm.getfielddouble('amount') <> 0 then qm.Post else qm.Cancel;
            end else
            begin //t_attendance
              qm.Post;
            end;
          end else
          begin
            tse.Add('Data No : '+qe.RecNoStr+', NIP : '+qm.getFieldString('nip')+' tidak Ditemukan pada Employee Data ');
          end;
          afterPost(tn, qm);
        end else
        begin
          tse.Add('NIP : '+qm.getFieldString('nip')+', Date : '+FormatDateTime('dd MMM yyyy', qm.getFieldDateTime('tdate'))+' [Payroll Already Exist]');
        end;
      end else
      begin
        //dbg('2');
        if tn = 'm_employee' then
        begin
          if isNew then qm.setField('password', defaultPassword(qm) ) else
          begin
            if qm.getFieldString('password') = '' then qm.setField('password', defaultPassword(qm) );
          end;

          qm.setField('showpassword', Decrypt(qm.getFieldString('password')) );
        end;
        //dbg('3');
        beforePost(tn, qm);
        //dbg('4');
        qm.Post;
        //dbg('5');
        afterPost(tn, qm);
        //dbg('6');
      end;
    except
      on E : Exception do begin tse.Add('Data No : '+qe.RecNoStr+', '+pr+', ['+e.Message+']'); end;
    end;

    
    
    qe.Next;
  end;
  qm.Free;
  qe.Free;
  qk.Free;
  ql.Free;
  tsk.Free;
  DisconnetExcel;
  q_master.EnableControls;
  q_master.First;
  HideProgressbar;
  if tse.Count > 0 then
  begin
    AddErrorListFromTS(tse);
    ShowError;
    tse.Free;
  end else
  begin
    msgok('Finished');
    tse.free;
  end;  
end;
procedure TFrmImport.Button1Click(Sender: TObject);
begin
  hideprogressbar;
end;

procedure TFrmImport.CboSheetPropertiesChange(Sender: TObject);
var
  qm, qt : tzquery;
  x  : integer;
  idm, tn : string;
begin
  if cbosheet.Text = ''  then exit;
  
  tn := getQValueString('select tablename from s_sheet where name='''+cbosheet.Text+''' ');
  idm:= getQValueString('select id_module from s_sheet where name='''+cbosheet.Text+''' ');
  if (tn = '') or (idm='') then begin MsgError('This Sheet is Not Allowed to Import'); exit; end;  
  
  ShowProgressbar;  
  if ConnectExcel(txtfilename.Text) = false then exit;
  qm := createquery;
  qt := createquery;
  ExecuteSQL('truncate tmp_kolomexcel');
  qt.Query('select * from tmp_kolomexcel');
  qm.QueryExcel('select * from ['+cbosheet.Text+']');
  for x  := 0 to qm.FieldCount - 1 do
  begin
    qt.Append;
    qt.setField('tablename', '['+cbosheet.Text+']' );
    qt.setField('columnname', qm.Fields[x].FieldName );
    qt.setField('columntype', qm.Fields[x].DataType );
    qt.Post;
  end;
  ExecuteSQL('update s_kolom set columnexcel=null where '+es+
             ' id_module='''+idm+''' and '+es+
             ' tablename='''+tn+''' and '+es+
             'columnexcel not in ( select columnname from tmp_kolomexcel ) ');
  Q_Column.Query('select * from tmp_kolomexcel');
  Q_MASTER.Query('select * from s_kolom where id_module='''+idm+''' and '+es+
                 '`tablename`='''+tn+''' and `_visible`=1 and '+es+
                 '( isnull(tipekolom) or tipekolom not in (''blob'', ''photo'') ) '+es+
                 'order by tablename, no');  
  q_master.Refresh;
  MsgOK('Please Match All Column');
  qm.Free;
  qt.Free;
  DisconnetExcel;
  HideProgressbar;
end;

procedure TFrmImport.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  q_module.Active := false;
  Q_Column.Active := false;
end;

procedure TFrmImport.FormCreate(Sender: TObject);
begin
  SetInsertTable(master, False);
  SetDeleteTable(master, False);
end;
procedure TFrmImport.afterPost(tn:string; qm : tzquery);
begin
  tn := lowercase(tn);
  if tn='m_employee_mutation' then
  begin
    updateEmployeeFromMutation(qm.getFieldString('employee_id'))
  end;
  
end;
procedure TFrmImport.beforePost(tn:string;qm : tzquery);
var
  qem : tzquery;
begin
  qem:= createquery;
  tn := lowercase(tn);
  if (tn='t_ad') then
  begin
    qem.Query('select * from m_employee where '+gets('employee_id', qm)+' ');
    if qem.RecordCount > 0 then
    begin
      qm.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                        'department_id,unit_id,workarea_id,grade_id,employeestatus_id', qem);
    end;
  end;
  if tn='t_attendance' then
  begin
    qem.Query('select * from m_employee where '+gets('employee_id', qm)+' ');
    if qem.RecordCount > 0 then
    begin
      qm.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,unit_id,workarea_id,grade_id,'+
                            'employeestatus_id,overtime_id,dayoff', qem);
    end;
    //beforepostAttendance(qm, false);
  end;
  if tn = 'm_employee_mutation' then
  begin
    CheckIsFirstMutation(qm);
  end;

  if tn = 'm_employee_salary' then
  begin
    ExecuteSQL('update m_employee_salary set active=0 where '+es+
               ''+gets('employee_id', qm)+' and '+gets('salary_id', qm)+' ');
  end;
  qem.Free;
end;

end.
