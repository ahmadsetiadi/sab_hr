unit UPayroll2;

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
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, cxSplitter, IdBaseComponent,
  IdComponent, IdTCPConnection, IdTCPClient, IdExplicitTLSClientServerBase,
  IdMessageClient, IdSMTPBase, IdSMTP, IdMessage, IdAttachment, IdIOHandler,
  IdIOHandlerSocket, IdIOHandlerStack, IdSSL, IdSSLOpenSSL, IdAttachmentFile,
  Vcl.AppEvnts, dxSkinMetropolis, dxSkinMetropolisDark,
  dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray, dxSkinOffice2016Colorful,
  dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light, dxBarBuiltInMenu,
  cxDataControllerConditionalFormattingRulesManagerDialog;

type
  TFrmPayroll2 = class(TForm)
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
    actDBG: TAction;
    N2CreatePayrollSetahun1: TMenuItem;
    DS_Laporan1: TDataSource;
    Q_Laporan1: TZQuery;
    frxDBDataset2: TfrxDBDataset;
    DS_Laporan: TDataSource;
    frxDBDataset3: TfrxDBDataset;
    DS_Laporan2: TDataSource;
    Q_Laporan2: TZQuery;
    N1PayrolSlip1: TMenuItem;
    SMTP: TIdSMTP;
    MailMessage: TIdMessage;
    IdSSLIOHandlerSocketOpenSSL1: TIdSSLIOHandlerSocketOpenSSL;
    IdSSLIOHandlerSocketOpenSSL2: TIdSSLIOHandlerSocketOpenSSL;
    N2PreviewPayrollSlip1: TMenuItem;
    N8OneWeek1: TMenuItem;
    N9NextWeek1: TMenuItem;
    N10PrevWeek1: TMenuItem;
    actOneWeek: TAction;
    actNextWeek: TAction;
    actPrevWeek: TAction;
    ApplicationEvents1: TApplicationEvents;
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
    procedure QDAfterPost(DataSet: TDataSet);
    procedure QDBeforeEdit(DataSet: TDataSet);
    procedure actDBGExecute(Sender: TObject);
    procedure N2CreatePayrollSetahun1Click(Sender: TObject);
    procedure N1PayrolSlip1Click(Sender: TObject);
    procedure N2PreviewPayrollSlip1Click(Sender: TObject);
    procedure actNextWeekExecute(Sender: TObject);
    procedure actOneWeekExecute(Sender: TObject);
    procedure actPrevWeekExecute(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmPayroll2: TFrmPayroll2;
  isNowEditDate, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport, Unit3;
//form close, form create
procedure TFrmPayroll2.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmPayroll2.cekAllEditModule(idm:integer);
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
procedure TFrmPayroll2.isiALLTableKolom;
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
procedure TFrmPayroll2.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmPayroll2.FormCreate(Sender: TObject);
begin
  isDebug := False;
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

  N2CreatePayrollSetahun1.Visible := False;
  if CekMotherBoard then N2CreatePayrollSetahun1.Visible := True;
  
end;
procedure TFrmPayroll2.SettingQuery;
var
  idd, idm : integer;
  qd  : tzquery;
  namagrid : string;
begin
  idm               := strtoint(txtid.Text);
  master.Tag        := strtoint(txtid.Text);
  q_master.Tag      := strtoint(txtid.Text);
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, true, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  setColumnWidth(txtid.Text, q_master, master, True);
  //StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmPayroll2.ReloadClick;
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
  grid_master.SetFocus;
end;
procedure TFrmPayroll2.SettingFont;
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
procedure TFrmPayroll2.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, False);
  SetEditTable(master, False);
  SetDeleteTable(master, cekValidasi('`delete`', mn));

  ppAdd.Visible    := False;
  ppEdit.Visible   := False;
  ppDelete.Visible := cekValidasi('`delete`', mn);

  ppExport.Visible := cekValidasi('`export`', mn);
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );

  readonlyAllColumn(master);
  master.NavigatorButtons.Cancel.Visible  := False;
  master.NavigatorButtons.Post.Visible    := False;
end;
procedure TFrmPayroll2.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmPayroll2.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmPayroll2.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmPayroll2.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmPayroll2.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmPayroll2.MenuItem1Click(Sender: TObject);
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
procedure TFrmPayroll2.OneMonth1Click(Sender: TObject);
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

procedure TFrmPayroll2.NextMonth1Click(Sender: TObject);
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
procedure TFrmPayroll2.PrevMonth1Click(Sender: TObject);
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
procedure TFrmPayroll2.OneYear1Click(Sender: TObject);
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
procedure TFrmPayroll2.OneDay1Click(Sender: TObject);
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
procedure TFrmPayroll2.oday1Click(Sender: TObject);
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
procedure TFrmPayroll2.actNextWeekExecute(Sender: TObject);
begin
  //next week
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate         := addDays(btnstartdate.Date, 7);
  enddate           := addDays(startdate, 6);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := endDate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmPayroll2.actOneWeekExecute(Sender: TObject);
begin
  //next week
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate         := btnstartdate.Date;
  enddate           := addDays(startdate, 6);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := endDate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmPayroll2.actPrevWeekExecute(Sender: TObject);
begin
  //next week
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate         := addDays(btnstartdate.Date, -7);
  enddate           := addDays(startdate, 6);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := endDate;
  ReloadClick;
  DisableChangeDate := false;
end;

procedure TFrmPayroll2.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmPayroll2.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmPayroll2.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmPayroll2.getFocusTableName : String;
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
function TFrmPayroll2.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmPayroll2.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmPayroll2.AutoActiveQuery;
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
procedure TFrmPayroll2.AutoRefreshQuery;
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
function TFrmPayroll2.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmPayroll2.ImportFromExcel1Click(Sender: TObject);
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

function TFrmPayroll2.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmPayroll2.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmPayroll2.actLookupExecute(Sender: TObject);
var
  Q : tzquery;
  s, sql : string;
  idk : integer;
begin
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
procedure TFrmPayroll2.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmPayroll2.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmPayroll2.actDBGExecute(Sender: TObject);
begin
  if isDebug = false then
  begin
    isDebug := True;
    dbg('Debug is ON');
  end else
  begin
    isDebug := False;
    dbg('Debug is OFF');  
  end;
end;

procedure TFrmPayroll2.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmPayroll2.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmPayroll2.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmPayroll2.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmPayroll2.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmPayroll2.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmPayroll2.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmPayroll2.ppFreezeClick(Sender: TObject);
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
procedure TFrmPayroll2.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmPayroll2.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmPayroll2.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmPayroll2.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmPayroll2.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmPayroll2.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmPayroll2.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPayroll2.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmPayroll2.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPayroll2.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPayroll2.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmPayroll2.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPayroll2.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmPayroll2.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmPayroll2.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmPayroll2.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmPayroll2.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmPayroll2.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmPayroll2.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmPayroll2.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmPayroll2.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmPayroll2.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmPayroll2.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', serverdate);
end;
procedure TFrmPayroll2.beforePostMaster;
begin
  if getQValueInteger('select count(*) from t_payroll2 where '+es+
                      '  employee_id='''+q_master.getFieldString('employee_id')+''' and '+es+
                      ' tdate > '''+q_master.date2sql('tdate')+''' ') > 0 then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
end;
procedure TFrmPayroll2.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmPayroll2.beforeEditMaster;
begin
  //
end;
procedure TFrmPayroll2.beforeDeleteMaster;
begin
  if getQValueInteger('select count(*) from t_payroll2 where '+es+
                      '  employee_id='''+q_master.getFieldString('employee_id')+''' and '+es+
                      ' tdate > '''+q_master.date2sql('tdate')+''' ') > 0 then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
  ExecuteSQL('delete from t_payroll_detail2 where '+gets('payroll_id', q_master)+' ');
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmPayroll2.afterDeleteMaster;
begin
  //
end;
procedure TFrmPayroll2.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmPayroll2.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmPayroll2.LookupADEmployee_id;
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
          'and '+getsecurity+' and '+syarat+' order by name ');
  if LookupQuery('Choose Employee', Q, 800, False, '', 'm_employee') then
  begin
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,unit_id,workarea_id,grade_id,'+
                            'employeestatus_id', Q );
  end;
  Q.free;
end;
procedure TFrmPayroll2.N1CreateTHR1Click(Sender: TObject);
var
  emp, qd: tzQuery;
  payrolldate, dt2, dt : tdatetime;
  kolom, syarat, s : string;
  y,m,d: word;
begin
  qd    := createQuery;
  ExecuteSQL('flush tables');
  ExecuteSQL('update m_payrolldate set tdate = null');
  qd.query('select * from m_payrolldate order by id');
  qd.AfterCancel := QDAfterPost;
  qd.AfterDelete := QDAfterPost;
  qd.AfterPost   := QDAfterPost;
  qd.BeforeEdit  := QDBeforeEdit;
  qd.OnNewRecord := QDBeforeEdit;
  //dbg('x');
  qd.First;
  while not qd.eof do
  begin
    qd.Edit;
    dt := startdate;
    if qd.getFieldString('payrollfield') = 'enddate' then
    begin
      qd.setField('tdate', addDays(dt, 6));
    end else
    begin
      qd.setField('tdate', dt);
    end;
    qd.Post;
    qd.next;
  end;
  //dbg('1');
  if LookupQuery('Setting Payroll Date', qd, 800, true, 'comp_month,comp_date,payrollfield', 'm_payrolldate', True, True) = false then
  begin
    qd.Free;
    MsgError('CANCEL');
    exit;
  end;
  //dbg('2');
  if isNowEditDate then qd.Post;

  s := '';
  if InputQuery('Cari Nama Employee', 'Search', s) = False then
  begin
    qd.Free;
    MsgError('CANCEL');
    exit;
  end;

  emp   := createQuery;
  kolom := '*';
  syarat:= ' (0=0) ';
  emp.Query('select * from s_lookup where tablename=''t_payroll2'' and columnname=''employee_id'' ');
  if emp.RecordCount > 0 then
  begin
    kolom := emp.getFieldString('kolom');
    syarat:= emp.getFieldString('syarat');
  end;

  //dbg('3');
  payrolldate := getQValue('select tdate from m_payrolldate where payrollfield=''tdate'' ');
  ExecuteSQL('call autoupdateemployee(''' + date2sql(payrolldate) + ''');');
  emp.query('select '+kolom+' from m_employee where '+getsecurity+' and '+es+
            'name like ''%'+s+'%'' '+es+
            'and employeestatus_id = 6 '+es+
            'and joindate <= ''' + date2sql(payrolldate) +es+
            ''' and (isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= ''' + date2sql(payrolldate) +''' ' +es+
  'or (month(resigndate)=month(''' + date2sql(payrolldate) + ''' )  and  year(resigndate)=year(''' +date2sql(payrolldate) + ''' ) )' +
  ')');
  pesan(emp.SQL.Text);
  if LookupQuery('Choose Employee', emp, 800, True, '', 'm_employee') =False then
  begin
    //dbg('4');
    emp.free;
    qd.Free;
    MsgError('CANCEL');
    exit;
  end;
  //dbg('5');
  ShowProgressbar;
  emp.First;
  while not emp.eof do
  begin
    setProgressbar('Processing '+emp.getFieldString('nip')+
                   ' '+emp.getFieldString('name')+
                   ', '+FormatDateTime('dd MMM yyyy', payrolldate)+
                   ', '+inttostr(emp.RecNo)+'/'+inttostr(emp.recordcount),
                   (emp.recno * 100) div emp.recordcount);
    createPayroll(payrolldate,qd,emp,'');
    emp.next;
  end;
  //dbg('6');
  emp.free;
  qd.Free;
  ReloadClick;
  HideProgressbar;
  msgok('Finished');
end;
procedure TFrmPayroll2.N2CreatePayrollSetahun1Click(Sender: TObject);
var
  emp, qd: tzQuery;
  dt2, payrolldate, dt : tdatetime;
  kolom, syarat, s : string;
  y, m, d, b1,b2, no, total, x, y1,m1,d1, y2,m2,d2 : word;
begin
  ExecuteSQL('flush tables');
  ExecuteSQL('update m_payrolldate set tdate = null');

  dt := startdate;
  DecodeDate(startdate, y1,m1,d1);
  DecodeDate(enddate, y2,m2,d2);
  b2    := (y2*12) + m2;
  b1    := (y1*12) + m1;
  total := b2 - b1;
  s     := '';
  if InputQuery('Cari Nama Employee', 'Search', s) = False then exit;

  qd    := createQuery;
  emp   := createQuery;
  kolom := '*';
  syarat:= ' (0=0) ';
  emp.Query('select * from s_lookup where tablename=''t_payroll2'' and columnname=''employee_id'' ');
  if emp.RecordCount > 0 then
  begin
    kolom := emp.getFieldString('kolom');
    syarat:= emp.getFieldString('syarat');
  end;

  payrolldate := enddate;
  ExecuteSQL('call autoupdateemployee(''' + date2sql(payrolldate) + ''');');
  emp.query('select '+kolom+' from m_employee where '+getsecurity+' and '+es+
            'name like ''%'+s+'%'' '+es+
            'and employeestatus_id = 2 '+es+
            'and joindate <= ''' + date2sql(payrolldate) +es+
            ''' and (isnull(resigndate) or resigndate<= ''1920-01-01'' or '+es+
            '         year(resigndate)=year('''+date2sql(payrolldate)+''') )' );
  pesan(emp.SQL.Text);
  if LookupQuery('Choose Employee', emp, 800, True, '', 'm_employee') =False then
  begin
    //dbg('4');
    emp.free;
    qd.Free;
    MsgError('CANCEL');
    exit;
  end;
  //dbg('5');
  ShowProgressbar;
  no := 1;
  for x := 0 to total do
  begin
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
      //dt := startdate;
      dt := addMonths(startdate, x);
      dt := addMonths(dt, qd.getFieldInteger('comp_month'));
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
    if isNowEditDate then qd.Post;
    //LookupQuery('Setting Payroll Date', qd, 800, true, 'comp_month,comp_date,payrollfield', 'm_payrolldate', True, True);
    payrolldate := getQValue('select tdate from m_payrolldate where payrollfield=''tdate'' ');
    //ShowMessage(date2sql(payrolldate));
    emp.First;      
    while not emp.eof do
    begin
      setProgressbar('Processing '+emp.getFieldString('nip')+
                     ' '+emp.getFieldString('name')+
                     ', '+FormatDateTime('dd MMM yyyy', payrolldate)+
                     ', '+inttostr(no)+'/'+inttostr(emp.recordcount*total),
                     (no * 100) div (emp.recordcount*total) );
      if formatdatetime('yyyy-mm-01', emp.getFieldDateTime('joindate'))
         <= formatdatetime('yyyy-mm-01',payrolldate)  then
      begin
        if emp.isNotNull('resigndate') then
        begin
          if formatdatetime('yyyy-mm-01', emp.getFieldDateTime('resigndate'))
             >= formatdatetime('yyyy-mm-01',payrolldate)  then createPayroll(payrolldate,qd,emp,'');
        end else
        begin
          createPayroll(payrolldate,qd,emp,'');
        end;
      end;
      no := no + 1;
      emp.next;
    end;
  end;
  //dbg('6');
  emp.free;
  qd.Free;
  ReloadClick;
  HideProgressbar;
  msgok('Finished');
end;
procedure TFrmPayroll2.QDAfterPost(DataSet: TDataSet);
begin
  isNowEditDate := False;
end;
procedure TFrmPayroll2.QDBeforeEdit(DataSet: TDataSet);
begin
  isNowEditDate := True;
end;

procedure TFrmPayroll2.N1PayrolSlip1Click(Sender: TObject);
var
  fn, pwd :string;
  smtpPass, smtpUser, smtpHost : string;
  smtpPort :Integer;
begin
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  q_laporan.Active  := False;
  q_laporan1.Active := False;
  q_laporan2.Active := False;

  if LookupQuery('Choose Payroll', q_master, 800, True, '', 't_payroll2' ) = false then exit;

  showprogressbar;
  smtpHost := getQValueString('select value from s_setting where name=''smtphost'' ');
  smtpPort := getQValueInteger('select value from s_setting where name=''smtpport'' ');
  smtpUser := getQValueString('select value from s_setting where name=''smtpusername'' ');
  smtpPass := getQValueString('select value from s_setting where name=''smtppassword'' ');

  q_master.DisableControls;
  q_master.First;
  while not q_master.Eof do
  begin
    setprogressbardefault(q_master);
    q_laporan.Query('select p.*, e.name as employeename,'+es+
                    'e.email as email, e.password, '+es+
                    'c.name as companyname,'+es+
                    'd.name as divisionname,'+es+
                    'w.name as workareaname,'+es+
                    'po.name as positionname,'+es+
                    'g.name as gradename,'+es+
                    'es.name as employeestatusname '+es+
                    'from t_payroll2 p '+es+
                    'left join m_employee e on p.employee_id = e.employee_id '+es+
                    'left join m_company c on p.company_id = c.company_id '+es+
                    'left join m_division d on p.division_id = d.division_id '+es+
                    'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                    'left join m_position po on p.position_id = po.position_id '+es+
                    'left join m_grade g on p.grade_id = g.grade_id '+es+
                    'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                    'where p.payroll_id ='''+q_master.getFieldString('payroll_id')+'''  '+es+
                    'order by p.nip, p.tdate');
    if q_laporan.RecordCount > 0 then
    begin
      q_laporan1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                    'from t_payroll_detail2 pd '+es+
                    'left join m_salary s on pd.salary_id = s.salary_id '+es+
                    'where s.acc=''D'' and s.sliporder > 0 '+es+
                    'and pd.amount > 0 '+es+
                    'group by pd.payroll_id, s.slipname');
      q_laporan2.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                    'from t_payroll_detail2 pd '+es+
                    'left join m_salary s on pd.salary_id = s.salary_id '+es+
                    'where s.acc=''C'' and s.sliporder > 0 '+es+
                    'and pd.amount > 0 '+es+
                    'group by pd.payroll_id, s.slipname');
        fn := '';
        fn := Extractfilepath(Application.exename)+'\';
        fn := fn + q_laporan.getFieldString('nip')+'-';
        fn := fn + FormatDateTime('yyyymm', q_master.getFieldDateTime('tdate') );
        fn := fn + '.pdf';
        pwd:= q_laporan.getFieldString('password');
        pwd:= Decrypt(pwd);
        //dbg(pwd);
        exportReporttoPDF(Fr_Report,  fn, pwd);
        if q_laporan.getFieldString('email') <> '' then
        begin
          SendEmail(q_laporan.getFieldString('email'),
                    'Payroll Slip '+
                      FormatDateTime('mmm yyyy', q_master.getFieldDateTime('tdate') ) + ' '+
                      uppercase(q_laporan.getFieldString('companyname')),
                    '', fn, smtpHost, smtpUser, smtpPass, smtpPort);
        end;
        DeleteFile(fn);
    end;
    q_master.Next;
  end;
  hideprogressbar;
  MsgOK('Finished');
end;

procedure TFrmPayroll2.N2PreviewPayrollSlip1Click(Sender: TObject);
var
  s :string;
begin
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  q_laporan.Active  := False;
  q_laporan1.Active := False;
  q_laporan2.Active := False;

  if LookupQuery('Choose Payroll', q_master, 800, True, '', 't_payroll2' ) = false then exit;
  s := getColumnFromFilter(q_master, 'payroll_id');
  q_laporan.Query('select p.*, e.name as employeename,'+es+
                  'e.email as email, e.password, '+es+
                  'c.name as companyname,'+es+
                  'd.name as divisionname,'+es+
                  'w.name as workareaname,'+es+
                  'po.name as positionname,'+es+
                  'g.name as gradename,'+es+
                  'es.name as employeestatusname '+es+
                  'from t_payroll2 p '+es+
                  'left join m_employee e on p.employee_id = e.employee_id '+es+
                  'left join m_company c on p.company_id = c.company_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_grade g on p.grade_id = g.grade_id '+es+
                  'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                  'where p.payroll_id in '+s+'  '+es+
                  'order by p.nip, p.tdate');
  if q_laporan.RecordCount > 0 then
  begin
    q_laporan1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail2 pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''D'' and s.sliporder > 0 '+es+
                  'and pd.amount > 0 '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by s.sliporder');
    q_laporan2.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail2 pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''C'' and s.sliporder > 0 '+es+
                  'and pd.amount > 0 '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by s.sliporder');
    FR_Report.ShowReport;
  end else
  begin
    MsgError('No Data to Print');
  end;
end;


end.
