unit UImportALL;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, system.win.comobj,
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
  dxSkinVisualStudio2013Light, dxBarBuiltInMenu, dxSpreadSheetActions, dxSpreadSheet,
  dxSpreadSheetCore, cxGridExportLink,
  cxDataControllerConditionalFormattingRulesManagerDialog, QImport3, QImport3XLS,
  QImport3Xlsx;

type
  TFrmImportALL = class(TForm)
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
    actDBG: TAction;
    ApplicationEvents1: TApplicationEvents;
    TabTransfer: TcxTabSheet;
    TabCash: TcxTabSheet;
    cxGridPopupMenu2: TcxGridPopupMenu;
    DS_Transer: TDataSource;
    Q_Transfer: TZQuery;
    cxGridPopupMenu3: TcxGridPopupMenu;
    DS_Cash: TDataSource;
    Q_Cash: TZQuery;
    GRID_TRANSFER: TcxGrid;
    TRANSFER: TcxGridDBBandedTableView;
    GRID_TRANSFERLevel1: TcxGridLevel;
    GRID_CASH: TcxGrid;
    CASH: TcxGridDBBandedTableView;
    GRID_CASHLevel1: TcxGridLevel;
    QImportXLS1: TQImport3XLS;
    QI1: TZQuery;
    QImport: TQImport3Xlsx;
    N1Import1: TMenuItem;
    N1InsertJoin1: TMenuItem;
    N3InsertStruktur1: TMenuItem;
    N4InsertSalary1: TMenuItem;
    N5InsertTK1: TMenuItem;
    N6InsertKS1: TMenuItem;
    N7InsertLoan1: TMenuItem;
    N8InsertRapel1: TMenuItem;
    procedure SettingFont;
    procedure SettingQuery;
    procedure ValidasiControl;
    procedure ReloadClick(syarat:string=' (0=0) ');
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
    procedure newRecordMaster;
    procedure beforePostMaster;
    procedure afterPostMaster;
    procedure beforeEditMaster;
    procedure beforeDeleteMaster;
    procedure afterDeleteMaster;
    procedure afterCancelMaster;

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure actDBGExecute(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N1Import1Click(Sender: TObject);
    procedure N1InsertJoin1Click(Sender: TObject);

    //procedure processMaster(namatabel, dts0, dts1, dts2:string);
    function processMaster(namatabel, dts0, dts1, dts2, mastertabel, kolom:string) : boolean;
    procedure N3InsertStruktur1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmImportALL: TFrmImportALL;
  isNowEditDate, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  tgltransfer, ExcelName : string;

implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport, Unit2;
//form close, form create
procedure TFrmImportALL.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmImportALL.cekAllEditModule(idm:integer);
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
procedure TFrmImportALL.isiALLTableKolom;
var
  idm : integer;
  qk : tzquery;
begin
  {idm := strtoint(txtid.Text);
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
  qk.Free; }
  isiTableKolom('i_join', master);
end;
procedure TFrmImportALL.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
    //isiALLTableKolom;
  isiTableKolomFromGrid(tablename[strtoint(txtid.Text)], master);
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
    //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmImportALL.FormCreate(Sender: TObject);
begin
  isDebug := true;
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
  PageControl.ActivePageIndex := 0;
end;
procedure TFrmImportALL.SettingQuery;
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
  //q_transfer.Query(getQuery('35', true, startdate, enddate, ' (tipe=''Transfer'' ) '));
  //q_cash.Query(getQuery('35', true, startdate, enddate, ' (tipe=''Cash'' ) '));

  setColumnWidth(txtid.Text, q_master, master, true);

  {setColumnWidth('35', q_transfer, transfer, false);
  setColumnWidth('35', q_cash, cash, false);

  transfer.Columns[0].Visible := false;
  transfer.Columns[1].Visible := false;
  transfer.Columns[2].Visible := false;
  transfer.Columns[3].Visible := false;

  transfer.Columns[13].Visible := false;
  transfer.Columns[14].Visible := false;
  transfer.Columns[15].Visible := false;
  transfer.Columns[16].Visible := false;

  transfer.Columns[17].Visible := false;
  transfer.Columns[18].Visible := false;
  transfer.Columns[19].Visible := false;
  transfer.Columns[20].Visible := false;
  transfer.Columns[21].Visible := false;
  transfer.Columns[22].Visible := false;
  transfer.Columns[23].Visible := false;

  cash.Columns[0].Visible := false;
  cash.Columns[1].Visible := false;
  cash.Columns[2].Visible := false;
  cash.Columns[3].Visible := false;}



  //StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmImportALL.ReloadClick(syarat:string=' (0=0) ');
var
  idm : integer;
  //qm : tzquery;
begin
  PageControl.ActivePageIndex := 0;
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate, syarat);
  SQLGrid[idm]      := Replace(SQLGrid[idm], 'limit 0','');


  q_master.Query(SQLGrid[idm]);
  //q_transfer.Query(getQuery('35', true, startdate, enddate, ' ' + syarat + ' and (tipe=''Transfer'' ) '));
  //q_cash.Query(getQuery('35', true, startdate, enddate, ' ' + syarat + ' and (tipe=''Cash'' ) '));
  q_master.Refresh;

  {qm := createquery;
  qm.Query(SQLGrid[idm]);
  if qm.RecordCount > 0 then
  begin
    CreateSummary;
    q_master.Refresh;
  end else
  begin
    q_master.Query(Replace(q_master.SQL.Text, 'limit 0','')+' limit 0');
    q_master.Refresh;
    MsgError('No Data Found');
  end;
  qm.Free;}

  PageControl.ActivePageIndex := 0;
  grid_master.SetFocus;
end;
procedure TFrmImportALL.SettingFont;
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
procedure TFrmImportALL.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);
  SetInsertTable(master, False);
  SetEditTable(master, False);
  SetDeleteTable(master, true);

  SetInsertTable(transfer, False);
  SetEditTable(transfer, False);
  SetDeleteTable(transfer, true);

  SetInsertTable(cash, False);
  SetEditTable(cash, False);
  SetDeleteTable(cash, true);

  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);
  readonlyAllColumn(master);
  master.NavigatorButtons.Cancel.Visible  := False;
  master.NavigatorButtons.Post.Visible    := False;

  transfer.NavigatorButtons.Cancel.Visible  := False;
  transfer.NavigatorButtons.Post.Visible    := False;

  cash.NavigatorButtons.Cancel.Visible  := False;
  cash.NavigatorButtons.Post.Visible    := False;
  //ReadOnlyDataset(master);
end;
procedure TFrmImportALL.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmImportALL.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmImportALL.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmImportALL.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmImportALL.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmImportALL.MenuItem1Click(Sender: TObject);
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



procedure TFrmImportALL.OneMonth1Click(Sender: TObject);
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

procedure TFrmImportALL.NextMonth1Click(Sender: TObject);
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
procedure TFrmImportALL.PrevMonth1Click(Sender: TObject);
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
procedure TFrmImportALL.OneYear1Click(Sender: TObject);
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
procedure TFrmImportALL.PopupMenuPopup(Sender: TObject);
var
  mn : string;
begin
  mn := getQValueString('select name from s_module where id_module='''+inttostr(getFocusQuery.Tag)+''' ');
  ppAdd.Visible    := False;
  ppEdit.Visible   := False;
  ppDelete.Visible := False;
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
procedure TFrmImportALL.OneDay1Click(Sender: TObject);
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
procedure TFrmImportALL.oday1Click(Sender: TObject);
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
procedure TFrmImportALL.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmImportALL.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmImportALL.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmImportALL.getFocusTableName : String;
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
function TFrmImportALL.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmImportALL.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmImportALL.AutoActiveQuery;
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
procedure TFrmImportALL.AutoRefreshQuery;
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
function TFrmImportALL.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmImportALL.ImportFromExcel1Click(Sender: TObject);
begin
  MsgError('This Module Can''t be Imported');
end;

function TFrmImportALL.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmImportALL.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmImportALL.actLookupExecute(Sender: TObject);
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
procedure TFrmImportALL.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmImportALL.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmImportALL.actDBGExecute(Sender: TObject);
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

procedure TFrmImportALL.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmImportALL.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmImportALL.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmImportALL.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmImportALL.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmImportALL.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmImportALL.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmImportALL.ppFreezeClick(Sender: TObject);
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
procedure TFrmImportALL.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmImportALL.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmImportALL.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmImportALL.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmImportALL.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmImportALL.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmImportALL.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmImportALL.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmImportALL.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmImportALL.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmImportALL.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmImportALL.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmImportALL.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmImportALL.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmImportALL.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmImportALL.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmImportALL.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmImportALL.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmImportALL.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmImportALL.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmImportALL.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmImportALL.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmImportALL.newRecordMaster;
begin
  AutoRefreshQuery;
end;
procedure TFrmImportALL.beforePostMaster;
begin
  //
end;
procedure TFrmImportALL.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmImportALL.beforeEditMaster;
begin
  //
end;
procedure TFrmImportALL.beforeDeleteMaster;
begin
  //
end;
procedure TFrmImportALL.afterDeleteMaster;
begin
  //
end;
procedure TFrmImportALL.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmImportALL.N1Import1Click(Sender: TObject);
var
  qi : tzquery;
begin
  ShowProgressbar;
  qi := createquery;
  //qi.Query('select * from s_sheet where sheet_id in (16, 17, 18, 19, 20, 21, 22) ');
  qi.Query('select * from s_sheet where id_module=85');
  if lookupQuery('Choose Import', qi, 800, true) = false then
  begin
    qi.Free;
    exit;
  end;

  qi.First;
  while not qi.Eof do
  begin
    SetProgressbarDefault(qi);
    ImportExcelDirect(qi.getFieldString('sheet_id'), 'D:\import.xlsx');
    qi.Next;
  end;
  qi.Free;
  HideProgressbar;
  msgok('Finished');
end;

procedure TFrmImportALL.N1InsertJoin1Click(Sender: TObject);
var
  qx : tzquery;
  sql : string;
  dt0, dt1, dt2 : tdate;
  dts0, dts1, dts2 : string;
  y,m,d:word;

begin
  dt0  := startdate;
  DecodeDate(startdate, y, m, d);
  dt0  := EncodeDate(y, m, 1);
  dt2  := EncodeDate(y, m, 20);
  dt1  := addMonths(dt2, -1);
  DecodeDate(dt1, y, m, d);
  dt1  := EncodeDate(y, m, 20);

  dts0 := date2sql(dt0);
  dts1 := date2sql(dt1);
  dts2 := date2sql(dt2);

  qx   := createquery;

  msgok('Mulai Cek');
  // cek resign yg ga ada di employee aktif
  sql  := 'select nip, name from i_join where '+es+
          'month(tdate)=month('''+dts0+''') and '+es+
          'year(tdate)=year('''+dts0+''') and tipe=''resign'' and isprocess=0 '+es+
          'and nip not in ('+es+
          '  select nip from m_employee where '+es+
          '  ( joindate <='''+dts2+''' and '+es+
          '    ('+es+
          '       isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate > '''+dts1+''' '+es+
          '    ) and level_id in (select level_id from m_level where level=''Non Manager'' ) '+es+
          '    and idtype<>''xx'' '+es+
          '  ) and  (1=1)  and  (0=0) '+es+
          ')';
  qx.Query(sql);
  if qx.RecordCount > 0 then
  begin
    if LookupQuery('cek resign yg ga ada di employee aktif, Choose=Lanjut, Cancel=Exit', qx, 800, true) = false then
    begin
      qx.Free;
      exit;
    end;
  end;

  { -- cek join, joinresign yg udh ada di employee aktif }
  sql  := 'select nip, name from i_join where '+es+
          'month(tdate)=month('''+dts0+''') and tipe in (''joinresign'',''join'') and '+es+
          'year(tdate)=year('''+dts0+''') and isprocess=0 '+es+
          'and nip in ('+es+
          '  select nip from m_employee where '+es+
          '  ( joindate <='''+dts2+''' and '+es+
          '    ('+es+
          '       isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate > '''+dts1+''' '+es+
          '    ) and level_id in (select level_id from m_level where level=''Non Manager'' ) '+es+
          '    and idtype<>''xx'' '+es+
          '  ) and  (1=1)  and  (0=0) '+es+
          ')';
  qx.Query(sql);
  if qx.RecordCount > 0 then
  begin
    if LookupQuery('cek join, joinresign yg udh ada di employee aktif, Choose=Lanjut, Cancel=Exit', qx, 800, true) = false then
    begin
      qx.Free;
      exit;
    end;
  end;

  { -- cek nama resign beda apa ga }
  sql  := 'select i.nip, i.name '+es+
          'from i_join i '+es+
          'left join m_employee e on i.nip=e.nip '+es+
          'where month(i.tdate)=month('''+dts0+''') and '+es+
          'year(i.tdate)=year('''+dts0+''') and i.tipe=''resign''  '+es+
          'and i.isprocess=0 and i.name<>e.name ';
  qx.Query(sql);
  if qx.RecordCount > 0 then
  begin
    if LookupQuery('cek nama resign beda apa ga, Choose=Lanjut, Cancel=Exit', qx, 800, true) = false then
    begin
      qx.Free;
      exit;
    end;
  end;

  { -- cek employee yg mau diinsert }
  sql  := 'select * from m_employee where nip in ('+es+
          '  select i.nip from i_join i where month(i.tdate)=month('''+dts0+''') and '+es+
          '  year(i.tdate)=year('''+dts0+''') and i.tipe in (''join'', ''joinresign'') '+es+
          '  and i.isprocess=0 '+es+
          ')';
  qx.Query(sql);
  if qx.RecordCount > 0 then
  begin
    if LookupQuery('cek employee yg mau diinsert, Choose=Lanjut, Cancel=Exit', qx, 800, true) = false then
    begin
      qx.Free;
      exit;
    end;
  end;

  msgok('Mulai Process Master');
  //namatabel, dts0, dts1, dts2, mastertabel, kolom
  if processMaster('i_join', dts0, dts1, dts2, 'm_division', 'division_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_join', dts0, dts1, dts2, 'm_department', 'department_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_join', dts0, dts1, dts2, 'm_workarea', 'workarea_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_join', dts0, dts1, dts2, 'm_position', 'position_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_join', dts0, dts1, dts2, 'm_level', 'level_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_join', dts0, dts1, dts2, 'm_employeestatus', 'employeestatus_id') = false then
  begin
    qx.free;
    exit;
  end;

  if confirm('Ingin Lanjut Import Join?' ) <> 'YES' then
  begin
    qx.Free;
    exit;
  end;

  msgok('Mulai Insert Join, Joinresign');
  sql  := 'insert into m_employee (company_id, worklength, jamsostek_id, ptkp, '+es+
          'taxtype, taxirregular, taxfinal, status, useradded, dateadded, '+es+
          'nip, name, division_id, department_id, workarea_id, position_id, level_id, '+es+
          'employeestatus_id, joindate, bankaccountnumber, bankaccountname) '+es+
          'select '+es+
          ' ''1'' as company_id, ''0'' as worklength, ''4'' as jamsostek_id, '+es+
          ' ''TK0'' as ptkp, ''2'' as taxtype, ''2'' as taxirregular, ''2'' as taxfinal, '+es+
          ' ''Active'' as status, ''admin'' as useradded, '+es+
          ' '''+formatdatetime('yyyy-MM-dd HH:mm:ss', now)+''' as dateadded, '+es+
          ' i.nip, i.name, d.division_id, t.department_id, w.workarea_id, p.position_id, '+es+
          ' l.level_id, s.employeestatus_id, i.joindate, '+es+
          ' i.bankaccountnumber, i.bankaccountname '+es+
          'from i_join i '+es+
          'left join m_division d on i.division_id=d.name '+es+
          'left join m_department t on i.department_id=t.name '+es+
          'left join m_workarea w on i.workarea_id=w.name '+es+
          'left join (select position_id, name from m_position group by name) p on i.position_id=p.name '+es+
          'left join m_level l on i.level_id=l.name '+es+
          'left join m_employeestatus s on i.employeestatus_id=s.name '+es+
          'where month(i.tdate)=month('''+dts0+''') and '+es+
          'year(i.tdate)=year('''+dts0+''') and i.tipe in (''join'', ''joinresign'') '+es+
          'and i.isprocess=0 '+es+
          'order by i.nip';
  ExecuteSQL(sql);

  msgok('Mulai Update Rsign, Joinresign');
  sql  := 'update m_employee a, ('+es+
          '  select * from i_join i where month(i.tdate)=month('''+dts0+''') and '+es+
          '  year(i.tdate)=year('''+dts0+''') and i.tipe in (''resign'', ''joinresign'') '+es+
          '  and i.isprocess=0 '+es+
          ') b '+es+
          'set a.idtype=b.idtype, a.resigndate=b.resigndate, '+es+
          'a.resigntype_id=b.resigntype_id, a.resign_reason=b.resign_reason '+es+
          'where a.nip in ( '+es+
          '  select nip from i_join i where month(i.tdate)=month('''+dts0+''') and '+es+
          '  year(i.tdate)=year('''+dts0+''') and i.tipe in (''resign'', ''joinresign'') '+es+
          ') '+es+
          'and a.nip=b.nip';
  ExecuteSQL(sql);

  sql  := 'update i_join i set isprocess=1 where '+es+
          'month(i.tdate)=month('''+dts0+''') and '+es+
          'year(i.tdate)=year('''+dts0+''') and i.isprocess=0';
  ExecuteSQL(sql);
  qx.Free;
  msgok('Selesai Import Join');
end;

procedure TFrmImportALL.N3InsertStruktur1Click(Sender: TObject);
var
  qx : tzquery;
  sql : string;
  dt0, dt1, dt2 : tdate;
  dts0, dts1, dts2 : string;
  y,m,d:word;
  procedure tesx(namatabel, kolom:string);
  begin
    ExecuteSQL('update m_employee e, '+es+
               '(	select e.nip, c.name as name1, b.'+kolom+' as name, d.'+kolom+' as idd '+es+
               '  from m_employee e '+es+
               '  left join '+namatabel+' c on e.'+kolom+'=c.'+kolom+' '+es+
               '  left join i_struktur b on e.nip=b.nip '+es+
               '  left join '+namatabel+' d on b.'+kolom+'=d.name '+es+
               '  where c.name<>b.'+kolom+' '+es+
               ') b '+es+
               'set e.'+kolom+'=b.idd '+es+
               'where e.nip=b.nip');
  end;
begin
  dt0  := startdate;
  DecodeDate(startdate, y, m, d);
  dt0  := EncodeDate(y, m, 1);
  dt2  := EncodeDate(y, m, 20);
  dt1  := addMonths(dt2, -1);
  DecodeDate(dt1, y, m, d);
  dt1  := EncodeDate(y, m, 20);

  dts0 := date2sql(dt0);
  dts1 := date2sql(dt1);
  dts2 := date2sql(dt2);
  qx := createquery;
  if processMaster('i_struktur', dts0, dts1, dts2, 'm_division', 'division_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_struktur', dts0, dts1, dts2, 'm_department', 'department_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_struktur', dts0, dts1, dts2, 'm_workarea', 'workarea_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_struktur', dts0, dts1, dts2, 'm_position', 'position_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_struktur', dts0, dts1, dts2, 'm_level', 'level_id') = false then
  begin
    qx.free;
    exit;
  end;

  if processMaster('i_struktur', dts0, dts1, dts2, 'm_employeestatus', 'employeestatus_id') = false then
  begin
    qx.free;
    exit;
  end;

  if confirm('Ingin Lanjut Import Join?' ) <> 'YES' then
  begin
    qx.Free;
    exit;
  end;

  tesx('m_division', 'division_id');
  tesx('m_department', 'department_id');
  tesx('m_workarea', 'workarea_id');
  tesx('m_position', 'position_id');
  tesx('m_level', 'level_id');
  tesx('m_employeestatus', 'employeestatus_id');

  qx.Free;
  msgok('Selesai Import Struktur');
end;

function TFrmImportALL.processMaster(namatabel, dts0, dts1, dts2, mastertabel, kolom:string) : boolean;
var
  qm : tzquery;
  sql, sy : string;
  hasil : boolean;
begin
  if namatabel='i_join' then
  begin
    sy := 'i.tipe in (''join'', ''joinresign'')';
  end else
  begin
    sy := '(0=0)';
  end;
    qm    := createquery;
    hasil := true;
    sql   := 'select trim(i.'+kolom+') as name '+es+
             'from '+namatabel+' i where month(i.tdate)=month('''+dts0+''') and '+es+
             'year(i.tdate)=year('''+dts0+''') and '+sy+' '+es+
             'and i.isprocess=0 and trim(i.'+kolom+') not in ( select trim(name) from '+mastertabel+' ) '+es+
             'group by i.'+kolom+'';
    qm.Query(sql);
    if qm.RecordCount > 0 then
    begin
      pesan(sql);
      if LookupQuery('Process '+mastertabel+', Choose=Insert, Cancel=Not Insert, EXIT', qm, 800, true, '', 'm_position') then
      begin
        sql := 'insert into '+mastertabel+' (name) '+es+
               'select trim(i.'+kolom+') '+es+
               'from '+namatabel+' i where month(i.tdate)=month('''+dts0+''') and '+es+
               'year(i.tdate)=year('''+dts0+''') and '+sy+' '+es+
               'and i.isprocess=0 and trim(i.'+kolom+') not in ( select trim(name) from '+mastertabel+' ) '+es+
               'group by i.'+kolom+'';
        //ExecuteSQL(sql);
      end else
      begin
        hasil := false;
      end;
    end;
  result := hasil;
  qm.Free;
end;
end.
