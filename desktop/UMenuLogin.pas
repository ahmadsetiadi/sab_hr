unit UMenuLogin;

interface

uses
  Forms, DB, Windows, Vcl.Dialogs, Messages, StrUtils, SysUtils, Variants, Graphics, System.IniFiles,
  cxGraphics, cxControls, cxLookAndFeels, cxLookAndFeelPainters, dxCustomTileControl,
  cxClasses, Classes, Controls, dxTileControl, cxImage, dxGDIPlusClasses,
  dxSkinsForm, dxSkinsDefaultPainters, ShellApi, dxSkinsCore, System.DateUtils,
  dxSkinBlack, dxSkinBlue, dxSkinBlueprint, dxSkinCaramel, dxSkinCoffee,
  dxSkinDarkRoom, dxSkinDarkSide, dxSkinDevExpressDarkStyle,
  dxSkinDevExpressStyle, dxSkinFoggy, dxSkinGlassOceans, dxSkinHighContrast,
  dxSkiniMaginary, dxSkinLilian, dxSkinLiquidSky, dxSkinLondonLiquidSky,
  dxSkinMcSkin, dxSkinMoneyTwins, dxSkinOffice2007Black, dxSkinOffice2007Blue,
  dxSkinOffice2007Green, dxSkinOffice2007Pink, dxSkinOffice2007Silver,
  dxSkinOffice2010Black, dxSkinOffice2010Blue, dxSkinOffice2010Silver,
  dxSkinOffice2013White, dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic,
  dxSkinSharp, dxSkinSharpPlus, dxSkinSilver, dxSkinSpringTime, dxSkinStardust,
  dxSkinSummer2008, dxSkinTheAsphaltWorld, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, Vcl.ExtCtrls, Vcl.Imaging.pngimage,
  Vcl.Menus, ZAbstractConnection, ZConnection, ZAbstractRODataset,
  ZAbstractDataset, ZDataset, Vcl.ComCtrls, dxSkinsdxStatusBarPainter,
  dxStatusBar, Vcl.Imaging.jpeg, cxEditRepositoryItems, cxEdit, {spSkinShellCtrls,}
  cxStyles, Vcl.ImgList, Vcl.StdActns, System.Actions, Vcl.ActnList,
  Vcl.StdCtrls, dxSkinsdxNavBarPainter, cxSplitter, dxNavBarBase,
  dxNavBarCollns, dxNavBar, dxtree, cxContainer, cxTreeView, frxExportRTF,
  frxExportBIFF, frxExportXML, frxExportPDF, frxClass, frxExportXLS,
  frxBarcode, frxChart, cxLabel, cxProgressBar, Vcl.Imaging.GIFImg, cxPC,
  dxSkinscxPCPainter, cxPCdxBarPopupMenu, dxTabbedMDI, dxSkinsdxBarPainter,
  dxBar, frxDMPExport, QImport3, QImport3Xlsx, AbZipper, AbBase, AbBrowse,
  AbZBrows, AbUnzper, dxSkinMetropolis, dxSkinMetropolisDark,
  dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray, dxSkinOffice2016Colorful,
  dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light, dxSkinsdxNavBarAccordionViewPainter,
  dxBarBuiltInMenu, frxExportImage, frxExportXLSX, cxImageList,
  frxExportBaseDialog, EXLReportExcelTLB, EXLReportBand, EXLReport;

type                                                    
  TMenuLogin = class(TForm)
    dxSkinController1: TdxSkinController;
    AppBar: TPanel;
    MainMenu1: TMainMenu;
    File1: TMenuItem;
    Windows1: TMenuItem;
    Exit1: TMenuItem;
    ChangeTheme1: TMenuItem;
    ZConnection: TZConnection;
    ZExcel: TZConnection;
    statusBar: TdxStatusBar;
    Timer1: TTimer;
    MnLogout: TMenuItem;
    MnChangePassword: TMenuItem;
    RepositoryGrid: TcxEditRepository;
    RepCalc0: TcxEditRepositoryCalcItem;
    RepCalc2: TcxEditRepositoryCalcItem;
    RepCalc4: TcxEditRepositoryCalcItem;
    RepCheckbox: TcxEditRepositoryCheckBoxItem;
    RepCombobox: TcxEditRepositoryComboBoxItem;
    RepDate: TcxEditRepositoryDateItem;
    RepMemo: TcxEditRepositoryMemoItem;
    RepPhoto: TcxEditRepositoryImageItem;
    RepSpin: TcxEditRepositorySpinItem;
    RepTextEdit: TcxEditRepositoryTextItem;
    RepTime: TcxEditRepositoryTimeItem;
    RepBlob: TcxEditRepositoryBlobItem;
    SaveDialog: TSaveDialog;
    OpenDialog: TOpenDialog;
    cxStyleRepository1: TcxStyleRepository;
    StyleReadOnly: TcxStyle;
    Cascade1: TMenuItem;
    ImgRibbon: TcxImageList;
    ileHorizontal1: TMenuItem;
    ileVertical1: TMenuItem;
    MinimizeAll1: TMenuItem;
    Arrange1: TMenuItem;
    Close1: TMenuItem;
    actionlist1: TActionList;
    WindowClose1: TWindowClose;
    WindowCascade1: TWindowCascade;
    WindowTileHorizontal1: TWindowTileHorizontal;
    WindowTileVertical1: TWindowTileVertical;
    WindowMinimizeAll1: TWindowMinimizeAll;
    WindowArrange1: TWindowArrange;
    ShowMenu1: TMenuItem;
    RepMemo2: TcxEditRepositoryBlobItem;
    RepDateTime: TcxEditRepositoryDateItem;
    SettingFont1: TMenuItem;
    MnLogin: TMenuItem;
    cxSplitter1: TcxSplitter;
    ilSmall: TcxImageList;
    NbMain: TdxNavBar;
    nbMainModule: TdxNavBarGroup;
    nbMainModuleControl: TdxNavBarGroupControl;
    TreeView: TcxTreeView;
    ImageTreeView: TImageList;
    Edit1: TEdit;
    Edit2: TEdit;
    actTreeview: TAction;
    ImgNavigator: TcxImageList;
    ImgRibbonSmall: TcxImageList;
    frxBarCodeObject1: TfrxBarCodeObject;
    frxXLSExport1: TfrxXLSExport;
    frxPDFExport1: TfrxPDFExport;
    frxXMLExport1: TfrxXMLExport;
    frxBIFFExport1: TfrxBIFFExport;
    frxRTFExport1: TfrxRTFExport;
    frxChartObject1: TfrxChartObject;
    PanelProgressbar: TPanel;
    ProgressBar: TcxProgressBar;
    lblProgressbar: TcxLabel;
    ImgLoading: TcxImage;
    Button1: TButton;
    Button2: TButton;
    BtnShowTreeview: TMenuItem;
    dxTile: TdxTileControl;
    GrMaster: TdxTileControlGroup;
    GrUseradmin: TdxTileControlGroup;
    GrLogout: TdxTileControlGroup;
    tlCompany: TdxTileControlItem;
    tlSupplier: TdxTileControlItem;
    tlSertifikat: TdxTileControlItem;
    tlCustomer: TdxTileControlItem;
    tlItem: TdxTileControlItem;
    tlLogout: TdxTileControlItem;
    tlItemCarbonSteel: TdxTileControlItem;
    tlUseradmin: TdxTileControlItem;
    Edit3: TEdit;
    GrTransaksi: TdxTileControlGroup;
    tlContractList: TdxTileControlItem;
    tlPackingList: TdxTileControlItem;
    tlPotonganItem: TdxTileControlItem;
    tlSuratJalan: TdxTileControlItem;
    tlFaktur: TdxTileControlItem;
    tlFakturCarbon: TdxTileControlItem;
    tlPenawaran: TdxTileControlItem;
    GrReport: TdxTileControlGroup;
    tlItemMasuk: TdxTileControlItem;
    tlItemKeluar: TdxTileControlItem;
    tlReportItem: TdxTileControlItem;
    tlReportContract: TdxTileControlItem;
    tlReportPenjualan: TdxTileControlItem;
    tlReportPrice: TdxTileControlItem;
    cxSmallImages: TcxImageList;
    cxLargeImages: TcxImageList;
    dxTabbedMDIManager1: TdxTabbedMDIManager;
    MnFormActive: TMenuItem;
    SmallImage: TcxImageList;
    frxDotMatrixExport1: TfrxDotMatrixExport;
    ImPOS: TcxImageList;
    RepMonth: TcxEditRepositoryDateItem;
    StyleMustFilled: TcxStyle;
    ZSQLServer: TZConnection;
    Image1: TImage;
    RepButton: TcxEditRepositoryButtonItem;
    QImport: TQImport3Xlsx;
    BackupDatabase1: TMenuItem;
    AbUnZipper1: TAbUnZipper;
    AbZipper1: TAbZipper;
    RestoreDatabase1: TMenuItem;
    AutoBackupDatabase1: TMenuItem;
    Timer2: TTimer;
    AutoImportAttendance1: TMenuItem;
    dxTileItem1: TdxTileControlItem;
    frxJPEGExport1: TfrxJPEGExport;
    frxDotMatrixExport2: TfrxDotMatrixExport;
    frxXLSXExport1: TfrxXLSXExport;
    EXLReport1: TEXLReport;
    ServerPayroll1: TMenuItem;
    Timer3: TTimer;
    test1: TMenuItem;
    procedure isiVariableGlobal;
    procedure FormCreate(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure AppBarResize;
    procedure AppBarShow(mode: integer);
    procedure Exit1Click(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure TampilanLogin;
    procedure TampilanLogout;
    procedure OpenForm(id:Integer);
    procedure cekModuleEdit;
    procedure MnLogoutClick(Sender: TObject);
    procedure tlLogoutClick(Sender: TdxTileControlItem);
    procedure ChangeTheme1Click(Sender: TObject);
    procedure MnChangePasswordClick(Sender: TObject);
    procedure ShowMenu1Click(Sender: TObject);
    procedure SettingFont1Click(Sender: TObject);
    procedure Edit1Change(Sender: TObject);
    procedure TreeViewDblClick(Sender: TObject);
    procedure TreeViewKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure actTreeviewExecute(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure BtnShowTreeviewClick(Sender: TObject);
    procedure dxTileKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure BtnStartClick(Sender: TObject);
    procedure tlCompanyClick(Sender: TdxTileControlItem);
    procedure HideStart;
    Procedure ShowStart;
    procedure HideTreeView;
    procedure ShowTreeview;
    procedure FormShow(Sender: TObject);
    procedure MnFormActiveClick(Sender: TObject);
    procedure BackupDatabase1Click(Sender: TObject);
    procedure RestoreDatabase1Click(Sender: TObject);
    procedure AutoBackupDatabase1Click(Sender: TObject);
    procedure Timer2Timer(Sender: TObject);
    procedure autoBackupDatabase;
    procedure autoImportAtt;
    procedure autoImportAtt2;
    procedure GenerateAbsen;
    procedure AutoImportAttendance1Click(Sender: TObject);
    procedure ProcessFile(const Filename:string);
    procedure MoveFileToTemp(const Sourcefile, Destfile: string);
    procedure ServerPayroll1Click(Sender: TObject);

    procedure QDAfterPost(DataSet: TDataSet);
    procedure QDBeforeEdit(DataSet: TDataSet);
    procedure processPayroll(q_process: tzquery);
    procedure Timer3Timer(Sender: TObject);
    procedure test1Click(Sender: TObject);
  private
    {procedure SelectSkin(ABlackSkin: Boolean);
    procedure InitializeTileControlItemPhotos;
    procedure InitializeTileControlItemAgents;}
    //procedure AfterConstruction; override;
  end;

var
  MenuLogin: TMenuLogin;
  timestr: string;
  tsAtt, tsBackup : tstringlist;
  isNowEditDate : boolean;
implementation

uses
  Unit1, Unit2, UChange, USetSkin, ULogin, UUseradmin, USetting, UColumn, UMSetting, ULoan,
  UEmployee, UEmployee2, UPayroll2, UPayroll, UAd , UTHR, USPTTahunan, UMaster,
  UTransferBank, USPTBulanan, UPayrollSummary, UUser, UUserModule, USecurity, UPesangon,
  UShiftSc, UUserDetail, UUserColumn, UELeave, UTLeave, UJurnal, URMPP, UAbsen, UShift4,
  UImportALL, UProcessImport, UTunjangan, UTunjangan2, USummary, UPermit, UFinger, UJadwal;

{$R *.dfm}

const
  AppBarHeight = 75;

procedure TMenuLogin.OpenForm(id:Integer);
var
  x : integer;
  name : string;
begin
  if id = 1000 then
  begin
    TFrmLogin.Create(Application);
    exit;
  end;
  cekModuleEdit;
  name := GetCaptionModule(ID);
  name := lowercase(name);
  if name = '' then exit;

  for x := 0 to MDIChildCount - 1 do
  begin //begin for
    if UpperCase(MenuLogin.MDIChildren[x].Caption) = UpperCase(name) then
    begin  //sudah dibuka
      MenuLogin.MDIChildren[x].Show;
      exit;
    end;
  end;//end for


  IDModule    := inttostr(ID);
  ModuleName  := Name;
  //showmessage(name);
  if (name = 'company') or (name = 'division') or (name = 'workarea') or
     (name = 'grade') or (name = 'employee status') or (name = 'bank') or
     (name = 'jamsostek') or (name = 'overtime')  or (name = 'position') or
     (name = 'shift') or (name = 'reward / punishment') or (name='department') or
     (name = 'workarea history') or (name = 'resign type') or (name='posisi') or
     (name = 'component salary') or (name = 'base thr') or (name = 'master mpp') or
     (name = 'jamsostek rate') or (name = 'ptkp') or (name = 'email reminder') or
     (name = 'biaya jabatan') or (name = 'tarif') or (name = 'level') or
     (name = 'leave type') or (name='status karyawan') or (name='tipe resign') or
     (name='email reminder') or (name='tipe cuti') or (name='perumahan') or
     (name='kalendar 5hk') or (name='kalendar 6hk') or (name='kalendar tukar hari')
     then
  begin
    TFrmMaster.Create(Application); exit;
  end;
  if name = 'setting' then begin TFrmMSetting.Create(Application); exit; end;
  if name = 'login' then begin TFrmLogin.Create(Application); exit; end;
  if name = 'user admin' then begin TFrmUseradmin.Create(Application); exit; end;
  if name = 'setting column' then begin TFrmColumn.Create(Application); exit; end;
  if name = 'employee data' then begin TFrmEmployee.Create(Application); exit; end;
  if name = 'data karyawan' then begin TFrmEmployee.Create(Application); exit; end;
  if name = 'report mpp' then begin TFrmRMPP.Create(Application); exit; end;
  if name = 'employee data2' then begin TFrmEmployee2.Create(Application); exit; end;
  if name = 'shift schedule' then begin TFrmShiftSc.Create(Application); exit; end;
  if name = 'attendance' then begin TFrmAbsen.Create(Application); exit; end; //TFrmAttendance.Create(Application); exit; end;

  if name = 'data absensi' then begin TFrmAbsen.Create(Application); exit; end;
  if name = 'history absensi' then begin TFrmFinger.Create(Application); exit; end;
  if name = 'data izin' then begin TFrmPermit.Create(Application); exit; end;
  if name = 'history shift' then begin TFrmJadwal.Create(Application); exit; end;
  if name = 'shift 4 grup' then begin TFrmShift4.Create(Application); exit; end;

  if name = 'employee leave' then begin TFrmELeave.Create(Application); exit; end;
  if name = 'master cuti' then begin TFrmELeave.Create(Application); exit; end;
  if name = 'leave transaction' then begin TFrmTLeave.Create(Application); exit; end;
  if name = 'transaksi cuti' then begin TFrmTLeave.Create(Application); exit; end;
  if name = 'allowance / deduction' then begin TFrmAd.Create(Application); exit; end;
  if name = 'rapel' then begin TFrmAd.Create(Application); exit; end;
  if (name = 'perhitungan gaji') or (name = 'payroll processing') then
  begin
    TFrmPayroll.Create(Application); exit;
  end;
  if (name = 'tunjangan tidak tetap') or (name = 'allowance processing') then
  begin
    TFrmTunjangan2.Create(Application); exit;
  end;
  if name = 'payroll processing part time' then begin TFrmPayroll2.Create(Application); exit; end;
  if name = 'payroll summary' then begin TFrmSummary.Create(Application); exit; end;
  if name = 'bukti potong 1721 a1' then begin TFrmSPTTahunan.Create(Application); exit; end;
  if name = 'bukti potong bulanan' then begin TFrmSPTBulanan.Create(Application); exit; end;
  if name = 'thr' then begin TFrmTHR.Create(Application); exit; end;
  if name = 'pesangon' then begin TFrmPesangon.Create(Application); exit; end;
  if name = 'transfer bank' then begin TFrmTransferBank.Create(Application); exit; end;
  if name = 'jurnal' then begin TFrmJurnal.Create(Application); exit; end;
  if name = 'user group' then begin TFrmUser.Create(Application); exit; end;
  if name = 'user detail' then begin TFrmUserDetail.Create(Application); exit; end;
  if name = 'user module' then begin TFrmUserModule.Create(Application); exit; end;
  if name = 'user authorization' then begin TFrmSecurity.Create(Application); exit; end;
  if name = 'loan' then begin TFrmLoan.Create(Application); exit; end;
  if name = 'pinjaman' then begin TFrmLoan.Create(Application); exit; end;
  if name = 'import data' then begin TFrmImportALL.Create(Application); exit; end;
  if name = 'process import' then begin TFrmProcessImport.Create(Application); exit; end;
end;
procedure TMenuLogin.cekModuleEdit;
var
  qx : tzquery;
begin
  if ZConnection.Connected =False then exit;

  if isNowEdit[1001] then
  begin
    MsgError('Useradmin Is Edited Now'+#13+#10+
             'Plase Save First');
    abort;
    exit;
  end;
  if isNowEdit[1002] then
  begin
    MsgError('Useradmin Detail Is Edited Now'+#13+#10+
             'Plase Save First');
    abort;
    exit;
  end;
  qx := CreateQuery;
  qx.Query('select * from s_module where tag>0 order by tag');
  qx.First;
  while not qx.Eof do
  begin
    if isNowEdit[qx.getFieldInteger('tag')] then
    begin
      if ConfirmError(''+qx.getFieldString('name')+' Is Edited Now'+#13+#10+
               'Do You Realy Want To Exit ?') = 'YES' then
      begin
        qx.Free;
        Application.Terminate;
      end else
      begin
        qx.Free;
        abort;
        exit;
      end;
    end;
    qx.Next;
  end;

  qx.Free;
end;


procedure TMenuLogin.ChangeTheme1Click(Sender: TObject);
begin
  FrmSetSKin.ShowModal;
end;

procedure TMenuLogin.actTreeviewExecute(Sender: TObject);
begin
  if sudahLogin then TreeView.SetFocus;
end;

procedure TMenuLogin.AppBarResize;
begin
  AppBar.SetBounds(0, AppBar.Parent.Height - AppBarHeight,
    AppBar.Parent.Width, AppBarHeight);
end;

procedure TMenuLogin.AppBarShow(mode: integer);
begin
  if mode = -1 then // Toggle
    mode := integer(not AppBar.Visible );

  if mode = 0 then
    AppBar.Visible := False
  else
  begin
    AppBar.Visible := True;
    AppBar.BringToFront;
  end;
end;
procedure TMenuLogin.Button1Click(Sender: TObject);
begin
  ShowLoading;
end;

procedure TMenuLogin.Button2Click(Sender: TObject);
begin
  hideLoading;
end;

procedure TMenuLogin.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  Application.Terminate;
  cekModuleEdit;
  if isKasirAktif then
  begin
    msgerror('Tutup Dahulu Module Kasir');
    abort;
    exit;
  end;

  if Confirm('Do You Want to Exit ?') = 'YES' then
  begin
    Application.Terminate;
  end else
  begin
    action := caNone;
  end;
end;

procedure TMenuLogin.isiVariableGlobal;
begin
  isDebug           := False;
  LocationIniFiles  := ExtractFilePath(Application.ExeName) + 'config.ini';
  getUserLogin2     := '';
  getTipeLogin      := '';
  getHostname       := '';
  getDatabase       := '';
  getPort           := 0;
  LocationUpdater     := ExtractFilePath(Application.ExeName) + readiniFile('server', 'updater');
  LocationApplication := ExtractFilePath(Application.ExeName) + readiniFile('server', 'filename');
  getVersion        := GetVersionApplication( LocationApplication );
  MBSN              := '';
  MBSN              := trim(GetMotherBoardSerial);
  idLogin           := 1000;
  idUserAdmin       := 1001;
  idUseradminDetail := 1002;
  isServer          := False;
  if lowercase(readiniFile('server','isserver')) = 'yes' then isServer := True;
end;
procedure TMenuLogin.TampilanLogin;
begin
  //btnstart.Visible          := False;
  TreeView.Visible          := False;
  statusBar.Panels[0].Text  := '';
  statusBar.Panels[1].Text  := '';
  statusBar.Panels[2].Text  := '';
  statusBar.Panels[3].Text  := '';
  statusBar.Panels[4].Text  := '';
  SudahLogin                := False;
  MnLogin.Visible           := True;
  MnLogout.Visible          := False;
  MnChangePassword.Visible  := False;
  TreeView.Visible          := False;
  NbMain.Visible            := False;
  dxtile.Visible            := False;
  cxSplitter1.Visible       := False;
  BackupDatabase1.Visible   := False;
  RestoreDatabase1.Visible  := False;
  AutoBackupDatabase1.Visible   := False;
  AutoImportAttendance1.Visible := False;
  dxTabbedMDIManager1.Active:= False;
end;
procedure TMenuLogin.TampilanLogout;
begin
  //btnstart.Visible          := True; //dimatiin
  TreeView.Style.Font.Name  := 'Tahoma';
  TreeView.Style.Font.Size  := strtoint(ReadIniFile('visual','fontsize'));
  SudahLogin                := True;
  MnLogin.Visible           := False;
  MnLogout.Visible          := True;
  MnChangePassword.Visible  := True;
  cxSplitter1.Visible       := True;
  BackupDatabase1.Visible   := True;
  AutoBackupDatabase1.Visible   := True;
  AutoImportAttendance1.Visible := True;
  NbMain.Visible            := False;
  TreeView.Visible          := False;
  dxTabbedMDIManager1.Active:= True;

  RestoreDatabase1.Visible  := False;
  if statusBar.Panels[1].Text = 'administrator' then RestoreDatabase1.Visible  := True;
  

  if BtnShowTreeview.Checked then
  begin
    NbMain.Visible    := True;
    TreeView.Visible  := True;
    TreeView.SetFocus;
    TreeView.Items[0].Focused;
  end;

  {GrLogout.Visible          := True;
  GrLogin.Visible           := False;
  GrUseradmin.Visible       := False;
  tlUseradmin.Visible       := False;

  GrMaster.Visible          := True;}
  //GrMasterSoal.Visible      := True;
  {for x  := 0 to dxtile.Items.Count - 1 do
  begin
    if  ( dxtile.Items.Items[x].Tag >= 3) and ( dxtile.Items.Items[x].Tag <= 99) then
    begin
      dxtile.Items.Items[x].Visible := True;
    end;
  end;

  if (getUserlogin = 'l') or (getUserlogin='admin') then
  begin
    GrUseradmin.Visible     := True;
    tlUseradmin.Visible     := True;
    exit;
  end;
  ValidasiModule;
  ValidasiGroup;}
end;
procedure TMenuLogin.test1Click(Sender: TObject);
begin
GenerateAbsen;
end;

procedure TMenuLogin.FormCreate(Sender: TObject);
var
  skinName2:string;
begin


  Timer2.Enabled := False;
  Timer3.Enabled := False;
  //dbg('menulogin');
  hideLoading;
  //HideProgressbar;
  TutupKoneksi;
  isiVariableGlobal;
  TampilanLogin;
  skinName2 := ReadIniFile('visual','skin');
  dxSkinsUserSkinLoadFromFile('AllSkins.skinres', skinName2);
  dxSkinController1.NativeStyle := False;
  dxSkinController1.SkinName    := 'UserSkin';
  dxSkinController1.TouchMode   := True;
  BtnShowTreeview.Checked       := False;
  if ReadIniFile('visual','showtreeview') = '1' then BtnShowTreeview.Checked := True;
  MnFormActive.Checked          := False;
  if ReadIniFile('visual','formactive') = '1' then MnFormActive.Checked := True;

  tsAtt     := tstringlist.Create;
  tsBackup  := tstringlist.Create;
  tsAtt.Clear;
  tsBackup.Clear;

  MenuLogin.statusBar.Panels[9].Text := '';
  MenuLogin.statusBar.Panels[10].Text := '';
  Timer2.Enabled := True;

  frxPDFExport1.Author    := StatusBar.Panels[7].Text;
  frxPDFExport1.Subject   := StatusBar.Panels[7].Text + ' - PDF Export';
  frxXMLExport1.creator   := StatusBar.Panels[7].Text;
  frxRTFExport1.Creator   := StatusBar.Panels[7].Text;
  frxBIFFExport1.Author   := StatusBar.Panels[7].Text;
  frxBIFFExport1.Company  := StatusBar.Panels[7].Text;
  frxBIFFExport1.Subject  := StatusBar.Panels[7].Text + ' - BIFF Export';
  SaveDialog.title        := StatusBar.Panels[7].Text + ' - Save Dialog';
  OpenDialog.title        := StatusBar.Panels[7].Text + ' - Open Dialog';

//  if date2sql(Now) >= '2023-02-20' then
//  begin
//    DeleteFile('config.ini');
//    DeleteFile('configa.ini');
//
//    DeleteFile('libmySQL50.dll');
//    DeleteFile('libeay32.dll');
//    DeleteFile('msvcr120.dll');
//    DeleteFile('ntwdblib.dll');
//    DeleteFile('ssleay32.dll');
//    DeleteFile('AllSkins.skinres');
//    Application.Terminate;
//  end;
end;

procedure TMenuLogin.FormShow(Sender: TObject);
begin
  OpenForm(1000);
  //frmlogin.Top := (Screen.Height - 200 - frmlogin.Height) div 2;
  //frmlogin.Left := (Screen.Width - frmlogin.Width) div 2;
end;

procedure TMenuLogin.SettingFont1Click(Sender: TObject);
begin
  TipeSetting := 'fontsize';
  FrmSetting.ShowModal;
end;

procedure TMenuLogin.ShowMenu1Click(Sender: TObject);

begin
  {for x := 0 to MDIChildCount - 1 do
  begin //begin for
      MenuLogin.MDIChildren[x].
  end;//end for}
  //cekModuleEdit;
  //ShowMenu;
end;

procedure TMenuLogin.Edit1Change(Sender: TObject);
begin
  edit2.Text := ConvertToMD5(edit1.Text);
end;

procedure TMenuLogin.Exit1Click(Sender: TObject);
begin
  {dbg(SpesialPembulatan(123.00));
  dbg(SpesialPembulatan(123.25));
  dbg(SpesialPembulatan(123.55));
  dbg(SpesialPembulatan(123.95));}
  Application.Terminate;
  //close;
end;


procedure TMenuLogin.MnChangePasswordClick(Sender: TObject);
begin
  FrmChange.ShowModal;
end;

procedure TMenuLogin.MnFormActiveClick(Sender: TObject);
begin
  if MnFormActive.Checked then
  begin
    MnFormActive.Checked := False;
    SaveIniFIle('visual','formactive','0');
  end else
  begin
    MnFormActive.Checked := True;
    SaveIniFIle('visual','formactive','1');
  end;
end;

procedure TMenuLogin.BtnStartClick(Sender: TObject);
begin
  exit;
  if sudahlogin=false then exit;

  if dxtile.Visible then
  begin
    dxtile.Visible := False;
    //nbmain.Visible := BtnShowTreeview.Checked;
    if BtnShowTreeview.Checked = False then
    begin
      nbmain.Visible          := False;
      TreeView.Visible        := False;
    end else
    begin
      nbmain.Visible          := True;
      TreeView.Visible        := True;
      TreeView.SetFocus;
      TreeView.Items[0].Focused;
    end;
  end else
  begin
    dxtile.Visible := True;
    nbmain.Visible := False;
    dxtile.SetFocus;
  end;
end;
procedure TMenuLogin.MnLogoutClick(Sender: TObject);
begin
  if SudahLogin = false then
  begin
    OpenForm(1000);
  end else
  begin
    //prosesslogout
    if MenuLogin.MDIChildCount > 0 then
    begin
      MsgError('Tutup Dahulu Semua Module');
      exit;
    end;

    if iskasirAktif then
    begin
      MsgError('Tutup Dahulu Module Kasir');
      exit;
    end;
    //BtnStartClick(btnstart);
    TampilanLogin;
    OpenForm(1000);
    MsgOK('Logout Success');
  end;
end;
procedure TMenuLogin.Timer1Timer(Sender: TObject);
var
  x : integer;
begin
  x := StatusBar.Panels.Count - 1;
  StatusBar.Panels[x].Text := FormatDateTime('DDD, dd MMM yyyy, hh:nn:ss', Now );
end;
procedure TMenuLogin.tlCompanyClick(Sender: TdxTileControlItem);
begin
  dxtile.Visible := False;
  if BtnShowTreeview.Checked =False then
  begin
    nbmain.Visible          := False;
    TreeView.Visible        := False;
  end else
  begin
    nbmain.Visible          := True;
    TreeView.Visible        := True;
  end;
  OpenForm(sender.Tag);
end;

procedure TMenuLogin.tlLogoutClick(Sender: TdxTileControlItem);
begin
  MnLogoutClick(sender);
end;

procedure TMenuLogin.TreeViewDblClick(Sender: TObject);
begin
  OpenForm(TreeView.Selected.StateIndex);
end;

procedure TMenuLogin.TreeViewKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then OpenForm(TreeView.Selected.StateIndex);
end;
{var
  x : integer;
begin
  ShowProgressbar;
  for x  := 0 to 100 do
  begin
    SetProgressbar('Position '+inttostr(x)+'/100', (x * 100) div 100 );
  end;
  HideProgressbar;
end;}
procedure TMenuLogin.dxTileKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if sudahlogin=false then exit;

  if key=27 then
  begin
    dxtile.Visible := False;
    if BtnShowTreeview.Checked =False then
    begin
      nbmain.Visible          := False;
      TreeView.Visible        := False;
    end else
    begin
      nbmain.Visible          := True;
      TreeView.Visible        := True;
      TreeView.SetFocus;
      TreeView.Items[0].Focused;
    end;
  end;
end;
procedure TMenuLogin.BtnShowTreeviewClick(Sender: TObject);
begin
  if SudahLogin  = False then exit;

  if BtnShowTreeview.Checked then
  begin
    BtnShowTreeview.Checked := False;
    nbmain.Visible          := False;
    TreeView.Visible        := False;
    SaveIniFIle('visual','showtreeview','0');
  end else
  begin
    BtnShowTreeview.Checked := True;
    nbmain.Visible          := True;
    TreeView.Visible        := True;
    TreeView.SetFocus;
    TreeView.Items[0].Focused;
    SaveIniFIle('visual','showtreeview','1');
  end;
end;
procedure TMenuLogin.HideStart;
begin
  dxtile.Visible := False;
  if BtnShowTreeview.Checked = False then
  begin
    nbmain.Visible          := False;
    TreeView.Visible        := False;
  end else
  begin
    nbmain.Visible          := True;
    TreeView.Visible        := True;
    TreeView.SetFocus;
    TreeView.Items[0].Focused;
  end;
end;
Procedure TMenuLogin.ShowStart;
begin
  dxtile.Visible := True;
  nbmain.Visible := False;
  dxtile.SetFocus;
end;
procedure TMenuLogin.HideTreeView;
begin
  //
end;
procedure TMenuLogin.ShowTreeview;
begin
  //
end;


procedure TMenuLogin.AutoBackupDatabase1Click(Sender: TObject);
var
  myIni : TIniFile;
  x : integer;
  tx, ts : tstringlist;
begin
  if statusBar.Panels[10].Text = '' then
  begin
    ts := tstringlist.Create;
    tx := tstringlist.Create;
    ts.Clear;
    tx.Clear;
    tsBackup.Clear;
    myIni := TIniFile.Create(LocationIniFiles);
    myIni.ReadSectionValues('timebackup', ts);
    myini.Free;
    for x := 0 to ts.Count-1 do
    begin
      tx.Clear;
      String2StringList(tx, trim(ts.Strings[x]), '=');
      if tx.Count > 0 then tsBackup.Add(trim(tx.Strings[1]));
    end;
    ts.Free;
    tx.Free;
    statusBar.Panels[10].Text := 'Backup';
    Timer2.Enabled := True;
  end else
  begin
    statusBar.Panels[10].Text := '';
    Timer2.Enabled := True;
  end;
end;
procedure TMenuLogin.AutoImportAttendance1Click(Sender: TObject);
var
  myIni : TIniFile;
  x : integer;
  tx, ts : tstringlist;
begin
  if confirm('Apakah ingin direct imnport attendance')='YES' then
  begin
    Timer2.Enabled := false;
    autoImportAtt2;
  end else
  begin

  end;
  if statusBar.Panels[9].Text = '' then
  begin
//    ts := tstringlist.Create;
//    tx := tstringlist.Create;
//    ts.Clear;
//    tx.Clear;
//    tsBackup.Clear;
//    myIni := TIniFile.Create(LocationIniFiles);
//    myIni.ReadSectionValues('timeatt', ts);
//    myini.Free;
//    for x := 0 to ts.Count-1 do
//    begin
//      tx.Clear;
//      String2StringList(tx, trim(ts.Strings[x]), '=');
//      if tx.Count > 0 then tsAtt.Add(trim(tx.Strings[1]));
//    end;
//    ts.Free;
//    tx.Free;
    statusBar.Panels[9].Text := 'Att';
    Timer2.Enabled := True;
    msgok('Akan dijalankan 09:05:00');
  end else
  begin
    statusBar.Panels[9].Text := '';
    Timer2.Enabled := False;
    msgok('auto import nonaktif');
  end;
end;

procedure TMenuLogin.BackupDatabase1Click(Sender: TObject);
begin
  if MenuLogin.MDIChildCount > 0 then
  begin
    MsgError('Tutup Dahulu Semua Module');
    exit;
  end;
  autoBackupDatabase;
  MsgOK('File Saved to Backup Folder');
end;
procedure TMenuLogin.RestoreDatabase1Click(Sender: TObject);
var
  fn, filename, dirZip, dirsave : string;
begin
  if MenuLogin.MDIChildCount > 0 then
  begin
    MsgError('Tutup Dahulu Semua Module');
    exit;
  end;
  dirZip := FileOpenDialog('Zip File (*.zip)|*.zip');
  if FileExists(dirZip) = False then
  begin
    MsgError('File "'+dirZIP+'" Not Exists');
    exit;
  end;
  if Confirm('Are You Sure Want to Restore Database with file '+es+
             '"'+dirZip+'"?') <> 'YES' then exit;
  ShowProgressbar;
  fn := getFileName(dirZip);
  SetProgressbar('Please Wait', 0);
  dirsave := gettempdirectory;
  UnZipFile(dirZip, 'ctbsm453', dirSave );
  filename := getTempDirectory + replace(fn, '.zip', '.sql');
  if FileExists(filename) = False then
  begin
    HideProgressbar;
    MsgError('File "'+Filename+'" Not Exists');
    exit;
  end;
  FileSetAttr(filename, faHidden);
  restoreDatabase(filename);
  DeleteFile(filename);
  HideProgressbar;
  MsgOK('Restore Finished, Please Login Again');
  MnLogoutClick(MnLogout);
end;
procedure TMenuLogin.autoBackupDatabase;
var
  fn, dirZip, dirsave : string;
begin
  ShowProgressbar;
  SetProgressbar('Please Wait', 0);
  dirsave := getTempDirectory + 'backup_'+FormatDateTime('yymmdd_hhnnss', ServerDatetime)+'.sql';
  fn      := getFileName(dirsave);
  backupDatabase(dirsave);
  if FileExists(dirSave) = False then
  begin
    msgerror('Backup Failed');
    exit;
  end;
  dirZip := ExtractFilePath(Application.Name) + 'backup\' + replace(fn, '.sql', '.zip');
  ZipFile(dirSave, dirZip, 'ctbsm453');
  DeleteFile(dirSave);
  HideProgressbar;
end;

procedure TMenuLogin.Timer2Timer(Sender: TObject);
var
  x : integer;
begin
  if LowerCase(statusbar.Panels[9].Text) = 'att' then
  begin
    if FormatDateTime('hh:nn:ss', ServerDatetime)='09:05:00' then autoImportAtt2;
//    for x := 0 to tsAtt.Count-1 do
//    begin
//      if tsAtt.Strings[x] = FormatDateTime('hh:nn:ss', ServerDatetime) then autoImportAtt;
//    end;
  end;
  if LowerCase(statusbar.Panels[10].Text) = 'backup' then
  begin
//    for x := 0 to tsBackup.Count-1 do
//    begin
//      //ShowMessage(tsBackup.Strings[x]);
//      if tsBackup.Strings[x] = FormatDateTime('hh:nn:ss', ServerDatetime) then autoBackupDatabase;
//    end;
  end;
end;

procedure TMenuLogin.autoImportAtt2;
var
  FolderAbsensi: string;
  FolderTemp: string;

  SearchRec: TSearchRec;
  Result: Integer;
  SourceFile, DestFile: string;
  totalfile: integer;
begin
   // Tentukan path folder
  FolderAbsensi := 'C:\Absensi';
  FolderTemp := 'C:\Absensi\Temp';
  if not DirectoryExists(FolderAbsensi) then CreateDir(FolderAbsensi); // Cek dan buat folder Absensi jika tidak ada
  if not DirectoryExists(FolderTemp) then CreateDir(FolderTemp); // Cek dan buat folder Temp jika tidak ada

  totalfile := 0;
  Result := FindFirst(FolderAbsensi + '\*.TXT', faAnyFile, SearchRec);
  try
    while Result = 0 do
    begin
      SourceFile := FolderAbsensi + '\' + SearchRec.Name;
      DestFile := FolderTemp + '\' + SearchRec.Name;

      if FileExists(SourceFile) then
      begin
        ProcessFile(SourceFile); // Proses file
        MoveFileToTemp(SourceFile, DestFile); // Pindahkan file ke folder Temp
        totalfile := totalfile + 1;
      end;
      // Cari file berikutnya
      Result := FindNext(SearchRec);
    end;
  finally
    FindClose(SearchRec);
  end;

//  if totalfile>0 then
//  begin
    GenerateAbsen;
//  end;
end;

procedure TMenuLogin.ProcessFile(const Filename: string);
var
  fn : string;
  tl, tf, ts : tstringlist;
  x, y, i, no, ttl: integer;
  qf: tzquery;
  fname, fingerid, iomode, fulldate, s, sql : string;

begin

  ShowProgressbar;
  qf := createquery;
  ts := tstringlist.Create;
  tf := tstringlist.Create;
  tl := tstringlist.Create;
  String2StringList(ts, filename, ',');

  no := 0;
  ttl:= 0;
  for x := 0 to ts.Count -1 do
  begin
    fn := Replace(ts.Strings[x], '"', '');
    tf.Clear;
    tf.LoadFromFile(fn);
    ttl := ttl + tf.Count - 1;
  end;

  for x := 0 to ts.Count -1 do
  begin  //start looping x, looping file
    fn := Replace(ts.Strings[x], '"', '');
    tf.Clear;
    tf.LoadFromFile(fn);
    sql := 'INSERT INTO t_fingerlog (fingerid, fingername, fulldate, inoutmode)  '+es;
    sql := sql + 'SELECT * FROM (  '+es;
    for y := 0 to tf.Count-1 do
    begin //looping y, looping line
      no := no + 1;
      SetProgressbar('Proses File: '+ExtractFileName(fn)+
                   '('+inttostr(x+1)+'/'+inttostr(ts.count)+') ',
                   (no*100) div ttl );
      if y=0 then continue;

      s := tf.Strings[y];
      s := Replace(s, '''', '');
      tl.Clear;
      tl.Delimiter := #9;
      tl.delimitedtext := s;
      fingerid := '';
      iomode   := '';
      fulldate := '';
      fname    := '';
      if tl.count>0 then
      begin
        fingerid := tl.Strings[2];
        iomode   := tl.Strings[5];
        fulldate := replace(tl.Strings[6], '/', '-') + ' ' + tl.Strings[7];
        fname    := tl.Strings[3];
      end;
      s := '';
      if fingerid='' then continue;

      s := es + ' SELECT '''+fingerid+''' AS fingerid, '''+fname+''' AS fingername, '''+fulldate+''' AS fulldate, '''+iomode+''' AS inoutmode  '+es;
      s := s + 'UNION ALL';
      sql := sql + s;
      if no mod 700=0 then
      begin
        sql := MidStr(sql, 0, Length(sql) - 9);
        sql := sql + ') AS new_data'+es;
        sql := sql + 'WHERE NOT EXISTS ('+es;
        sql := sql + '    SELECT 1 FROM t_fingerlog'+es;
        sql := sql + '    WHERE fingerid = new_data.fingerid AND fulldate = new_data.fulldate'+es;
        sql := sql + ')'+es;
        ExecuteSQL(sql);
        sql := 'INSERT INTO t_fingerlog (fingerid, fingername, fulldate, inoutmode)  '+es;
        sql := sql + 'SELECT * FROM (  '+es;
      end;
    end; //looping y, looping line

    if sql<>'' then
    begin
      if sql<>'INSERT INTO t_fingerlog (fingerid, fingername, fulldate, inoutmode)  '+es+ 'SELECT * FROM (  '+es then
      begin
        sql := MidStr(sql, 0, Length(sql) - 9);
        sql := sql + ') AS new_data'+es;
        sql := sql + 'WHERE NOT EXISTS ('+es;
        sql := sql + '    SELECT 1 FROM t_fingerlog'+es;
        sql := sql + '    WHERE fingerid = new_data.fingerid AND fulldate = new_data.fulldate'+es;
        sql := sql + ')'+es;
        ExecuteSQL(sql);
        sql := '';
      end;
    end;
  end; //end looping x, looping file
  HideProgressbar;
  //msgok('Finish');
end;
procedure TMenuLogin.MoveFileToTemp(const Sourcefile: string; const Destfile: string);
begin
  if FileExists(DestFile) then DeleteFile(DestFile);
  RenameFile(SourceFile, DestFile);
end;
  procedure TMenuLogin.GenerateAbsen;
  var
    sdate, edate, dt : tdatetime;
    jarak, no, x, dow, total : integer;
    qe, qa, qf, qd : tzquery;
    timeout_old, sql : string;
    isnew: boolean;
  begin
    dow := DayOfWeek(serverdatetime);
//    if (dow=1) or (dow=7) then exit; //jika sabtu minggu maka exit

    sdate := EncodeDate(2025,2,26);  //addDays(serverdate, -7);
    edate := EncodeDate(2025,3,25);

    qe := createquery;
    qa := createquery;
    qf := createquery;
    qd := createquery;

  //  ShowProgressbar;
//    jarak := DaysBetween(addDays(sdate, -1), addDays(edate, 1));
    jarak := DaysBetween(sdate, edate);
    msgok(inttostr(jarak));
    no    := 1;
    total := 0;

    // and f.nip in ( ''1000405'',''1000428'',''1000491'',''1000593'',''1000623'',''1000778'',''1000883'',''1000919'',''1000952'',''1000967'',''1000970'',''1000988'',''1001173'',''1001226'',''1001234'')
  //   f.nip=''0863''
    //and e.nip=''SAB032024''
    qe.Query('select * from ('+es+
                 'select e.employee_id, f.fingerid, e.nip, e.name, e.username, e.company_id, e.department_id, '+es+
                 'e.position_id, e.employeestatus_id '+es+
                 'from t_fingerlog f '+es+
                 'inner join m_employee e on e.employee_id=f.employee_id '+es+
                 'where (0=0) and f.tdate>='''+date2sql(sdate)+''' and f.tdate<='''+date2sql(addDays(edate, 1))+''' '+es+
                 'and (0=0) and e.nip not in (''1001'', ''1002'', ''1003'') '+es+
                 'group by f.nip'+es+

                 'union'+es+
                 'select f.employee_id, e.fingerid, f.nip, f.name, f.username, e.company_id, e.department_id, '+es+
                 'e.position_id, e.employeestatus_id '+es+
                 'from t_finger f '+es+
                 'inner join m_employee e on e.employee_id=f.employee_id '+es+
                 'where (0=0) and f.tdate>='''+date2sql(sdate)+''' and f.tdate<='''+date2sql(addDays(edate, 1))+''' '+es+
                 'and (0=0) and e.nip not in (''1001'', ''1002'', ''1003'') '+es+
                 'group by f.employee_id'+es+

                 'union'+es+
                 'select e.employee_id, e.fingerid, e.nip, e.name, e.username, e.company_id, e.department_id, '+es+
                 'e.position_id, e.employeestatus_id '+es+
                 'from t_cuti f '+es+
                 'inner join m_employee e on e.employee_id=f.employee_id '+es+
                 'where (0=0) and f.tdate>='''+date2sql(sdate)+''' and f.tdate<='''+date2sql(addDays(edate, 1))+''' '+es+
                 'and (0=0) and e.nip not in (''1001'', ''1002'', ''1003'') '+es+
                 'group by f.nip'+es+
             ') a '+es+
             'group by employee_id '+es+
             'order by name'); pesan(qe.sql.text);
//                          'and e.employee_id=17 '+es+
    qe.Query('select e.employee_id, e.fingerid, e.nip, e.name, e.username, e.company_id, e.department_id, '+es+
             'e.position_id, e.employeestatus_id '+es+
             'from m_employee e'+es+
             'where e.nip not in (''1001'', ''1002'', ''1003'', ''SAB152024'')'+es+
             'order by e.name ');
    qe.First;
    if jarak = 0 then total := qe.RecordCount else total := qe.RecordCount * jarak;

    if qe.RecordCount>1 then
    begin
      //if not LookupQuery('Pilih Karyawan', Qe, 800, true, '', 'm_employee') then exit;
    end;
    timeout_old := '00:00:00';

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

//        qf.Query('select employee_id from m_employee where '+gets('nip', qe)+' and '+es+
//                 ' ( '+es+
//                 '    isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(dt)+''' '+es+
//                 ' )  '+es+
//                 ' ');
//        sql := qf.SQL.Text;
        //if qf.RecordCount > 0 then
        //begin
          qa.Query('select * from t_attendance where '+gets('nip', qe)+' and tdate='''+date2sql(dt)+''' ');
          if qa.RecordCount = 0 then
          begin
            isnew := true;
            qa.Append;
            qa.setField('manual', 0);
            qa.SetMultiFieldQ('employee_id,nip,fingerid,name,username', qe);
            qa.setField('tdate', date2sql(dt));
          end else
          begin
            isnew := false;
            qa.Edit;
          end;
          beforePostAttendance2(qa, isnew, true, true, true);
          qa.Post;
          afterPostAttendance2(qa, isNew);
        //end;

        dt := adddays(dt, 1);
        x := x + 1;
      end;
      qe.Next;
    end;
    qe.Free;
    //q_master.EnableControls;
    HideProgressbar;
    //reloadclick;
  end;


procedure TMenuLogin.autoImportAtt;
var
  qw, qe, qfs, qfm, q_master : tzquery;
  MsgKoneksi, dtstr, tmstr : string;
  z : tzconnection;
  procedure prosessFinger;
  begin //prosessFinger;
    qfs.QueryTo('select a.*, k.nama, k.noid from absen a '+es+
                 'left join karyawan k on a.karyawan_id = k.karyawan_id '+es+
                 'where a.tanggal >='''+date2sql(startdate)+''' '+es+
                 'and a.tanggal <='''+date2sql(enddate)+''' '+es+
                 'order by a.karyawan_id, a.tanggal, a.statusmasuk desc', z);
    //pesan(qfs.SQL.Text);
    if qfs.RecordCount = 0 then SetProgressbarMsg('Workarea : '+qw.getFieldString('name')+', tidak ada data dalam periode ini');
    qfs.First;
    while not qfs.Eof do
    begin //qfs.eof
      SetProgressbar('Employee : '+qfs.getFieldString('noid')+
                 ' '+qfs.date2sql('tanggal')+
                 ', '+inttostr(qfs.RecNo)+'/'+inttostr(qfs.recordcount),
                 (qfs.recno * 100) div qfs.recordcount);
      qe.Query('select employee_id from m_employee '+es+
                    'where nip='''+qfs.getFieldString('noid')+''' ');
      //dbg(qe.RecordCount);
      if qe.RecordCount > 0 then
      begin //qe.RecordCount > 0
        qfm.Query('select * from t_fingerlog where '+gets('workarea_id', qw)+' '+es+
                  'and '+gets('absen_id', qfs)+' and '+gets('karyawan_id', qfs)+' ');
        if qfm.RecordCount > 0 then
        begin
          qfm.Edit;
          isiKolomUser(false, qfm);
        end else
        begin
          qfm.Append;
          isiKolomUser(true, qfm);
        end;
        qfm.SetMultiFieldQ('employee_id', qe );
        qfm.SetMultiFieldQ('workarea_id', qw );
        qfm.setField('tdate', qfs.date2sql('tanggal') );
        qfm.setField('ttime', qfs.time2sql('jam') );
        qfm.setField('tdatetime', qfs.date2sql('tanggal') + ' ' + qfs.time2sql('jam') );
        //qfm.setField('ttime', formatdatetime('hh:nn:ss', qfs.getFieldDateTime('jam')) );
        qfm.SetMultiFieldQ('absen_id,karyawan_id,statusmasuk,noid', qfs);
        qfm.Post;
      end else //qe.RecordCount > 0
      begin
        SetProgressbarMsg('Workarea : '+qw.getFieldString('name')+', NoID : '+qfs.getFieldString('noid')+' tidak ditemukan di Employee Data HRIS');
      end;
      qfs.Next;
    end; //qfs.eof
  end; //prosessFinger;
  procedure prosessFingerToAttendance;
  var
    total, no, jarak, k : integer;
    dt : tdatetime;
    ttime, dtsql : string;
  begin //prosessFingerToAttendance;
    q_master.DisableControls;
    qfs.Query('select employee_id, noid as nip from t_fingerlog '+es+
              'where '+es+
              'tdate >='''+date2sql(startdate)+''' and '+es+
              'tdate <='''+date2sql(enddate)+''' '+es+
              'group by employee_id'+es+
              'order by employee_id, tdate');
    qfs.First;
    jarak := DaysBetween(startdate, enddate);
    if jarak = 0 then total := qfs.RecordCount else total := qfs.RecordCount * jarak;
    no    := 1;
    while not qfs.Eof do
    begin
      for k := 0 to jarak do
      begin
        dt    := addDays(startdate, k);
        dtsql := date2sql(dt);
        setprogressbar('NIP : '+qfs.getFieldString('nip')+', Date : '+dtsql,
                       (no * 100) div total );
        qe.query('select employee_id,nip,overtime_id,company_id,division_id,'+
                 'department_id,unit_id,workarea_id,position_id,grade_id,employeestatus_id '+es+
                 'from m_employee where '+gets('employee_id', qfs )+' ');
        if qe.RecordCount > 0 then
        begin
          q_master.Query('select * from t_attendance where '+gets('employee_id', qfs )+' and tdate='''+dtsql+''' ');
          if q_master.RecordCount = 0 then q_master.Append else q_master.Edit;
          q_master.SetMultiFieldQ('employee_id,nip,overtime_id,company_id,division_id,'+
                                  'department_id,unit_id,workarea_id,position_id,grade_id,employeestatus_id', qe);
          q_master.setField('tdate', dtsql);

          getTimeFromFingerLog('1', q_master);
          getTimeFromFingerLog('0', q_master);
          if q_master.getFieldInteger('autocalc') = 1 then auto := true else auto := False;
          //beforePostAttendance(q_master, false, Auto);

          q_master.Post;
          no := no + 1;
        end else
        begin
          SetProgressbarMsg('NIP : '+qfs.getFieldString('nip')+' tidak ditemukan di Employee Data HRIS');
        end;
      end;
      qfs.Next;
    end;
    q_master.EnableControls;
  end; //prosessFingerToAttendance;
begin
  startdate := serverdate;
  enddate   := serverdate;
  {if confirm('Process Import Attendancen settleUP '+
            formatdatetime('dd mmm yyyy', startdate)+' s/d '+
            formatdatetime('dd mmm yyyy', enddate)+' ?') <> 'YES' then exit;}

  qw := createquery;
  qw.Query('select * from m_workarea order by name');
  {if LookupQuery('Choose Workarea', qw, 800, True) = False then
  begin
    qw.free;
    exit;
  end;}
  ShowProgressbar(true);
  z   := TZConnection.Create(FrmAbsen);
  qfs := CreateQuery;
  qfm := CreateQuery;
  qe  := CreateQuery;
  q_master := CreateQuery;
  qw.First;
  while not qw.Eof do
  begin
    setprogressbarmsg('---------------------------------------------------------------------------');
    setprogressbarmsg('Mencoba connect database '+qw.getFieldString('name'));
    MsgKoneksi := trim(CreateConnection(z, qw.getFieldString('hostname'),
                           qw.getFieldString('database'),
                           qw.getFieldString('protocol'),
                           qw.getFieldString('user'),
                           qw.getFieldString('pass'),
                           qw.getFieldInteger('port')));
    if MsgKoneksi = '' then
    begin
      setprogressbarmsg('Berhasil connect database '+qw.getFieldString('name'));
      setprogressbarmsg('Migrasi data finger '+qw.getFieldString('name')+', settleUP --> HRIS ' );
      prosessFinger;
      DisconnectTo(Z);
    end else
    begin
      setprogressbarmsg('Gagal connect database '+qw.getFieldString('name')+es+
                        'SQL ERROR : '+MsgKoneksi);
    end;
    qw.Next;
  end;

  setprogressbarmsg('Finish Migrasi data finger settleUP --> HRIS ' );
  setprogressbarmsg('---------------------------------------------------------------------------');
  setprogressbarmsg('PROSES DATA FINGER HRIS CHICKENTOWN');
  prosessFingerToAttendance;

  qfs.Free;
  qfm.Free;
  qe.Free;
  qw.Free;
  q_master.Free;
  z.Free;

  //ReloadClick;
  //setprogressbarmsg('FINISH, PLEASE CLOSE THIS');
  hideprogressbar;
end;

procedure TMenuLogin.QDAfterPost(DataSet: TDataSet);
begin
  isNowEditDate := False;
end;
procedure TMenuLogin.QDBeforeEdit(DataSet: TDataSet);
begin
  isNowEditDate := True;
end;

procedure TMenuLogin.ServerPayroll1Click(Sender: TObject);
begin
  if statusBar.Panels[9].Text = '' then
  begin
    statusBar.Panels[9].Text := 'Att';
    Timer3.Enabled := True;
    msgok('Server Payroll Aktif');
  end else
  begin
    statusBar.Panels[9].Text := '';
    Timer3.Enabled := False;
    msgok('Server Payroll nonaktif');
  end;
end;

procedure TMenuLogin.Timer3Timer(Sender: TObject);
var
  qp:tzquery;
begin
  if LowerCase(statusbar.Panels[9].Text) = 'att' then
  begin
    //if FormatDateTime('hh:nn:ss', ServerDatetime)='09:05:00' then autoImportAtt2;
    qp := createquery;
    qp.Query('select * from z_process where isprocess=0 and name=''RUN PAYROLL'' order by tdate, ttime');
    qp.First;
    while not qp.Eof do
    begin
      processPayroll(qp);
      qp.Next;
    end;
    qp.Free;

//    for x := 0 to tsAtt.Count-1 do
//    begin
//      if tsAtt.Strings[x] = FormatDateTime('hh:nn:ss', ServerDatetime) then autoImportAtt;
//    end;
  end;
  if LowerCase(statusbar.Panels[10].Text) = 'backup' then
  begin
//    for x := 0 to tsBackup.Count-1 do
//    begin
//      //ShowMessage(tsBackup.Strings[x]);
//      if tsBackup.Strings[x] = FormatDateTime('hh:nn:ss', ServerDatetime) then autoBackupDatabase;
//    end;
  end;
end;

procedure TMenuLogin.processPayroll(q_process: tzquery);
var
  emp, ql, qd: tzQuery;
  sdate, payrolldate, dt2, dt : tdatetime;
  kolom, syarat, s, f, levelID : string;
  //idtype, mg : string;
  y,m,d: word;

  fs: TFormatSettings;
begin
  q_process.Edit;
  q_process.setField('isprocess', 1);
  q_process.Post;


  fs := TFormatSettings.Create;
  fs.DateSeparator := '-';
  fs.ShortDateFormat := 'yyyy-MM-dd';
  fs.TimeSeparator := ':';
  fs.ShortTimeFormat := 'hh:mm';
  fs.LongTimeFormat := 'hh:mm:ss';
  payrolldate := StrToDateTime(q_process.getFieldString('param1'), fs);

  ql    := createquery;
  qd    := createQuery;
  ExecuteSQL('flush tables');
  ExecuteSQL('update m_payrolldate set tdate = null');
  qd.query('select * from m_payrolldate');
  qd.AfterCancel := QDAfterPost;
  qd.AfterDelete := QDAfterPost;
  qd.AfterPost   := QDAfterPost;
  qd.BeforeEdit  := QDBeforeEdit;
  qd.OnNewRecord := QDBeforeEdit;
  //dbg('x');
  while not qd.eof do
  begin
    qd.Edit;
    dt := payrolldate;
    dt := adddays(dt, qd.getFieldInteger('comp_month'));
    decodedate(dt,y,m,d);
    d := qd.getFieldInteger('comp_date');
    if d = -1 then
    begin
      dt2 := encodedate(y,m,1);
      dt2 := addmonths(dt2,1);
      dt2 := adddays(dt2,-1);
      qd.setField('tdate',dt2);
    end else
    begin
      dt2 := encodedate(y,m,d);
      qd.setField('tdate',dt2);
    end;
    qd.next;
  end;

  qd.Refresh;
  //dbg('2');
  if isNowEditDate then qd.Post;

  s := '';
  emp   := createQuery;
  kolom := '*';

  emp.Query('select * from s_lookup where tablename=''t_payroll'' and columnname=''employee_id'' ');
  if emp.RecordCount > 0 then
  begin
    kolom := emp.getFieldString('kolom');
    syarat:= emp.getFieldString('syarat');
  end;

  payrolldate := getQValue('select tdate from m_payrolldate where payrollfield=''enddate'' ');
  sdate       := getQValue('select tdate from m_payrolldate where payrollfield=''startdate'' ');
  ExecuteSQL('call autoupdateemployee(''' + date2sql(payrolldate) + ''');');

  //dbg('5');
  ShowProgressbar;
  syarat:= q_process.getFieldString('condition1');
  f := 'select '+kolom+' from v_employee2 where (0=0) '+es+
             'and '+syarat+' '+es+
             ' '+es+
             'and joindate <= '''+date2sql(payrolldate)+''' and '+es+
             ' ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sdate)+''' '+es+
             ' )  '+es+
             'and (0=0) and employee_id<>30 '+es+
             'order by name';
  isDebug := true;
  //pesan(f);
  isDebug := false;
  emp.Query(f);

  emp.First;
  q_process.Edit;
  q_process.setField('total', emp.RecordCount);
  q_process.setField('nomor', 1);
  q_process.Post;
  while not emp.eof do
  begin
    setProgressbar('Processing '+emp.getFieldString('nip')+
                   ' '+emp.getFieldString('name')+
                   ', '+FormatDateTime('dd MMM yyyy', payrolldate)+
                   ', '+inttostr(emp.RecNo)+'/'+inttostr(emp.recordcount),
                   (emp.recno * 100) div emp.recordcount);
    q_process.Edit;
    q_process.setField('nomor', emp.RecNo);
    q_process.Post;
    if getQValueInteger('select count(*) from t_payroll '+es+
                        'where '+gets('employee_id', emp)+' and '+es+
                        'tdate > '''+date2sql(payrolldate)+''' ') = 0 then
    begin
      ExecuteSQL('delete from t_payroll_detail where payroll_id in (select payroll_id from t_payroll where '+es+
                 'month(tdate)=month('''+date2sql(payrolldate)+''') and '+es+
                 'year(tdate)=year('''+date2sql(payrolldate)+''') and '+es+
                 ' '+gets('employee_id', emp)+' ) ');
      ExecuteSQL('delete from t_payroll where '+es+
                 'month(tdate)=month('''+date2sql(payrolldate)+''') and '+es+
                 'year(tdate)=year('''+date2sql(payrolldate)+''') and '+es+
                 ' '+gets('employee_id', emp)+' ');
      createPayroll(payrolldate,qd,emp,'');
    end else
    begin
      //MsgError('Employee : '+emp.getFieldString('name')+', Already Have Newest Payroll');
    end;
    emp.next;
  end;
  //dbg('6');
  emp.free;
  qd.Free;
  ql.free;

  //ReloadClick;
  HideProgressbar;
//  msgok('Finished');
end;

end.

