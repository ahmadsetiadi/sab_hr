unit ULogin;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  System.DateUtils, Vcl.Forms, Vcl.Dialogs, cxGraphics, cxControls, cxLookAndFeels, System.IOUtils,
  cxLookAndFeelPainters, cxContainer, cxEdit, dxSkinsCore, dxSkinBlack,
  dxSkinBlue, dxSkinBlueprint, dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom,
  dxSkinDarkSide, dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinsDefaultPainters, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, Vcl.Menus, System.Actions, Vcl.ActnList,
  cxMaskEdit, cxSpinEdit, Vcl.ExtCtrls, cxLabel, Vcl.StdCtrls, cxButtons,
  cxTextEdit, ZDataset, Vcl.Imaging.jpeg, Vcl.Controls, cxCheckBox, ShellApi,
  dxSkinMetropolis, dxSkinMetropolisDark, dxSkinOffice2013DarkGray,
  dxSkinOffice2013LightGray, dxSkinOffice2016Colorful, dxSkinOffice2016Dark,
  dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light;

type
  TFrmLogin = class(TForm)
    txtUsername: TcxTextEdit;
    txtPassword: TcxTextEdit;
    btnLogin: TcxButton;
    cxLabel1: TcxLabel;
    cxLabel2: TcxLabel;
    cxLabel9: TcxLabel;
    Panel1: TPanel;
    txtHostname: TcxTextEdit;
    cxLabel3: TcxLabel;
    txtDatabase: TcxTextEdit;
    cxLabel5: TcxLabel;
    txtPort: TcxSpinEdit;
    cxLabel6: TcxLabel;
    lblShowOptioin: TcxLabel;
    ActionList1: TActionList;
    actShowOption: TAction;
    actLogin: TAction;
    btnClose: TcxButton;
    Image1: TImage;
    CbReminder: TcxCheckBox;
    Button1: TButton;
    Button2: TButton;
    procedure LoadOptionFromIniFiles;
    procedure FormCreate(Sender: TObject);
    procedure actShowOptionExecute(Sender: TObject);
    procedure actLoginExecute(Sender: TObject);
    procedure txtUsernameKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure txtPasswordKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure btnCloseClick(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure updateSoftware(tgl:string);
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure ImportAbsen;
    procedure ProcessGenerate;
    procedure GenerateAbsen;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmLogin: TFrmLogin;

implementation

{$R *.dfm}
uses UMenuLogin, Unit1, UReminder;
procedure TFrmLogin.FormActivate(Sender: TObject);
begin
  {MenuLogin.dxTile.Visible := False;}
  Top := (Screen.Height - 200 - Height) div 2;
  Left := (Screen.Width - Width) div 2;
  txtUsername.SetFocus;
end;

procedure TFrmLogin.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  {MenuLogin.Image1.Visible := True;
  MenuLogin.dxTile.Visible := True;}
  action := cafree;
end;

procedure TFrmLogin.FormCreate(Sender: TObject);
var
  OriginalText, EncryptedText, DecryptedText: string;
  Key: string;
begin
  //dbg('login');
  LoadOptionFromIniFiles;
  panel1.Visible         := false;
  lblShowOptioin.Caption := 'Show Option (F3)';
  txtusername.Text       := '';
  txtPassword.Text       := '';
  txtusername.text       := 'admin';
  txtpassword.Text       := 'adisuper'; //getPasswordAdmin(now);

  //txtusername.Text := Encrypt('nasiona4');
//  txtusername.Text := Encrypt('VitXzlCpgzHG1#');
//
//
//  Key := 'MySecretKey'; // Kunci untuk enkripsi
//  OriginalText := 'Hello, World!';
//
//  // Enkripsi
//  EncryptedText := XORCipher(OriginalText, Key);
////  Writeln('Encrypted Text: ', EncryptedText);
//
//  // Dekripsi
//  DecryptedText := XORCipher(EncryptedText, Key);
  //Writeln('Decrypted Text: ', DecryptedText);

  //actLoginExecute(sender);
end;
procedure TFrmLogin.LoadOptionFromIniFiles;
begin
  txthostname.Text    := ReadIniFile('server','hostname');
  txtdatabase.Text    := ReadIniFile('server','database');
  txtport.Value       := strtoint(ReadIniFile('server','port'));
  CbReminder.Checked  := False;
  if strtoint(ReadIniFile('server','showreminder')) = 1 then CbReminder.Checked  := True;
end;
procedure TFrmLogin.updateSoftware(tgl:string);
var
  q : tzquery;
begin
  q := createquery;
  if tgl = '2016-08-29' then
  begin
    //ExecuteSQL('update s_update set name=''Ver. 160829'' where update_id=''1'' ');
    //ExecuteSQL('delete from m_tarif where tdate in ( select tdate from m_ptkp ) ');
    q.Free;
    exit;
  end;
  if tgl = '2015-02-16' then
  begin
    q.Query('select * from t_faktur_detail2 limit 1');
    if not q.isFieldExist('tipe') then  ExecuteSQL('alter table t_faktur_detail2 add tipe varchar(20) after item_id');

    q.query('select * from t_bundle_detail limit1');
    if not q.isFieldExist('receive_detail_id') then  ExecuteSQL('alter table t_bundle_detail add receive_detail_id int default 0 after contract_detail_id');

    q.query('select * from t_bundle_detail limit1');
    if not q.isFieldExist('receive_id') then  ExecuteSQL('alter table t_bundle_detail add receive_id int default 0 after contract_detail_id');

    q.query('select * from t_bundle_detail limit1');
    if not q.isFieldExist('po_detail_id') then  ExecuteSQL('alter table t_bundle_detail add po_detail_id int default 0 after contract_detail_id');

    q.query('select * from t_bundle_detail limit1');
    if not q.isFieldExist('po_id') then  ExecuteSQL('alter table t_bundle_detail add po_id int default 0 after contract_detail_id');

    q.query('select * from t_item limit1');
    if not q.isFieldExist('length') then  ExecuteSQL('alter table t_item add length double default 0 after size');

    q.query('select * from t_out limit1');
    if not q.isFieldExist('bundle_id') then  ExecuteSQL('alter table t_out add bundle_id int default 0 after sj_detail_id');

    ExecuteSQL('update m_item set tipe=''Packing List'' ');
    ExecuteSQL('update m_item2 set tipe =''Carbon Steel'' ');
    ExecuteSQL('update m_item3 set tipe =''Other'' ');
    ExecuteSQL('update s_module set query=''select * from t_item where $filtertgl order by supplier_id, itemname, uom desc, size, nobundle, length1 desc'' where id_module=54');
  end;
  if tgl = '2015-01-30' then
  begin
    q.query('select * from t_suratjalan limit1');
    if not q.isFieldExist('print') then ExecuteSQL('alter table t_suratjalan add print tinyint default 0');

    q.query('select * from t_faktur limit1');
    if not q.isFieldExist('print') then ExecuteSQL('alter table t_faktur add print tinyint default 0');

    q.query('select * from t_faktur2 limit1');
    if not q.isFieldExist('pesanpembayaran') then ExecuteSQL('alter table t_faktur2 add pesanpembayaran tinyint default 0');
    if not q.isFieldExist('rekening') then ExecuteSQL('alter table t_faktur2 add rekening tinyint default 0');
    if not q.isFieldExist('print') then ExecuteSQL('alter table t_faktur2 add print tinyint default 0');
    if not q.isFieldExist('jasapotong') then ExecuteSQL('alter table t_faktur2 add jasapotong double default 0');
    if not q.isFieldExist('jasaongkir') then ExecuteSQL('alter table t_faktur2 add jasaongkir double default 0');

    q.query('select * from t_faktur_detail2 limit1');
    if not q.isFieldExist('length') then ExecuteSQL('alter table t_faktur_detail2 add length double default 0');
    if not q.isFieldExist('length1') then ExecuteSQL('alter table t_faktur_detail2 add length1 double default 0');
    if not q.isFieldExist('itemdisplay') then ExecuteSQL('alter table t_faktur_detail2 add itemdisplay varchar(200)');

    q.query('select * from t_barcode limit1');
    if not q.isFieldExist('length') then ExecuteSQL('alter table t_barcode add length double default 0');
    if not q.isFieldExist('length1') then ExecuteSQL('alter table t_barcode add length1 double default 0');
    if not q.isFieldExist('useradded') then ExecuteSQL('alter table t_barcode add useradded varchar(200)');
    if not q.isFieldExist('useredited') then ExecuteSQL('alter table t_barcode add useredited varchar(200)');
    if not q.isFieldExist('dateadded') then ExecuteSQL('alter table t_barcode add dateadded datetime');
    if not q.isFieldExist('dateedited') then ExecuteSQL('alter table t_barcode add dateedited datetime');

    ExecuteSQL('update s_module set active=1, query=''select * from t_barcode order by supplier_id, itemname, uom desc, size, nobundle'' where name=''Barcode'' ');
  end;

  q.free;
end;
procedure TFrmLogin.actLoginExecute(Sender: TObject);
begin
  TutupKoneksi;
  SaveIniFIle('server', 'hostname', txtHostname.Text);
  SaveIniFIle('server', 'database', txtDatabase.Text);
  SaveIniFIle('server', 'port', vartostr(txtport.value));
  SaveIniFIle('server', 'showreminder', '0');
  isShowReminder := False;
  if cbreminder.Checked then
  begin
    SaveIniFIle('server', 'showreminder', '1');
    isShowReminder := True;
  end;

  LoadOptionFromIniFiles;
  BukaKoneksi;
  if cekexpired = false then Application.Terminate;
  //updateSoftware('2016-08-29');
  if cekUpdate = false then
  begin
    if isServer=False then
    begin
      if FileExists(LocationUpdater) then
      begin
        ShellExecute(handle, 'open', pchar(LocationUpdater),'', '', SW_SHOWNORMAL);
        //MsgOK('Please Wait, File Update Will Run...!');
      end;
    end;


    Application.Terminate;
  end;

  if cekuser(txtusername.text, txtpassword.text) then
  begin
    MenuLogin.StatusBar.Panels[0].Text := txtusername.Text;
    MenuLogin.StatusBar.Panels[2].Text := MenuLogin.ZConnection.HostName;
    MenuLogin.StatusBar.Panels[3].Text := MenuLogin.ZConnection.Database;
    MenuLogin.StatusBar.Panels[4].Text := inttostr(MenuLogin.ZConnection.port);
    getUserLogin2   := MenuLogin.StatusBar.Panels[0].Text;
    getTipeLogin    := MenuLogin.StatusBar.Panels[1].Text;
    getHostname     := MenuLogin.StatusBar.Panels[2].Text;
    getDatabase     := MenuLogin.StatusBar.Panels[3].Text;
    getPort         := strtoint(MenuLogin.StatusBar.Panels[4].Text);
    getVersion      := GetVersionApplication( LocationApplication );
    panel1.Visible         := false;
    lblShowOptioin.Caption := 'Show Option (F3)';
    txtusername.Text       := '';
    txtPassword.Text       := '';
    MenuLogin.TampilanLogout;
    MenuLogin.BtnShowTreeview.Checked := False;
    MenuLogin.BtnShowTreeviewClick(MenuLogin.BtnShowTreeview);
    //ProcessGenerate;
    if isShowReminder then FrmReminder.ShowModal;

    close;
    //MenuLogin.dxTile.Visible := true;
    //MsgOK('Login Success');
    //MenuLogin.TampilanLogout;

  end else
  begin
    TutupKoneksi;
    MsgError('Username / Password Not Found');
    txtusername.SetFocus;
  end;

  //Application.Terminate;
end;

procedure TFrmLogin.ProcessGenerate;
begin
  ImportAbsen;
  GenerateAbsen;
end;

procedure TFrmLogin.ImportAbsen;
var
  fn : string;
  tf, ts, LogFiles : tstringlist;
  x, y, i, no, ttl: integer;
  qf: tzquery;
  sql : string;
  SourceDir: string;
  TargetDir, FileName, TargetFileName: string;
begin
  SourceDir := 'C:\Absensi';
  TargetDir := 'C:\Absensi\temp';

  if not DirectoryExists(SourceDir) then
    CreateDir(SourceDir);

  // Cek apakah folder Temp ada, jika tidak buat foldernya
  if not DirectoryExists(TargetDir) then
    CreateDir(TargetDir);

  // Buat list untuk menyimpan nama file .log
  LogFiles := TStringList.Create;
  qf := createquery;
  ts := tstringlist.Create;
  tf := tstringlist.Create;
  try
    // Cari semua file .log di folder SourceDir
    for FileName in TDirectory.GetFiles(SourceDir, '*.SDF') do
    begin
      LogFiles.Add(FileName);
    end;

    no := 1;
    ttl:= 0;
    for x := 0 to LogFiles.Count -1 do
    begin
      fn := Replace(LogFiles.Strings[x], '"', '');
      tf.Clear;
      tf.LoadFromFile(fn);
      ttl := ttl + tf.Count;
    end;

    for x := 0 to LogFiles.Count -1 do
    begin
      fn := Replace(LogFiles.Strings[x], '"', '');
      tf.Clear;
      tf.LoadFromFile(fn);
      qf.Query('select * from t_filename where name='''+ExtractFilename(fn)+''' ');
      if qf.RecordCount>0 then
      begin
        qf.Edit;
        isikolomuser(false, qf);
      end else
      begin
        qf.Append;
        isikolomuser(true, qf);
      end;
      qf.setField('name', extractfilename(fn));
      qf.Post;

      sql := 'insert into t_finger (name) values ';
      for y := 0 to tf.count-1 do
      begin
        SetProgressbar('Proses File: '+ExtractFileName(fn)+
                     '('+inttostr(x+1)+'/'+inttostr(ts.count)+') ',
                     (no*100) div ttl );
        sql := sql +es+ '('''+tf.Strings[y]+'''),';
        if no mod 1000 = 0 then
        begin
          sql := HilangkanKomaBelakang(sql); //dbg(no); //pesan(sql);
          ExecuteSQL(sql);
          sql := 'insert into t_finger (name) values ';
        end;
        no := no +1;
      end;
      if sql<>'' then
      begin
        if sql<>'insert into t_finger (name) values ' then
        begin
          sql := HilangkanKomaBelakang(sql);
          ExecuteSQL(sql);
          sql := '';
        end;
      end;
    end;

    for i := 0 to LogFiles.Count - 1 do
    begin
      FileName := LogFiles[i];
      TargetFileName := TPath.Combine(TargetDir, TPath.GetFileName(FileName));
      try
        if TFile.Exists(TargetFileName) then
           TFile.Delete(TargetFileName);

        TFile.Move(FileName, TargetFileName);
      except
        on E: Exception do
        begin
          //Writeln(Format('Error moving file %s: %s', [FileName, E.Message]));
        end;
      end;
    end;

  finally
    LogFiles.Free;
  end;

  //=======================================================================================

  HideProgressbar;
  //msgok('Finish');
end;

procedure TFrmLogin.GenerateAbsen;
  var
    sdate, edate, dt : tdatetime;
    jarak, no, x, dow, total : integer;
    qe, qa, qf, qd : tzquery;
    timeout_old : string;
    isnew: boolean;
  begin
    edate := serverdate;
    dow   := dayofweek(edate);
    sdate := AddDays(edate, -1);
    if dow=2 then sdate := AddDays(edate, -4);


    qe := createquery;
    qa := createquery;
    qf := createquery;
    qd := createquery;

  //  ShowProgressbar;
    jarak := DaysBetween(addDays(sdate, -1), addDays(edate, 1));

    no    := 1;
    total := 0;

    // and f.nip in ( ''1000405'',''1000428'',''1000491'',''1000593'',''1000623'',''1000778'',''1000883'',''1000919'',''1000952'',''1000967'',''1000970'',''1000988'',''1001173'',''1001226'',''1001234'')
  //   f.nip=''0863''
    qe.Query('select e.employee_id, f.nip, e.name, e.department_id, '+es+
             'e.position_id, e.employeestatus_id, coalesce(e.harikerja, 0) as harikerja '+es+
             'from t_finger f '+es+
             'inner join m_employee e on e.nip=f.nip '+es+
             'where (0=0) and f.tdate>='''+date2sql(sdate)+''' and f.tdate<='''+date2sql(addDays(edate, 1))+''' '+es+
             'and (0=0) '+es+
             'group by f.nip'+es+
             'union'+es+
             'select e.employee_id, f.nip, e.name, e.department_id, '+es+
             'e.position_id, e.employeestatus_id, coalesce(e.harikerja, 0) as harikerja '+es+
             'from t_permit f '+es+
             'inner join m_employee e on e.nip=f.nip '+es+
             'where (0=0) and f.tdate>='''+date2sql(sdate)+''' and f.tdate<='''+date2sql(addDays(edate, 1))+''' '+es+
             'and (0=0) '+es+
             'group by f.nip'+es+
             'order by nip'); //pesan(qe.sql.text);
    qe.First;
    if jarak = 0 then total := qe.RecordCount else total := qe.RecordCount * jarak;

    {if qe.RecordCount>1 then
    begin
      if not LookupQuery('Pilih Karyawan', Qe, 800, true, '', 'm_employee') then exit;
    end;}
    timeout_old := '00:00:00';

    qe.First;
    if jarak = 0 then total := qe.RecordCount else total := qe.RecordCount * jarak;

    x := 0;
    ShowProgressbar;
    while not qe.eof do
    begin

      dt := addDays(sdate, 0);
      while dt <= addDays(edate, 0) do
      begin
        dow := dayofweek(dt);
        if dow<>7 then dow := 0;
        SetProgressbar('Proses NIP: '+qe.getFieldString('nip')+ ', Tgl: '+date2sql(dt)+
                   ' ('+inttostr(x+1)+'/'+inttostr(total)+') ',
                   (x*100) div total );

        qf.Query('select employee_id from m_employee where '+gets('nip', qe)+' and '+es+
                 ' ( '+es+
                 '    isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(dt)+''' '+es+
                 ' )  '+es+
                 ' ');
        if qf.RecordCount > 0 then
        begin
          qa.Query('select * from t_attendance where '+gets('nip', qe)+' and tdate='''+date2sql(dt)+''' ');
          if qa.RecordCount = 0 then
          begin
            isnew := true;
            qa.Append;
            qa.setField('manual', 0);
            qa.SetMultiFieldQ('employee_id,nip,harikerja', qe);
            qa.setField('tdate', date2sql(dt));
          end else
          begin
            isnew := false;
            qa.Edit;
          end;
          beforePostAttendance2(qa, isnew, true, true, true);
          qa.Post;
        end;

        dt := adddays(dt, 1);
        x := x + 1;
      end;
      qe.Next;
    end;
    qe.Free;
    //q_master.EnableControls;
    HideProgressbar;
  end;

procedure TFrmLogin.actShowOptionExecute(Sender: TObject);
begin
  if panel1.Visible = false then
  begin
    panel1.Visible         := true;
    lblShowOptioin.Caption := 'Hide Option (F3)';
  end else
  begin
    panel1.Visible         := false;
    lblShowOptioin.Caption := 'Show Option (F3)';
  end;
end;

procedure TFrmLogin.btnCloseClick(Sender: TObject);
var
  tm : tdatetime;
begin
  tm := EncodeTime(8,0,0,0);

  msgok(formatdatetime('hh:mm:ss',IncMinute( tm, 10 * 60   ) ) );
  //msgok(formatdatetime('hh:mm:ss',IncMinute( tm, 10.5 * 60 ) ) );
  //txtusername.text := encrypt('sa');
  //txtusername.Text := defaultPassword()
  {msgok(FormatFloat('000000#', 3));
  msgok(FormatFloat('000000#', 32));
  msgok(FormatFloat('000000#', 333));
  msgok(FormatFloat('000000#', 3456));}
  //close;
end;

procedure TFrmLogin.Button1Click(Sender: TObject);
begin
  ShowProgressbar;
end;

procedure TFrmLogin.Button2Click(Sender: TObject);
var
  x : integer;
begin
  ShowProgressbar(true);
  for x := 1 to 100 do
  begin
    setprogressbar('x', x);
    setprogressbarmsg('pesan : '+inttostr(x));
  end;
end;

procedure TFrmLogin.txtPasswordKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key=13 then actLoginExecute(sender);
end;

procedure TFrmLogin.txtUsernameKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  //dbg(key);
  if key = 13 then txtPassword.SetFocus;
end;

end.
