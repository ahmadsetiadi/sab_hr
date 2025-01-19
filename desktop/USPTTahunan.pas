unit USPTTahunan;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, System.DateUtils, System.StrUtils,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, cxGraphics, cxControls, cxLookAndFeels,
  cxLookAndFeelPainters, dxSkinsCore, dxSkinBlack, dxSkinBlue, dxSkinBlueprint,
  dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom, dxSkinDarkSide,
  dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinsDefaultPainters, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, dxSkinscxPCPainter, cxPCdxBarPopupMenu,
  cxPC, cxStyles, cxCustomData, cxFilter, cxData, cxDataStorage, cxEdit,
  cxNavigator, Data.DB, cxDBData, cxGridCustomTableView, cxGridTableView,
  cxGridBandedTableView, cxGridDBBandedTableView, cxGridCustomPopupMenu,
  cxGridPopupMenu, ZAbstractRODataset, ZAbstractDataset, ZDataset, cxGridLevel,
  cxClasses, cxGridCustomView, cxGrid, Vcl.StdCtrls, System.Actions,
  Vcl.ActnList, Vcl.ExtCtrls, dxLayoutContainer, dxLayoutControl, cxContainer,
  dxLayoutcxEditAdapters, cxDBEdit, cxTextEdit, cxMaskEdit, cxSpinEdit, cxTreeView,
  dxLayoutLookAndFeels, cxMemo, cxDBNavigator, dxScreenTip, dxCustomHint, cxHint,
  Vcl.Buttons, dxGDIPlusClasses, dxSkinsdxStatusBarPainter, dxStatusBar,
  Vcl.ComCtrls, Vcl.ToolWin, Vcl.Menus, cxButtons, cxDropDownEdit, cxBlobEdit,
  frxClass, frxDBSet, cxDBLookupComboBox, dxCore, cxDateUtils, cxCalendar,
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, cxSplitter, System.Win.ComObj,
  Vcl.AppEvnts, dxSkinMetropolis, dxSkinMetropolisDark,
  dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray, dxSkinOffice2016Colorful,
  dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light, dxBarBuiltInMenu,
  cxDataControllerConditionalFormattingRulesManagerDialog;

type
  TFrmSPTTahunan = class(TForm)
    PageControl: TcxPageControl;
    TabMaster: TcxTabSheet;
    Q_MASTER: TZQuery;
    DS_MASTER: TDataSource;
    cxGridPopupMenu1: TcxGridPopupMenu;
    txtID: TEdit;
    txtModuleName: TEdit;
    ActionList1: TActionList;
    actRefresh: TAction;
    actAdd: TAction;
    actEdit: TAction;
    actSave: TAction;
    actDelete: TAction;
    actcancel: TAction;
    PopupMenu: TPopupMenu;
    ppShowALL: TMenuItem;
    ppExport: TMenuItem;
    ppFreeze: TMenuItem;
    ppFind: TMenuItem;
    ppGroup: TMenuItem;
    ppGroupDefault: TMenuItem;
    ppGroupMonth: TMenuItem;
    ppGroupYear: TMenuItem;
    RelativeToday1: TMenuItem;
    ItemMenu: TPopupMenu;
    Panel2: TPanel;
    ItemPrint: TPopupMenu;
    ItemDate: TPopupMenu;
    MenuItem1: TMenuItem;
    OneMonth1: TMenuItem;
    NextMonth1: TMenuItem;
    PrevMonth1: TMenuItem;
    OneYear1: TMenuItem;
    OneDay1: TMenuItem;
    oday1: TMenuItem;
    BtnClose: TcxButton;
    BtnPrint: TcxButton;
    BtnMenu: TcxButton;
    LblJudul: TLabel;
    BtnDateTemplate: TcxButton;
    BtnEnddate: TcxDateEdit;
    BtnStartdate: TcxDateEdit;
    LblEnddate: TLabel;
    LblStartdate: TLabel;
    actFirst: TAction;
    actOneMonth: TAction;
    actNextMonth: TAction;
    actPrevMonth: TAction;
    actOneYear: TAction;
    actOneDay: TAction;
    actToday: TAction;
    actStartdate: TAction;
    actEnddate: TAction;
    Q_Laporan: TZQuery;
    frxDBDataset1: TfrxDBDataset;
    FR_Report: TfrxReport;
    actTabMaster: TAction;
    actTabDetail1: TAction;
    dxLayoutLookAndFeelList1: TdxLayoutLookAndFeelList;
    dxLayoutCxLookAndFeel1: TdxLayoutCxLookAndFeel;
    Layout: TdxLayoutControl;
    dxLayoutGroup1: TdxLayoutGroup;
    N1: TMenuItem;
    N2: TMenuItem;
    ppAdd: TMenuItem;
    ppEdit: TMenuItem;
    ppDelete: TMenuItem;
    ppRefresh: TMenuItem;
    actLookup: TAction;
    GRID_MASTER: TcxGrid;
    MASTER: TcxGridDBBandedTableView;
    GRID_MASTERLevel1: TcxGridLevel;
    ImportFromExcel1: TMenuItem;
    DS_Employee: TDataSource;
    Q_Employee: TZQuery;
    N1CreateTHR1: TMenuItem;
    N2ImportBuktiPotong1721A11: TMenuItem;
    MASTERspta1_id: TcxGridDBBandedColumn;
    MASTERmasapajak: TcxGridDBBandedColumn;
    MASTERtahunpajak: TcxGridDBBandedColumn;
    MASTERpembetulan: TcxGridDBBandedColumn;
    MASTERnomor: TcxGridDBBandedColumn;
    MASTERmasaawal: TcxGridDBBandedColumn;
    MASTERmasaakhir: TcxGridDBBandedColumn;
    MASTERnpwp: TcxGridDBBandedColumn;
    MASTERnip: TcxGridDBBandedColumn;
    MASTERname: TcxGridDBBandedColumn;
    MASTERalamat: TcxGridDBBandedColumn;
    MASTERjeniskelamin: TcxGridDBBandedColumn;
    MASTERstatusptkp: TcxGridDBBandedColumn;
    MASTERjumlahtanggungan: TcxGridDBBandedColumn;
    MASTERnamajabatan: TcxGridDBBandedColumn;
    MASTERwpluarnegeri: TcxGridDBBandedColumn;
    MASTERkodenegara: TcxGridDBBandedColumn;
    MASTERkodepajak: TcxGridDBBandedColumn;
    MASTERgaji: TcxGridDBBandedColumn;
    MASTERtunjanganpph: TcxGridDBBandedColumn;
    MASTERtunjanganlain: TcxGridDBBandedColumn;
    MASTERhonor: TcxGridDBBandedColumn;
    MASTERpremiasuransi: TcxGridDBBandedColumn;
    MASTERnatura: TcxGridDBBandedColumn;
    MASTERtotalpenghasilan: TcxGridDBBandedColumn;
    MASTERbonusthr: TcxGridDBBandedColumn;
    MASTERbruto: TcxGridDBBandedColumn;
    MASTERbjab: TcxGridDBBandedColumn;
    MASTERbjab2: TcxGridDBBandedColumn;
    MASTERbiayajabatan: TcxGridDBBandedColumn;
    MASTERjhtemployee: TcxGridDBBandedColumn;
    MASTERjumlahpengurangan: TcxGridDBBandedColumn;
    MASTERnetto: TcxGridDBBandedColumn;
    MASTERnettosebelum: TcxGridDBBandedColumn;
    MASTERtotalnetto: TcxGridDBBandedColumn;
    MASTERptkp: TcxGridDBBandedColumn;
    MASTERpkp: TcxGridDBBandedColumn;
    MASTERpkpround: TcxGridDBBandedColumn;
    MASTERpph21: TcxGridDBBandedColumn;
    MASTERpph21sebelum: TcxGridDBBandedColumn;
    MASTERpph21terutang: TcxGridDBBandedColumn;
    MASTERpph21sudahdibayar: TcxGridDBBandedColumn;
    MASTERpph21selisih: TcxGridDBBandedColumn;
    MASTERstatuspindah: TcxGridDBBandedColumn;
    MASTERnpwppemotong: TcxGridDBBandedColumn;
    MASTERnamapemotong: TcxGridDBBandedColumn;
    MASTERtdate: TcxGridDBBandedColumn;
    MASTERtaxtype: TcxGridDBBandedColumn;
    MASTERemployee_id: TcxGridDBBandedColumn;
    MASTERcompany_id: TcxGridDBBandedColumn;
    MASTERdivision_id: TcxGridDBBandedColumn;
    MASTERdepartment_id: TcxGridDBBandedColumn;
    MASTERunit_id: TcxGridDBBandedColumn;
    MASTERworkarea_id: TcxGridDBBandedColumn;
    MASTERposition_id: TcxGridDBBandedColumn;
    MASTERgrade_id: TcxGridDBBandedColumn;
    MASTERemployeestatus_id: TcxGridDBBandedColumn;
    MASTERuseradded: TcxGridDBBandedColumn;
    MASTERdateadded: TcxGridDBBandedColumn;
    MASTERuseredited: TcxGridDBBandedColumn;
    MASTERdateedited: TcxGridDBBandedColumn;
    MASTERthrbonustaxallowance: TcxGridDBBandedColumn;
    MASTERtaxirregular: TcxGridDBBandedColumn;
    Print1721A1toExcel1: TMenuItem;
    ApplicationEvents1: TApplicationEvents;
    MASTERlevel_id: TcxGridDBBandedColumn;
    MASTERnpwpcompany: TcxGridDBBandedColumn;
    MASTERnamacompany: TcxGridDBBandedColumn;
    procedure SettingFont;
    procedure SettingQuery;
    procedure ValidasiControl;
    procedure ReloadClick;
    procedure ShowDateTemplate(Tipe:Boolean=True);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure FormCreate(Sender: TObject);
    procedure actRefreshExecute(Sender: TObject);
    procedure actAddExecute(Sender: TObject);
    procedure actEditExecute(Sender: TObject);
    procedure actSaveExecute(Sender: TObject);
    procedure Q_MASTERBeforeEdit(DataSet: TDataSet);
    procedure Q_MASTERNewRecord(DataSet: TDataSet);
    procedure actDeleteExecute(Sender: TObject);
    procedure actcancelExecute(Sender: TObject);
    procedure Q_MASTERAfterCancel(DataSet: TDataSet);
    procedure Q_MASTERAfterDelete(DataSet: TDataSet);
    procedure Q_MASTERAfterPost(DataSet: TDataSet);
    procedure ppExportClick(Sender: TObject);
    procedure ppFreezeClick(Sender: TObject);
    procedure ppGroupDefaultClick(Sender: TObject);
    procedure ppGroupMonthClick(Sender: TObject);
    procedure ppGroupYearClick(Sender: TObject);
    procedure RelativeToday1Click(Sender: TObject);
    procedure ppFindClick(Sender: TObject);
    procedure ppShowALLClick(Sender: TObject);
    procedure BtnCloseClick(Sender: TObject);
    procedure Q_MASTERAfterRefresh(DataSet: TDataSet);
    procedure Q_MASTERBeforeDelete(DataSet: TDataSet);
    procedure Q_MASTERBeforePost(DataSet: TDataSet);
    procedure BtnStartdatePropertiesChange(Sender: TObject);
    procedure BtnEnddatePropertiesChange(Sender: TObject);
    procedure MenuItem1Click(Sender: TObject);
    procedure OneMonth1Click(Sender: TObject);
    procedure NextMonth1Click(Sender: TObject);
    procedure PrevMonth1Click(Sender: TObject);
    procedure OneYear1Click(Sender: TObject);
    procedure OneDay1Click(Sender: TObject);
    procedure oday1Click(Sender: TObject);
    procedure actStartdateExecute(Sender: TObject);
    procedure actEnddateExecute(Sender: TObject);
    procedure BtnStartdateKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure BtnEnddateKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure actTabMasterExecute(Sender: TObject);
    procedure actTabDetail1Execute(Sender: TObject);
    procedure AutoRefreshQuery;
    procedure AutoActiveQuery;
    function getFocusGridView : TcxGridDBBandedTableView;
    function getFocusGrid : TcxGridDBBandedTableView;
    function getFocusTableName : String;
    function getFocusQuery : TZQuery;
    function getGridByName(nama:string) : TcxGridDBBandedTableView;
    function getQueryByName(nama:string) : TZQuery;
    function getTabByName(nama:string) : TcxTabSheet;
    procedure actLookupExecute(Sender: TObject);
    procedure cekAllEditModule(idm:integer);
    procedure isiALLTableKolom;
    procedure AfterCancelQ(idm : integer; nama:string);
    procedure AfterDeleteQ(idm : integer; nama:string);
    procedure AfterPostQ(idm : integer; nama:string);
    procedure BeforeDeleteQ(idm : integer; nama:string);
    procedure BeforeEditQ(idm : integer; nama:string);
    procedure BeforePostQ(idm : integer; nama:string);
    procedure NewRecordQ(idm : integer; nama:string);
    procedure LookupADEmployee_id;
    procedure newRecordMaster;
    procedure beforePostMaster;
    procedure afterPostMaster;
    procedure beforeEditMaster;
    procedure beforeDeleteMaster;
    procedure afterDeleteMaster;
    procedure afterCancelMaster;

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure MASTERemployee_idPropertiesPopup(Sender: TObject);
    procedure N1CreateTHR1Click(Sender: TObject);
    function getNomorBP(tahun:string) : string;
    procedure setAmountSPTA1(qem, qes : TZQuery);
    procedure processHitungPajak(qes : TZQuery);
    function prosessSalary(qem, qes : TZQuery; tipe:string ) : Double;
    procedure N2ImportBuktiPotong1721A11Click(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure Print1721A1toExcel1Click(Sender: TObject);
    procedure isiExcel(XLApp1 : Variant; fn:string; qm:tzquery);
    procedure isiCell(Sheet:variant; kolom, baris, isi : string);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmSPTTahunan: TFrmSPTTahunan;
  DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmSPTTahunan.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmSPTTahunan.cekAllEditModule(idm:integer);
var
  md : string;
  qk : tzquery;
begin
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  cekNowEdit(isnowedit[idm], md);
  qk := createquery;
  qk.Query('select id_module, name from s_module where parentid='''+inttostr(idm)+''' and active=1 order by no');
  qk.First;
  while not qk.Eof do
  begin
    idm := qk.getFieldInteger('id_module');
    md  := qk.getFieldString('name');
    cekNowEdit(isnowedit[idm], md);
    qk.Next;
  end;
  qk.Free;
end;
procedure TFrmSPTTahunan.isiALLTableKolom;
var
  idm : integer;
  qk : tzquery;
begin
  idm := strtoint(txtid.Text);
  isiTableKolom(tablename[idm], master);
  qk := createquery;
  qk.Query('select id_module, name, no from s_module where parentid='''+inttostr(idm)+''' and active=1 order by no');
  qk.First;
  while not qk.Eof do
  begin
    idm := qk.getFieldInteger('id_module');
    isiTableKolom(tablename[idm], getGridByName('detail'+qk.getFieldString('no')) );
    qk.Next;
  end;
  qk.Free;
end;
procedure TFrmSPTTahunan.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmSPTTahunan.FormCreate(Sender: TObject);
begin
  isdebug            := true;
  txtID.Text         := IDModule;
  txtModuleName.Text := ModuleName;
  lbljudul.Caption   := SentencesCase(txtModuleName.Text);
  self.Caption       := lbljudul.Caption;
  tabmaster.Caption  := SentencesCase(txtModuleName.Text);

  DisableChangeDate  := false;
  BtnStartdate.Date  := ServerDate;
  BtnEnddate.Date    := ServerDate;
  startdate          := btnstartdate.Date;
  enddate            := BtnEnddate.Date;

  SettingQuery;
  ValidasiControl;
  SettingFont;
  ShowDateTemplate;
end;
procedure TFrmSPTTahunan.SettingQuery;
var
  idd, idm : integer;
  qd  : tzquery;
  namagrid : string;
begin
  idm               := strtoint(txtid.Text);
  master.Tag        := strtoint(txtid.Text);
  q_master.Tag      := strtoint(txtid.Text);
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, true, startdate, enddate, ' year(tdate)=year('''+date2sql(enddate)+''') ' );
  q_master.Query(SQLGrid[idm]);
  setColumnWidth(txtid.Text, q_master, master, false);
  StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmSPTTahunan.ReloadClick;
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, true, startdate, enddate, ' year(tdate)=year('''+date2sql(enddate)+''') ' );
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
  grid_master.SetFocus;
end;
procedure TFrmSPTTahunan.SettingFont;
var
  x, fs : integer;
  fn : string;
begin
  fs := strtoint(ReadIniFile('visual','fontsize'));
  fn := 'Tahoma';
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxPageControl then TcxPageControl(Components[x]).Font.Name := fn;
    if Components[x] is TcxPageControl then TcxPageControl(Components[x]).Font.Size := fs;
    if Components[x] is TcxGrid then TcxGrid(Components[x]).Font.Name := fn;
    if Components[x] is TcxGrid then TcxGrid(Components[x]).Font.Size := fs;
  end;
end;
procedure TFrmSPTTahunan.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, False);
  SetEditTable(master, cekValidasi('`edit`', mn));
  SetDeleteTable(master, cekValidasi('`delete`', mn));
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);
end;
procedure TFrmSPTTahunan.PopupMenuPopup(Sender: TObject);
var
  mn : string;
begin
  mn := getQValueString('select name from s_module where id_module='''+inttostr(getFocusQuery.Tag)+''' ');
  ppAdd.Visible    := False;
  ppEdit.Visible   := cekValidasi('`edit`', mn);
  ppDelete.Visible := cekValidasi('`delete`', mn);
  ppExport.Visible := cekValidasi('`export`', mn);
  if ImportFromExcel1.Visible then ImportFromExcel1.Visible := cekValidasi('`import`', mn);

  if getFocusGridView.Bands[1].Visible = true then
  begin
    ppFreeze.Caption := '&Hide Freeze Column';
    ppFreeze.Hint    := 'Hide Freeze Column';
  end else
  begin
    ppFreeze.Caption := '&Show Freeze Column';
    ppFreeze.Hint    := 'Show Freeze Column';
  end;
end;
procedure TFrmSPTTahunan.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmSPTTahunan.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmSPTTahunan.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmSPTTahunan.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmSPTTahunan.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmSPTTahunan.MenuItem1Click(Sender: TObject);
begin
  //first date to now
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := ServerDate;
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmSPTTahunan.OneMonth1Click(Sender: TObject);
begin
  //one month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;

procedure TFrmSPTTahunan.NextMonth1Click(Sender: TObject);
begin
  //next month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(yearof(addMonths(BtnStartdate.Date, 1)),
                          MonthOf(addMonths(BtnStartdate.Date,1)),1 );
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmSPTTahunan.PrevMonth1Click(Sender: TObject);
begin
  //prev month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  startdate := addMonths(startdate, -1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmSPTTahunan.OneYear1Click(Sender: TObject);
begin
  //one year
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := EncodeDate(YearOf(BtnStartdate.Date), 12, 31);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmSPTTahunan.OneDay1Click(Sender: TObject);
begin
  //oneday
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  BtnEnddate.Date := BtnStartdate.Date;
  startdate       := BtnStartdate.Date;
  enddate         := BtnEnddate.Date;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmSPTTahunan.oday1Click(Sender: TObject);
begin
  //today
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate         := ServerDate;
  enddate           := ServerDate;
  BtnStartdate.Date := ServerDate;
  BtnEnddate.Date   := ServerDate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmSPTTahunan.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmSPTTahunan.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmSPTTahunan.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmSPTTahunan.getFocusTableName : String;
var
  x : integer;
  idtag : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGridDBBandedTableView then
    begin
      if TcxGridDBBandedTableView(Components[x]).Focused then
      begin
        idtag  := TcxGridDBBandedTableView(Components[x]).Tag;
        result := getqvaluestring('select tablename from s_module where tag='''+inttostr(idtag)+''' ');
        break;
        exit;
      end;
    end;
  end;
end;
function TFrmSPTTahunan.getFocusGrid : TcxGridDBBandedTableView;
var
  x : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGridDBBandedTableView then
    begin
      if TcxGridDBBandedTableView(Components[x]).Focused then
      begin
        result := TcxGridDBBandedTableView(Components[x]);
        break;
        exit;
      end;
    end;
  end;
end;
function TFrmSPTTahunan.getFocusGridView : TcxGridDBBandedTableView;
var
  x : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGrid then
    begin
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_master' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Master;
      end;
    end;
  end;
end;
procedure TFrmSPTTahunan.AutoActiveQuery;
var
  x : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TZQuery then
    begin
      if lowercase(TZQuery(Components[x]).Name) = 'q_master' then
      begin
      end else
      if leftstr(lowercase(TZQuery(Components[x]).Name),9) = 'q_laporan' then
      begin
      end else
      if leftstr(lowercase(TZQuery(Components[x]).Name),8) = 'q_detail' then
      begin
      end else
      begin
        TZQuery(Components[x]).Active := True;
      end;
    end;
  end;
end;
procedure TFrmSPTTahunan.AutoRefreshQuery;
var
  x : integer;
  qk : TZquery;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TZQuery then
    begin
      if (lowercase(TZQuery(Components[x]).Name) <> 'q_master') and (LeftStr( lowercase(TZQuery(Components[x]).Name), 9) <> 'q_laporan') then
      begin
        if TZQuery(Components[x]).Active then TZQuery(Components[x]).Refresh;
      end;
    end;
  end;

  {qk := createquery;
  qk.Query('select kolom_id from s_kolom where tablename='''+TableName[strtoint(txtid.Text)]+''' and tipekolom=''lookup'' order by no');
  qk.First;
  while not qk.Eof do
  begin
    if qlq[qk.getFieldInteger('kolom_id')].Active then qlq[qk.getFieldInteger('kolom_id')].Refresh;
    qk.Next;
  end;
  qk.Free;}
end;
function TFrmSPTTahunan.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmSPTTahunan.ImportFromExcel1Click(Sender: TObject);
var
  tn : string;
  qc, qk, qi : tzquery;
  idm : integer;
begin
  idm:= getQueryByName(getFocusGridView.Name).Tag;
  tn := getTable(inttostr(idm));
  qk := createquery;
  qi := createquery;
  qc := createquery;
  qk.Query('show columns from '+tn+' ');
  qk.First;
  while not qk.Eof do
  begin
    qc.Query('select * from s_kolom '+es+
                        'where columnname='''+qk.getColumnString(0)+''' and '+es+
                        '`tablename`='''+tn+''' ');
    if qc.RecordCount > 0 then qc.Edit else qc.Append;
    qc.setField('id_module', idm );
    qc.setField('tablename', tn );
    qc.setField('no', qk.RecNo );
    qc.setField('columntype', qk.getColumnString(1) );
    qc.SetField('columnname', qk.getColumnString(0) );
    qc.Post;
    qk.Next;
  end;
  qk.Free;
  qi.Free;
  qc.Free;
  frmimport.txtFilename.Text := '';
  frmimport.CboSheet.Properties.Items.Clear;
  frmimport.CboSheet.Text    := '';
  FrmImport.q_master.Active := false;
  FrmImport.Q_Module.Active := True;
  frmimport.Show;
end;

function TFrmSPTTahunan.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmSPTTahunan.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmSPTTahunan.actLookupExecute(Sender: TObject);
var
  Q : tzquery;
  s, sql : string;
  idk : integer;
begin
  exit;
  if getFocusColumn(getfocusgrid).Tag = 3 then
  begin
    s   := '';
    s   := InputBox('Search '+getFocusCaptionName(getfocusgrid), 'Search', s);
    idk := getIDKolom(getFocusTableName, getFocusFieldName(getFocusGrid));

    sql := getqvaluestring('select isi from s_kolom where kolom_id='''+inttostr(idk)+''' ');
    sql := Replace(sql, '$syarat', ' name like ''%'+s+'%'' ');
    Q := createquery;
    Q.Query(sql);
    if LookupQuery('Choose '+getFocusCaptionName(getfocusgrid), Q, 800, false, '', getFocusTableName) then
    begin
      getFocusQuery.SetMultiFieldQ(getFocusFieldName(getFocusGrid), Q);
    end;
    Q.free;
  end;
end;
//grid

//action list shortcut
procedure TFrmSPTTahunan.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmSPTTahunan.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmSPTTahunan.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmSPTTahunan.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmSPTTahunan.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmSPTTahunan.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmSPTTahunan.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmSPTTahunan.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmSPTTahunan.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmSPTTahunan.ppFreezeClick(Sender: TObject);
var
  caption : string;
  x : integer;
begin
  caption := lowercase( Replace(ppFreeze.Caption,'&','') );
  if caption = 'show freeze column' then
  begin
    master.Bands[1].FixedKind := fkLeft;
    master.Bands[1].Visible := true;
    ppFreeze.Caption := '&Hide Freeze Column';
    ppFreeze.Hint    := 'Hide Freeze Column';
  end else
  begin
    for x := 0 to master.Bands[1].ColumnCount - 1 do
    begin
      master.Bands[1].Columns[0].Position.BandIndex := 0;
      master.Bands[0].Columns[master.Bands[0].columncount-1].Position.ColIndex := x;
    end;

    master.Bands[1].FixedKind := fkLeft;
    master.Bands[1].Visible   := false;
    ppFreeze.Caption          := '&Show Freeze Column';
    ppFreeze.Hint             := 'Show Freeze Column';
  end;
end;
procedure TFrmSPTTahunan.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmSPTTahunan.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmSPTTahunan.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmSPTTahunan.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmSPTTahunan.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmSPTTahunan.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmSPTTahunan.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmSPTTahunan.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmSPTTahunan.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmSPTTahunan.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmSPTTahunan.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmSPTTahunan.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmSPTTahunan.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmSPTTahunan.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmSPTTahunan.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmSPTTahunan.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmSPTTahunan.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmSPTTahunan.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmSPTTahunan.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmSPTTahunan.BeforeEditQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  ValidasiEdit(md);
  cekAllEditModule(strtoint(txtid.Text));
  isNowEdit[idm]    := True;
  isNewRecord[idm]  := False;
  if nama='master'  then beforeEditMaster;
end;
procedure TFrmSPTTahunan.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmSPTTahunan.NewRecordQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  ValidasiInsert(md);
  cekAllEditModule(strtoint(txtid.Text));
  isNowEdit[idm]    := True;
  isNewRecord[idm]  := True;
  isiDefaultNewRecord( getQueryByName(nama) , TableName[idm]);
  if nama='master'  then newRecordMaster;
end;
//end procedure query

//master
procedure TFrmSPTTahunan.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', serverdate);
end;
procedure TFrmSPTTahunan.beforePostMaster;
begin
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
end;
procedure TFrmSPTTahunan.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmSPTTahunan.beforeEditMaster;
begin
  //
end;
procedure TFrmSPTTahunan.beforeDeleteMaster;
begin
  //
end;
procedure TFrmSPTTahunan.afterDeleteMaster;
begin
  //
end;
procedure TFrmSPTTahunan.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmSPTTahunan.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmSPTTahunan.LookupADEmployee_id;
var
  Q : TZQuery;
  kolom, syarat, s : String;
begin
  s := '';
  s := InputBox('Input Employee Name', 'Search', s);
  kolom := '*';
  syarat:= ' (0=0) ';
  Q := createquery;
  q.Query('select * from s_lookup where tablename=''t_thr'' and columnname=''employee_id'' ');
  if q.RecordCount > 0 then
  begin
    kolom := q.getFieldString('kolom');
    syarat:= q.getFieldString('syarat');
  end;
  Q.Query('select '+kolom+' from m_employee where name like ''%'+s+'%'' '+
          'and '+getSecurity(txtid.Text)+' and '+syarat+' order by name ');
  if LookupQuery('Choose Employee', Q, 800, False, '', 'm_employee') then
  begin
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,workarea_id,'+
                            'employeestatus_id', Q );
  end;
  Q.free;
end;
procedure TFrmSPTTahunan.N1CreateTHR1Click(Sender: TObject);
var
  qes, qem : tzquery;
  tahun, dtsql, s, kolom, syarat : string;
  thn : integer;
begin
  enddate := btnenddate.Date;
  s := formatdatetime('yyyy', enddate);
  if InputQuery('Input Tahun Pajak', 'Tahun Pajak', s) = false then exit;
  //s := InputBox('Input Tahun Pajak', 'Tahun Pajak', s);
  if s = '' then exit;
  try
    thn := strtoint(s);
  except
    MsgError('Please Input Only Number');
    exit;
  end;

  tahun := s;
  dtsql := s+'-12-31';
  s     := '';
  if InputQuery('Cari Nama Employee', 'Search', s) = false then exit;
  qem   := createquery;
  kolom := '*';
  syarat:= ' (0=0) ';
  qem.Query('select * from s_lookup where tablename=''t_spta1'' and columnname=''employee_id'' ');
  if qem.RecordCount > 0 then
  begin
    kolom := qem.getFieldString('kolom');
    syarat:= qem.getFieldString('syarat');
  end;
  Qem.Query('select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             'and joindate <= ''' +dtsql+es+
             ''' and (isnull(resigndate) or resigndate<= ''1920-01-01'' '+es+
             'or year(resigndate)=year('''+dtsql+''' ) ) order by nip');
  if LookupQuery('Choose Employee', qem, 800, True, '', 'm_employee') =False then
  begin
    qem.Free;
    exit;
  end;
  ShowProgressbar;
  qes := createquery;
  qem.First;
  while not qem.Eof do
  begin
    SetProgressbar('Employee : '+qem.getFieldString('nip')+
                   ' '+qem.getFieldString('name')+
                   ', '+inttostr(qem.RecNo)+'/'+inttostr(qem.recordcount),
                   (qem.recno * 100) div qem.recordcount);
    qes.Query('select * from t_spta1 where '+gets('employee_id', qem)+' and '+Es+
              'tahunpajak='''+tahun+''' ');
    if qes.RecordCount = 0 then
    begin
      qes.Append;
      isiKolomUser(true, qes);
      isiDefaultNewRecord( qes , 't_spta1' );
      qes.setField('nomor', getNomorBP(tahun) );
    end else
    begin
      qes.edit;
      isiKolomUser(False, qes);
    end;
    qes.setField('masapajak', '12');
    qes.setField('tahunpajak', tahun);
    qes.setField('pembetulan', '0');
    qes.setField('alamat', qem.getFieldString('address'));
    qes.setField('jeniskelamin', 'M');
    if lowercase(qem.getFieldString('sex')) = 'perempuan' then qes.setField('jeniskelamin', 'F');
    if leftstr(lowercase(qem.getFieldString('ptkp')), 2) = 'tk' then qes.setField('statusptkp', 'TK');
    if leftstr(lowercase(qem.getFieldString('ptkp')), 1) = 'k'  then qes.setField('statusptkp', 'K' );
    qes.setField('jumlahtanggungan', RightStr( qem.getFieldString('ptkp'), 1) );
    qes.setField('namajabatan', getQValueString('select name from m_position where '+gets('position_id', qem)+' ') );
    qes.setField('wpluarnegeri', 'N');
    qes.setField('kodenegara', '');
    qes.setField('kodepajak', '21-100-01');
    qes.setField('tdate', dtsql);
    qes.setField('npwppemotong', getQValueString('select npwp_pimpinan from m_company where '+gets('company_id', qem)+' ') );
    qes.setField('namapemotong', getQValueString('select namapimpinan  from m_company where '+gets('company_id', qem)+' ') );
    qes.setField('npwpcompany', getQValueString('select npwp from m_company where '+gets('company_id', qem)+' ') );
    qes.setField('namacompany', getQValueString('select name  from m_company where '+gets('company_id', qem)+' ') );
    qes.setField('statuspindah', '');
    if formatdatetime('yyyy', qem.getFieldDateTime('joindate')) = tahun then qes.setField('statuspindah', 'Pegawai Baru');
    qes.SetMultiFieldQ('nip,name,npwp,employee_id,company_id,division_id,department_id,'+
                       'workarea_id,position_id,level_id,'+
                       'taxirregular,taxtype,employeestatus_id', qem);
    qes.setField('masaawal', getQValueString('select month(tdate) from t_payroll where year(tdate)='''+tahun+''' and '+gets('employee_id', qem)+' order by tdate limit 1') );
    qes.setField('masaakhir',getQValueString('select month(tdate) from t_payroll where year(tdate)='''+tahun+''' and '+gets('employee_id', qem)+' order by tdate desc limit 1') );
    setAmountSPTA1(qem, qes);
    processHitungPajak(qes);
    qes.Post;
    qem.Next;
  end;


  qes.Free;
  qem.Free;
  reloadclick;
  HideProgressbar;
end;
function TFrmSPTTahunan.getNomorBP(tahun:string) : string;
var
  q : tzquery;
  thn, ok: string;
begin
  thn := rightstr(tahun, 2);
  q := createquery;
  result := '1.1-12.'+thn+'-0000001';
  q.Query('select nomor from t_spta1 where tahunpajak='''+tahun+''' order by nomor desc limit 1');
  if q.RecordCount = 0 then
  begin
    ok := '1.1-12.'+thn+'-0000001';
  end else
  begin
    ok := inttostr(strtoint(RightStr( q.getFieldString('nomor'), 7)) + 1);
    ok := FormatFloat('000000#', strtofloat(ok) );
    ok := '1.1-12.'+thn+'-'+ok;
  end;

  result := ok;
  q.Free;
end;
procedure TFrmSPTTahunan.setAmountSPTA1(qem, qes : TZQuery);
var
  qp : tzquery;
  pengali : integer;
begin
  qp := createquery;
  qes.setField('gaji',          prosessSalary(qem, qes, 'gaji')-
                  getQValueDouble('select round(sum(grossdeduct),0) as amount '+es+
                    'from t_payroll '+es+
                    'where year(tdate)='''+qes.getFieldString('tahunpajak')+''' and '+es+
                    ' '+gets('employee_id', qes)+' '+es+
                    '') );
  qes.setField('tunjanganpph',  prosessSalary(qem, qes, 'tunjanganpph') ); {+
                                getQValueDouble('select sum(thrbonustaxallowance) as amount '+es+
                                'from t_payroll where '+gets('employee_id', qes)+' and '+es+
                                'year(tdate)='''+qes.getFieldString('tahunpajak')+''' '+es+
                                'group by employee_id') );}
  qes.setField('tunjanganlain', prosessSalary(qem, qes, 'tunjanganlain') );
  qes.setField('honor',         prosessSalary(qem, qes, 'honor') );
  qes.setField('premiasuransi', prosessSalary(qem, qes, 'premiasuransi') );
  qes.setField('natura',        prosessSalary(qem, qes, 'natura') );
  qes.setField('bonusthr',      prosessSalary(qem, qes, 'bonusthr')+
                                getQValueDouble('select sum(thrbonus2) as amount '+es+
                                'from t_payroll where '+gets('employee_id', qes)+' and '+es+
                                'year(tdate)='''+qes.getFieldString('tahunpajak')+''' '+es+
                                'group by employee_id') );
  qes.setField('jhtemployee',   (-1)*prosessSalary(qem, qes, 'jhtemployee') );
  if qem.isNotNull('resigndate') then
  begin
    if getQValueInteger('select yearly from m_resigntype where '+gets('resigntype_id',qem)+' ') > 0 then
    begin
      qp.Query('select payroll_id, tdate, employee_id, totalincome as gaji, '+es+
               '(jkk+jkm+jkn) as premiasuransi, (jhtemployee+jpsemployee) as jhtemployee '+es+
               'from t_payroll where year(tdate)='''+qes.getFieldString('tahunpajak')+''' and '+es+
               ' '+getS('employee_id', qes)+' order by tdate desc limit 1');
      if qp.RecordCount > 0 then
      begin
        pengali := 12 - MonthOf(qp.getFieldDateTime('tdate')); //bulan terakhirnya ga usah dihitung
        qes.setField('gaji', qes.getField('gaji')+
                             (pengali*qp.getFieldDouble('gaji')) );
        qes.setField('premiasuransi', qes.getField('premiasuransi')+
                             (pengali*qp.getFieldDouble('premiasuransi')) );
        qes.setField('jhtemployee', qes.getField('jhtemployee')+
                             (pengali*qp.getFieldDouble('jhtemployee')) );
      end;
    end;
  end;
  qes.setField('nettosebelum', getQValueDouble('select sum(nettosebelum) as amount '+es+
                  'from t_payroll where '+gets('employee_id', qes)+' and '+es+
                  'year(tdate)='''+qes.getFieldString('tahunpajak')+''' '+es+
                  'group by employee_id') );
  qes.setField('pph21sebelum', getQValueDouble('select sum(pph21sebelum) as amount '+es+
                  'from t_payroll where '+gets('employee_id', qes)+' and '+es+
                  'year(tdate)='''+qes.getFieldString('tahunpajak')+''' '+es+
                  'group by employee_id') );
  qes.setField('ptkp', getQValueDouble('select ptkp as amount '+es+
                  'from m_ptkp where year(tdate) <= '''+qes.getFieldString('tahunpajak')+''' '+es+
                  'and name in ( select ptkp from '+es+
                  'm_employee where '+gets('employee_id', qes)+') order by tdate desc limit 1') );
  qp.Free;
end;
function TFrmSPTTahunan.prosessSalary(qem, qes : TZQuery; tipe:string ) : Double;
var
  qsl : tzquery;
  d : double;
begin
  qsl := createquery;
  qsl.Query('select round(sum(amount),0) as amount from t_payroll_detail '+es+
            ' where salary_id in '+
                  '(select salary_id from m_salary where acc=''D'' and sptparam='''+tipe+''') '+es+
            'and payroll_id in ( select payroll_id from t_payroll where '+es+
                  ' '+gets('employee_id', qes)+' and '+es+
                  ' year(tdate)='''+qes.getFieldString('tahunpajak')+''' '+es+
                              ' ) '+es+
            '');
  //if tipe='tunjanganpph' then pesan(qsl.SQL.Text);

  result := 0;
  d := 0;
  if qsl.RecordCount > 0 then d := d + qsl.getFieldDouble('amount');

  qsl.Query('select round(sum(amount),0) as amount from t_payroll_detail '+es+
            ' where salary_id in '+
                  '(select salary_id from m_salary where acc=''C'' and sptparam='''+tipe+''') '+es+
            'and payroll_id in ( select payroll_id from t_payroll where '+es+
                  ' '+gets('employee_id', qes)+' and '+es+
                  ' year(tdate)='''+qes.getFieldString('tahunpajak')+''' '+es+
                              ' ) '+es+
            '');
  if qsl.RecordCount > 0 then d := d - qsl.getFieldDouble('amount');

  result := d;
  qsl.Free;
end;

procedure TFrmSPTTahunan.processHitungPajak(qes : TZQuery);
var
  bulanpengali, taxIrregular, taxType, cnt : integer;
  intQ1, q3, q_tarif : tzquery;
  selesai : boolean;
  totalgross2, totalgross, bjab_pct, bjab_max, bonusthr, bjab, bjab2, pkp,
  totalGrossTanpaTHR, totalGrossTHR, pajakTanpaTHR, pajakDenganTHR, pajakTHR,
  pph21sudahdibayar_m_employee, tax, grossUp, bjab_bln, thrbonustaxallowance : double;
  procedure SetBulanBjab;
  var
    qb, qh_payroll : tzquery;
    awal, akhir : integer;
  begin
    bjab_bln   := 12;
    qb         := createquery;
    qh_payroll := createquery;
    qh_payroll.Query('select employee_id, joindate, resigndate from m_employee '+es+
                     'where '+gets('employee_id', qes)+' ');

    if formatdatetime('yyyy', qh_payroll.getFieldDateTime('joindate') ) =
       qes.getFieldString('tahunpajak')  then
    begin
      //join di tahun ini
      if qh_payroll.isNotNull('resigndate') then
      begin
        //join di tahun ini, resigndate sudah diisi
        //kalo ga ada awal dan akhir maka bjab_bln=12
        if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           qes.getFieldString('tahunpajak') then
        begin
          qb.Query('select month(tdate) as a from t_payroll where '+es+
                   ''+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+qes.getFieldString('tahunpajak')+''' order by tdate limit 1');
          if qb.RecordCount > 0 then
          begin
            awal := qb.getFieldInteger('a');
            qb.Query('select month(tdate) as a from t_payroll where '+es+
                   ''+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+qes.getFieldString('tahunpajak')+''' order by tdate desc limit 1');
            if qb.RecordCount > 0 then
            begin
              akhir := qb.getFieldInteger('a');
              bjab_bln := 1+(akhir-awal);
            end;
          end;
        end;
      end else
      begin
        //join di tahun ini, resigndate kosong
        qb.Query('select month(tdate) as a from t_payroll where '+es+
                   ''+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+qes.getFieldString('tahunpajak')+''' order by tdate limit 1');
          if qb.RecordCount > 0 then
          begin
            awal := qb.getFieldInteger('a');
            bjab_bln := 13 - awal;
          end;
      end;
    end else
    begin
      if qh_payroll.isNotNull('resigndate') then
      begin
        //join tahun kemaren, resigndate sudah diisi
        {if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           qes.getFieldString('tahunpajak') then
        begin
          bjab_bln := strtoint( formatdatetime('MM', qh_payroll.getFieldDateTime('resigndate') ) );
        end;}
        //kalo ga ada awal dan akhir maka bjab_bln=12
        if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           qes.getFieldString('tahunpajak') then
        begin
          qb.Query('select month(tdate) as a from t_payroll where '+es+
                   ''+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+qes.getFieldString('tahunpajak')+''' order by tdate limit 1');
          if qb.RecordCount > 0 then
          begin
            awal := qb.getFieldInteger('a');
            qb.Query('select month(tdate) as a from t_payroll where '+es+
                   ''+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+qes.getFieldString('tahunpajak')+''' order by tdate desc limit 1');
            if qb.RecordCount > 0 then
            begin
              akhir := qb.getFieldInteger('a');
              bjab_bln := 1+(akhir-awal);
            end;
          end;
        end;
      end
    end;
    qh_payroll.Free;
    qb.Free;
  end;
  function getBiayaJabatan(amount: double): double;
  var
    a: double;
  begin
    {a := amount * bjab_pct / 100;
    if a > (bjab_max * 12 ) then a := bjab_max * 12;
    a := RoundUp(a, 0);
    result := a;}
    a := amount * bjab_pct / 100;
    if a > (bjab_max * bjab_bln ) then a := bjab_max * bjab_bln;
    a := RoundUp(a, 0);
    result := a;
  end;
  function getPPh21(amount: double): double;
  var
    pph21setahun, mulai,sampai,jumlahnilaipajak: double;
    tarif: string;
  begin
    mulai:=0;
    sampai:=0;
    jumlahnilaipajak:=0;
    tarif := 'tarif';
    if qes.getfieldstring('npwp') = '' then tarif := 'tarifnonnpwp';
    jumlahnilaipajak := amount;
    q3.query('select tdate from m_ptkp where tdate <= '''+qes.date2sql('tdate')+''' order by tdate desc');
    q_tarif.query('select * from m_tarif where tdate = '''+q3.date2sql('tdate')+''' and final=0 order by start');

    q_tarif.first;
    pph21setahun := 0;
    while not q_tarif.eof do
    begin
      mulai := q_tarif.getFieldDouble('start');
      sampai := q_tarif.getFieldDouble('finish');
      if jumlahnilaipajak > q_tarif.getFieldDouble('finish') then begin
         pph21setahun := pph21setahun + ((q_tarif.getFieldDouble('finish') - q_tarif.getFieldDouble('start') + 0) * q_tarif.getFieldDouble(tarif) / 100);
      end else
      begin
         pph21setahun := pph21setahun + ((jumlahnilaipajak - (q_tarif.getFieldDouble('start') -1)) * q_tarif.getFieldDouble(tarif) / 100);
         break;
      end;
      q_tarif.next;
    end;
    result := int(pph21setahun);
  end;
  function HitungPajakTHR( totalGross3, totalJHTEmployee3, ptkp3 : double) : double;// totalGrossTanpaTHR, qh_payroll.getfield('totaljhtemployee'), qh_payroll.getfield('nontaxableincome') );
  var
    bjab3, totaltaxdeduct3, netto3, pkp3   : double;
  begin
    result          := 0;
    bjab3           := getBiayaJabatan(totalgross3);
    totaltaxdeduct3 := bjab3 + totalJHTEmployee3;
    netto3          := totalGross3 - totaltaxdeduct3;
    if netto3 > ptkp3 then
    begin
      pkp3            := netto3 - ptkp3;
      pkp3            := pkp3 / 1000;
      pkp3            := int(pkp3) * 1000;
      result          := getPPh21(pkp3);
    end;
  end;
begin
  intQ1   := createquery;
  q3      := createquery;
  q_tarif := createquery;
  if q3.query('select * from m_biayajabatan where tdate <= '''+qes.date2sql('tdate')+''' order by tdate desc limit 1') > 0 then
  begin
    bjab_pct := q3.getfielddouble('biayajabatan');
    bjab_max := q3.getfielddouble('maxbiayajabatan');
  end;
  bulanpengali  := 1;
  taxtype       := qes.getFieldInteger('taxtype');
  taxIrregular  := qes.getFieldInteger('taxirregular');
  SetBulanBjab;

  {thrbonustaxallowance := getQValueDouble('select sum(thrbonustaxallowance) as amount '+es+
                    'from t_payroll where '+gets('employee_id', qes)+' and '+es+
                    'year(tdate)='''+qes.getFieldString('tahunpajak')+''' '+es+
                    'group by employee_id');}
  thrbonustaxallowance := 0;
  qes.setField('thrbonustaxallowance', thrbonustaxallowance);
  repeat
    totalGross := qes.getfielddouble('gaji')+qes.getfielddouble('tunjanganpph')+
                  qes.getfielddouble('tunjanganlain')+qes.getfielddouble('honor')+
                  qes.getfielddouble('premiasuransi')+qes.getfielddouble('natura');
    bonusthr    := qes.getfielddouble('bonusthr');

    totalGrossTHR       := totalgross+qes.getfielddouble('bonusthr');
    totalGrossTanpaTHR  := totalGrossTHR - qes.getfielddouble('bonusthr');
    {dbg('gaji : '+qes.getFieldString('gaji')+es+
        'tunjanganpph : '+qes.getFieldString('tunjanganpph')+es+
        'tunjanganlain : '+qes.getFieldString('tunjanganlain')+es+
        'honor : '+qes.getFieldString('honor')+es+
        'premiasuransi : '+qes.getFieldString('premiasuransi')+es+
        'natura : '+qes.getFieldString('natura')+es+
        'thrbonustaxallowance : '+qes.getFieldString('thrbonustaxallowance') );
    dbg(totalGross);
    dbg(thrbonustaxallowance);}
    qes.setField('totalpenghasilan', totalGross+thrbonustaxallowance );
    qes.setField('bonusthr', bonusthr);
    qes.setField('bruto', qes.getField('totalpenghasilan')+qes.getField('bonusthr') );
    pajakTanpaTHR       := HitungPajakTHR( totalGrossTanpaTHR, qes.getfielddouble('jhtemployee'), qes.getfielddouble('ptkp') );
    pajakDenganTHR      := HitungPajakTHR( totalGrossTHR, qes.getfielddouble('jhtemployee'), qes.getfielddouble('ptkp') );
    pajakTHR            := pajakDenganTHR - pajakTanpaTHR;
    bjab  := getBiayajabatan(totalGrossTanpaTHR+thrbonustaxallowance);
    bjab2 := getBiayajabatan(bonusthr);
    qes.setfield('bjab', bjab);
    qes.setfield('bjab2', bjab2);
    if ((bjab+bjab2)<(bjab_max*bjab_bln)) then
    begin
       qes.setfield('bjab2', bjab2);
    end else
    begin
       qes.setfield('bjab2', (bjab_max*bjab_bln)-bjab);
    end;
    //dbg('6');
    qes.setfield('biayajabatan', qes.getfielddouble('bjab')+qes.getfielddouble('bjab2') );
    qes.setfield('jumlahpengurangan', qes.getfielddouble('biayajabatan')+qes.getfielddouble('jhtemployee') ) ;
    qes.setfield('netto', qes.getfielddouble('bruto')-qes.getfielddouble('jumlahpengurangan'));
    qes.setfield('totalnetto', qes.getfielddouble('netto')+qes.getfielddouble('nettosebelum') );
    //dbg('7');
    if qes.getfielddouble('totalnetto') > qes.getfielddouble('ptkp') then
    begin
      qes.setfield('pkp', qes.getfielddouble('totalnetto')-qes.getfielddouble('ptkp'));
      pkp := qes.getfielddouble('pkp');
      pkp := pkp / 1000;
      pkp := int(pkp) * 1000;
      qes.setfield('pkpround', pkp);
    end else
    begin
      qes.setfield('pkp', 0);
      qes.setfield('pkpround', 0);
    end;

    tax := getPPh21(pkp);
    qes.setfield('pph21', pajakTanpaTHR);
  	if taxIrregular = 2 then qes.setfield('pph21', pajakTanpaTHR+pajakTHR);
    qes.setfield('pph21terutang', qes.getFieldDouble('pph21')-qes.getFieldDouble('pph21sebelum') );
      //tax := pajakTanpaTHR; //ini gausah di SPT, ditambah pajak tanpa thr, 20 agustus 2014, soal nya pajak THR harus dihitung langsung 1 bulan, ga dibagi
    pph21sudahdibayar_m_employee := qes.getFieldDouble('pph21sebelum');
    //dbg('8');
    qes.setfield('pph21sudahdibayar', getQvaluedouble('select sum(tax21_monthly+tax21_irregular+thrbonustax) as amount from t_payroll '+es+
                                        'where year(tdate) = year('''+qes.date2sql('tdate')+''') and '+es+
                                        'employee_id = '''+qes.getFieldString('employee_id')+''' '+es+
                                        'group by employee_id '));
    qes.setfield('pph21selisih', qes.getFieldDouble('pph21terutang')-qes.getFieldDouble('pph21sudahdibayar') );
    if taxtype = 1 then selesai := true;
    if qes.getFieldInteger('employee_id') = 1 then
    begin
      if taxtype = 2 then selesai := true;
    end else
    begin
      if taxtype = 2 then
      begin
        if grossUp = tax then
        begin
          //qes.setfield('tunjanganpph', qes.getFieldDouble('pph21'));
          selesai := true;
        end else
        begin
          //qes.setfield('tunjanganpph', qes.getFieldDouble('pph21'));
          grossUp := tax;
        end;
      end;
    end;
    cnt := cnt + 1;
  until (selesai = true) or (cnt >= 100);

  if taxIrregular = 1 then qes.setfield('pph21', pajakTanpaTHR+pajakTHR);
  qes.setfield('pph21terutang', qes.getFieldDouble('pph21')-qes.getFieldDouble('pph21sebelum') );
  qes.setfield('pph21sudahdibayar', getQvaluedouble('select sum(tax21_monthly+tax21_irregular+thrbonustax) as amount from t_payroll '+es+
									'where year(tdate) = year('''+qes.date2sql('tdate')+''') and '+es+
									'employee_id = '''+qes.getFieldString('employee_id')+''' '+es+
									'group by employee_id '));
  qes.setfield('pph21selisih', qes.getFieldDouble('pph21terutang')-qes.getFieldDouble('pph21sudahdibayar') );

  intQ1.free;
  q3.free;
  q_tarif.free;
end;

procedure TFrmSPTTahunan.N2ImportBuktiPotong1721A11Click(Sender: TObject);
var
  qes : tzquery;
  fn, npwppemotong, npwp, tahun, dtsql, s : string;
  thn : integer;
  ts : tstringlist;
begin
  enddate := btnenddate.Date;
  s := formatdatetime('yyyy', enddate);
  if InputQuery('Input Tahun Pajak', 'Tahun Pajak', s) = false then exit;
  if s = '' then exit;
  try
    thn := strtoint(s);
  except
    MsgError('Please Input Only Number');
    exit;
  end;

  fn := FileSaveDialog('CSV Files (*.csv)|*.csv');
  if fn = '' then exit;

  ShowProgressbar;
  fn    := fn +'.csv';
  tahun := inttostr(thn);
  qes := createquery;
  ts  := tstringlist.Create;
  ts.Clear;
  s   := 'Masa Pajak;Tahun Pajak;Pembetulan;Nomor Bukti Potong;Masa Perolehan Awal;';
  s   := s + 'Masa Perolehan Akhir;NPWP;NIK;Nama;Alamat;Jenis Kelamin;Status PTKP;Jumlah Tanggungan;';
  s   := s + 'Nama Jabatan;WP Luar Negeri;Kode Negara;Kode Pajak;Jumlah 1;Jumlah 2;Jumlah 3;Jumlah 4;';
  s   := s + 'Jumlah 5;Jumlah 6;Jumlah 7;Jumlah 8;Jumlah 9;Jumlah 10;Jumlah 11;Jumlah 12;Jumlah 13;Jumlah 14;';
  s   := s + 'Jumlah 15;Jumlah 16;Jumlah 17;Jumlah 18;Jumlah 19;Jumlah 20;Status Pindah;NPWP Pemotong;';
  s   := s + 'Nama Pemotong;Tanggal Bukti Potong';
  ts.Add(s);
  Qes.Query('select * from t_spta1 where '+getSecurity(txtid.Text)+' and tahunpajak='''+tahun+''' order by nomor ');
  qes.First;
  while not qes.Eof do
  begin
    SetProgressbar('Employee : '+qes.getFieldString('nip')+
                   ' '+qes.getFieldString('name')+
                   ', '+inttostr(qes.RecNo)+'/'+inttostr(qes.recordcount),
                   (qes.recno * 100) div qes.recordcount);
    npwppemotong := qes.getCSV('npwppemotong');
    npwppemotong := replace(npwppemotong, '.', '');
    npwppemotong := replace(npwppemotong, '-', '');
    npwp := qes.getCSV('npwp');
    npwp := replace(npwp, '.', '');
    npwp := replace(npwp, '-', '');
    if trim(npwp) = '' then npwp := '000000000000000';
    
    s := '';
    s := s + qes.getCSV('masapajak')        + ';' + qes.getCSV('tahunpajak')        + ';';
    s := s + qes.getCSV('pembetulan')       + ';' + qes.getCSV('nomor')             + ';';
    s := s + qes.getCSV('masaawal')         + ';' + qes.getCSV('masaakhir')         + ';';
    s := s + npwp                           + ';' + qes.getCSV('nip')               + ';';
    s := s + qes.getCSV('name')             + ';' + qes.getCSV('alamat')            + ';';
    s := s + qes.getCSV('jeniskelamin')     + ';' + qes.getCSV('statusptkp')        + ';';
    s := s + qes.getCSV('jumlahtanggungan') + ';' + qes.getCSV('namajabatan')       + ';';
    s := s + qes.getCSV('wpluarnegeri')     + ';' + qes.getCSV('kodenegara')        + ';';
    s := s + qes.getCSV('kodepajak')        + ';' + qes.getCSV('gaji')              + ';';
    s := s + qes.getCSV('tunjanganpph')     + ';' + qes.getCSV('tunjanganlain')     + ';';
    s := s + qes.getCSV('honor')            + ';' + qes.getCSV('premiasuransi')     + ';';
    s := s + qes.getCSV('natura')           + ';' + qes.getCSV('bonusthr')          + ';';
    s := s + qes.getCSV('bruto')            + ';' + qes.getCSV('biayajabatan')      + ';';
    s := s + qes.getCSV('jhtemployee')      + ';' + qes.getCSV('jumlahpengurangan') + ';';
    s := s + qes.getCSV('netto')            + ';' + qes.getCSV('nettosebelum')      + ';';
    s := s + qes.getCSV('totalnetto')       + ';' + qes.getCSV('ptkp')              + ';';
    s := s + qes.getCSV('pkpround')         + ';' + qes.getCSV('pph21')             + ';';
    s := s + qes.getCSV('pph21sebelum')     + ';' + qes.getCSV('pph21terutang')     + ';';
    s := s + qes.getCSV('pph21sudahdibayar')+ ';' + qes.getCSV('statuspindah')      + ';';
    s := s + npwppemotong                   + ';' + qes.getCSV('namapemotong')      + ';';
    s := s + formatdatetime('dd-mm-yyyy', qes.getFieldDateTime('tdate'));
    ts.Add(s);
    qes.Next;
  end;

  if ts.Count > 1 then ts.SaveToFile(fn);
  qes.Free;
  ts.Free;
  HideProgressbar;
  MsgOK('File Saved to ['+fn+']');
end;
procedure TFrmSPTTahunan.isiCell(Sheet:variant; kolom, baris, isi : string);
var
  br, kl : integer;
begin
  kolom := lowercase(kolom);
  br := strtoint(baris);
  kl := getQValueInteger('select nomor from s_nomorkolomexcel where kolom='''+kolom+''' ');
  Sheet.cells[br, kl].value := isi;
end;
procedure TFrmSPTTahunan.isiExcel(XLApp1 : Variant; fn:string; qm:tzquery);
var
  sheet : variant;
begin
  XLApp1.Workbooks.open(fn) ;
  //aktifkan sheet 1
  Sheet := XLApp1.WorkSheets[1] ;
  //isi sheet cell (baris,kolom)
  //h1 nomor BP
  isiCell(Sheet, 'be', '11', MidStr(qm.getFieldString('nomor'), 5, 2 ) );
  isiCell(Sheet, 'bm', '11', MidStr(qm.getFieldString('nomor'), 8, 2 ) );
  isiCell(Sheet, 'bx', '11', MidStr(qm.getFieldString('nomor'), 11, 7 ) );

  //h2 masa awal masa akhir
  isiCell(Sheet, 'da', '11', FormatFloat('0#', qm.getFieldDouble('masaawal')) );
  isiCell(Sheet, 'di', '11', FormatFloat('0#', qm.getFieldDouble('masaakhir')) );

  //h3 npwp pemotong / PT
  isiCell(Sheet, 'v',  '16', MidStr(qm.getFieldString('npwpcompany'), 1, 12 ) );
  isiCell(Sheet, 'ba', '16', MidStr(qm.getFieldString('npwpcompany'), 14, 3 ) );
  isiCell(Sheet, 'bl', '16', MidStr(qm.getFieldString('npwpcompany'), 18, 3 ) );

  //h4 nama pemotong / PT
  isiCell(Sheet, 'v',  '18', qm.getFieldString('namacompany') );

  //a1 npwp pegawai
  isiCell(Sheet, 'r',  '24', MidStr(qm.getFieldString('npwp'), 1, 12 ) );
  isiCell(Sheet, 'av', '24', MidStr(qm.getFieldString('npwp'), 14, 3 ) );
  isiCell(Sheet, 'be', '24', MidStr(qm.getFieldString('npwp'), 18, 3 ) );

  isiCell(Sheet, 'r',  '26', qm.getFieldString('nip') );  //a2 nip
  isiCell(Sheet, 'r',  '29', qm.getFieldString('name') ); //a3 nama pegawai

  //a4 alamat
  if Length(qm.getFieldString('alamat')) > 57 then
  begin
    isiCell(Sheet, 'r',  '32', midstr(qm.getFieldString('alamat'), 1, 57) );
    isiCell(Sheet, 'r',  '33', midstr(qm.getFieldString('alamat'), 58, Length(qm.getFieldString('alamat')) ) );
  end else
  begin
    isiCell(Sheet, 'r',  '32', qm.getFieldString('alamat') );
    isiCell(Sheet, 'r',  '33', '' );
  end;

  //a5 atau a6 jenis kelamin
  if lowercase(qm.getFieldString('jeniskelamin')) = 'm' then
  begin
    isiCell(Sheet, 'x',  '36', 'X' );
    isiCell(Sheet, 'ar',  '36', '' );
  end else
  begin
    isiCell(Sheet, 'x',  '36', '' );
    isiCell(Sheet, 'ar',  '36', 'X' );
  end;

  //a7, 8, 9 jumlah tanggungan
  if lowercase(qm.getFieldString('statusptkp')) = 'k' then
  begin
    isiCell(Sheet, 'bs',  '26', qm.getFieldString('jumlahtanggungan') );
    isiCell(Sheet, 'cj',  '26', '' );
    isiCell(Sheet, 'cz',  '26', '' );
  end else
  begin
    isiCell(Sheet, 'bs',  '26', '' );
    isiCell(Sheet, 'cj',  '26', qm.getFieldString('jumlahtanggungan') );
    isiCell(Sheet, 'cz',  '26', '' );
  end;

  isiCell(Sheet, 'cj',  '29', qm.getFieldString('namajabatan') );//a10 nama jabatan

  //a11 karyawan asing
  isiCell(Sheet, 'co',  '32', '' );
  if lowercase(qm.getFieldString('wpluarnegeri')) <> 'n' then
  begin
    isiCell(Sheet, 'co',  '32', 'X' );
  end;
  isiCell(Sheet, 'cq',  '34', qm.getFieldString('kodenegara') );//a10 kode negara

  //kode objek pajak
  if lowercase(qm.getFieldString('kodepajak')) = '21-100-01' then
  begin
    isiCell(Sheet, 'w',  '43', 'X' );
    isiCell(Sheet, 'am',  '43', '' );
  end else
  begin
    isiCell(Sheet, 'w',  '43', '' );
    isiCell(Sheet, 'am',  '43', 'X' );
  end;

  isiCell(Sheet, 'cp',  '46', qm.getFieldString('gaji') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '47', qm.getFieldString('tunjanganpph') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '48', qm.getFieldString('tunjanganlain') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '49', qm.getFieldString('honor') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '50', qm.getFieldString('premiasuransi') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '51', qm.getFieldString('natura') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '52', qm.getFieldString('bonusthr') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '53', qm.getFieldString('bruto') );//a10 nama jabatan

  isiCell(Sheet, 'cp',  '55', qm.getFieldString('biayajabatan') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '56', qm.getFieldString('jhtemployee') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '57', qm.getFieldString('jumlahpengurangan') );//a10 nama jabatan

  isiCell(Sheet, 'cp',  '59', qm.getFieldString('netto') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '60', qm.getFieldString('nettosebelum') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '61', qm.getFieldString('totalnetto') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '62', qm.getFieldString('ptkp') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '63', qm.getFieldString('pkpround') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '64', qm.getFieldString('pph21') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '65', qm.getFieldString('pph21sebelum') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '66', qm.getFieldString('pph21terutang') );//a10 nama jabatan
  isiCell(Sheet, 'cp',  '67', qm.getFieldString('pph21sudahdibayar') );//a10 nama jabatan

  //c1 npwp pemotong / PT
  isiCell(Sheet, 'p',  '72', MidStr(qm.getFieldString('npwppemotong'), 1, 12 ) );
  isiCell(Sheet, 'av', '72', MidStr(qm.getFieldString('npwppemotong'), 14, 3 ) );
  isiCell(Sheet, 'bg', '72', MidStr(qm.getFieldString('npwppemotong'), 18, 3 ) );

  //c2 nama pemotong / PT
  isiCell(Sheet, 'p',  '75', qm.getFieldString('namapemotong') );

  //c3 tanggal
  isiCell(Sheet, 'bv',  '75', MidStr(qm.date2sql('tdate'), 9, 2 ) );
  isiCell(Sheet, 'cc',  '75', MidStr(qm.date2sql('tdate'), 6, 2 ) );
  isiCell(Sheet, 'ck',  '75', MidStr(qm.date2sql('tdate'), 1, 4 ) );

  //proses simpan
  XLApp1.ActiveWorkBook.save;
  XLApp1.ActiveWorkBook.close;
  XLApp1.Workbooks.close;
end;
procedure TFrmSPTTahunan.Print1721A1toExcel1Click(Sender: TObject);
var
  XLApp1 :Variant ;
  no, fs, fn : string;
begin
  if q_master.recordcount = 0 then exit;
  ShowProgressbar;
  fs     := ExtractFilePath(Application.ExeName) + 'spt\SPT_Tahunan.xls';
  if FileExists(fs) = False then
  begin
    MsgError('Folder "SPT" atau File "SPT_Tahunan.xls" tidak ditemukan');
    exit;
  end;
  XLApp1 := createoleobject('excel.application');

  q_master.DisableControls;
  q_master.First;
  while not q_master.Eof do
  begin
    SetProgressbarDefault(q_master);
    no     := Replace(q_master.getFieldString('nomor'), '.', '');
    no     := Replace(no, '-', '');
    no     := 'SPT_'+q_master.getFieldString('tahunpajak')+'_'+no+ '-' + UpperCase(q_master.getFieldString('name'))+'.xls';
    no     := replace(no, ' ', '');
    no     := replace(no, '''', '');
    fn     := ExtractFilePath(Application.ExeName) + 'spt\' + no;
    CopyFile(PChar(fs), PChar(fn), False);
    if FileExists(fn) then
    begin
      isiExcel(XLApp1, fn, q_master);
    end;
    q_master.next;
  end;


  q_master.EnableControls;
  HideProgressbar;
  MsgOK('File Saved to '+ExtractFilePath(Application.ExeName) + 'spt\');
end;

end.

