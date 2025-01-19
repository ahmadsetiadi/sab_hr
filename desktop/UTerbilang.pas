unit UTerbilang;
interface
uses
  SysUtils,StrUtils;
function bilang(const val:string):String;
function bilangRupiah(const val:string):String;
function split(const val:string):string;
const
  kata : array[0..9]of string = ('Nol','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');
  max_len : integer = 15;
implementation
function bilang(const val:string):String;
var
  s,a : string;
  out : string;
begin
  s := val;
  if LeftStr(s,1) = '-' then begin
    out := 'Minus ';
    s := RightStr(s,length(s)-1);
  end else out := '';
  if Length(s) > max_len then begin
    Result := 'OVER LIMIT !!!';
    Exit;
  end;
  if Length(s) > 12 then begin  //trilyun
    a := MidStr(s,1,Length(s)-12);
    out := split(a) + ' Trilyun ';
    s := RightStr(s,length(s)-length(a));
  end;
  if Length(s) > 9 then begin  //milyar
    a := MidStr(s,1,length(s)-9);
    out := out + split(a) + ' Milyar ';
    s := RightStr(s,length(s)-length(a));
  end;
  if Length(s) > 6 then begin //juta
    a := MidStr(s,1,length(s)-6);
    out := out + split(a) + ' Juta ';
    s := RightStr(s,length(s)-length(a));
  end;
  if Length(s) > 3 then begin //ribu
    a := MidStr(s,1,length(s)-3);
    if StrToInt(a)=1 then
      out := out + ' Seribu '
    else if StrToInt(a)<>0 then out := out + split(a) + ' Ribu ';
    s := RightStr(s,length(s)-length(a));
  end;
  out := out + split(s);
  Result := Trim(StringReplace(out,'  ',' ',[rfReplaceAll]));
end;
function bilangRupiah(const val:string):String;
var
  s,a : string;
  out : string;
begin
  s := val;
  if LeftStr(s,1) = '-' then begin
    out := 'Minus ';
    s := RightStr(s,length(s)-1);
  end else out := '';
  if Length(s) > max_len then begin
    Result := 'OVER LIMIT !!!';
    Exit;
  end;
  if Length(s) > 12 then begin  //trilyun
    a := MidStr(s,1,Length(s)-12);
    out := split(a) + ' Trilyun ';
    s := RightStr(s,length(s)-length(a));
  end;
  if Length(s) > 9 then begin  //milyar
    a := MidStr(s,1,length(s)-9);
    out := out + split(a) + ' Milyar ';
    s := RightStr(s,length(s)-length(a));
  end;
  if Length(s) > 6 then begin //juta
    a := MidStr(s,1,length(s)-6);
    out := out + split(a) + ' Juta ';
    s := RightStr(s,length(s)-length(a));
  end;
  if Length(s) > 3 then begin //ribu
    a := MidStr(s,1,length(s)-3);
    if StrToInt(a)=1 then
      out := out + ' Seribu '
    else if StrToInt(a)<>0 then out := out + split(a) + ' Ribu ';
    s := RightStr(s,length(s)-length(a));
  end;
  out := out + split(s);
  Result := Trim(StringReplace(out,'  ',' ',[rfReplaceAll])) + ' Rupiah';
end;

function split(const val:string):string;
var
  i,i2 : integer;
  s,out : string;
begin
  s := val;
  out := '';
  if length(s) = 3 then begin
    i := StrToInt(LeftStr(s,1));
    if i = 1 then
      out := ' Seratus '
    else if (i>1) then
      out := kata[i] + ' Ratus ';
    s := RightStr(s,2);
  end;
  if length(s) = 2 then begin
    i := StrToInt(LeftStr(s,1));
    i2 := StrToInt(RightStr(s,1));
    if (i=1) and (i2=0) then
      out := out + ' Sepuluh '
    else if (i=1) and (i2=1) then
      out := out + ' Sebelas '
    else if (i>1) and (i2=0) then
      out := out + kata[i] + ' Puluh '
    else if (i=1) and (i2>0) then
      out := out + kata[i2] + ' Belas '
    else if (i<>0) and (i2<>0) then
      out := out + kata[i] + ' Puluh ' + kata[i2]
    else if (i=0) and (i2<>0) then
      out := out + kata[i2];
  end;
  if Length(s) = 1 then out := out + kata[StrToInt(s)];

  //Result := out + ' Rupiah'; //aslinya
  Result := out;   
end;

end.
