unit UTransferBank;

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
  TFrmTransferBank = class(TForm)
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
    DS_Employee: TDataSource;
    Q_Employee: TZQuery;
    N1CreateTHR1: TMenuItem;
    actDBG: TAction;
    ApplicationEvents1: TApplicationEvents;
    MASTERtransferbank_id: TcxGridDBBandedColumn;
    MASTERpayroll_id: TcxGridDBBandedColumn;
    MASTERemployee_id: TcxGridDBBandedColumn;
    MASTERbankaccountnumber: TcxGridDBBandedColumn;
    MASTERtakehomepay: TcxGridDBBandedColumn;
    MASTERnip: TcxGridDBBandedColumn;
    MASTERbankaccountname: TcxGridDBBandedColumn;
    MASTERdepartment_id: TcxGridDBBandedColumn;
    MASTERtdate: TcxGridDBBandedColumn;
    MASTERdescription: TcxGridDBBandedColumn;
    MASTERbank_id: TcxGridDBBandedColumn;
    MASTERbankbranch: TcxGridDBBandedColumn;
    MASTERcompany_id: TcxGridDBBandedColumn;
    MASTERdivision_id: TcxGridDBBandedColumn;
    MASTERworkarea_id: TcxGridDBBandedColumn;
    MASTERposition_id: TcxGridDBBandedColumn;
    MASTERlevel_id: TcxGridDBBandedColumn;
    MASTERemployeestatus_id: TcxGridDBBandedColumn;
    MASTERuseradded: TcxGridDBBandedColumn;
    MASTERdateadded: TcxGridDBBandedColumn;
    MASTERuseredited: TcxGridDBBandedColumn;
    MASTERdateedited: TcxGridDBBandedColumn;
    MASTERtdate2: TcxGridDBBandedColumn;
    MASTERtipe: TcxGridDBBandedColumn;
    MASTERtakehomepay2: TcxGridDBBandedColumn;
    MASTERt100000: TcxGridDBBandedColumn;
    MASTERt50000: TcxGridDBBandedColumn;
    MASTERt20000: TcxGridDBBandedColumn;
    MASTERt10000: TcxGridDBBandedColumn;
    MASTERt5000: TcxGridDBBandedColumn;
    MASTERt2000: TcxGridDBBandedColumn;
    MASTERt1000: TcxGridDBBandedColumn;
    MASTERt500: TcxGridDBBandedColumn;
    MASTERt200: TcxGridDBBandedColumn;
    MASTERt100: TcxGridDBBandedColumn;
    MASTERdeptname: TcxGridDBBandedColumn;
    MASTERempname: TcxGridDBBandedColumn;
    N2CreateCSVTransfer1: TMenuItem;
    N3CreateTransferBankManager1: TMenuItem;
    N4CreateCSVManager1: TMenuItem;
    procedure SettingFont;
    procedure SettingQuery;
    procedure ValidasiControl;
    procedure ReloadClick;
    procedure CreateTransfer(levelTipe:string);
    procedure CreateCSV(levelTipe:string);
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
    procedure actDBGExecute(Sender: TObject);
    procedure CreateTransferBank;
    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N2CreateCSVTransfer1Click(Sender: TObject);
    procedure N3CreateTransferBankManager1Click(Sender: TObject);
    procedure N4CreateCSVManager1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmTransferBank: TFrmTransferBank;
  isNowEditDate, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  createManager : boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport, Unit2;
//form close, form create
procedure TFrmTransferBank.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmTransferBank.cekAllEditModule(idm:integer);
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
procedure TFrmTransferBank.isiALLTableKolom;
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
procedure TFrmTransferBank.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmTransferBank.FormCreate(Sender: TObject);
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
end;
procedure TFrmTransferBank.CreateTransferBank;
var
  qp, qs : tzquery;
  sy : string;
begin
  sy := getQValueString('select value from s_setting where name =''filtertransfer'' ');
  qp := createquery;
  qs := createquery;
  Qp.Query('select * from t_payroll where '+getsecurity(txtid.Text)+' '+es+
             'and tdate>='''+date2sql(startdate)+''' and '+es+
             'tdate<='''+date2sql(enddate)+''' and '+sy+' '+es+
             'order by nip');
  {and bank_id=1 and '+es+
             'bankaccountnumber <> '''' and isnull(bankaccountnumber)=false}
  if qp.RecordCount > 0 then ShowProgressbar;
  qp.First;
  //lookupquery('tes', qp, 800, true);
  while not qp.Eof do
  begin
    SetProgressbarDefault(qp);
    qs.Query('select * from t_transferbank where '+gets('employee_id', qp)+' '+es+
             ' and month(tdate)='''+qp.getMonthSQL('tdate')+''' and '+es+
             ' year(tdate)='''+qp.getYearSQL('tdate')+''' ' );
    if qs.RecordCount = 0 then
    begin
      qs.Append;
      isiKolomUser(true, qs);
    end else
    begin
      qs.Edit;
      isiKolomUser(false, qs);
    end;
    qs.copyData(qp);
    qs.setfield('description', 'Payroll '+formatdatetime('mmmm yy', qp.getFieldDateTime('tdate')));
    qs.Post;
    qp.Next;
  end;
  qp.Free;
  qs.Free;
  HideProgressbar;
end;

procedure TFrmTransferBank.SettingQuery;
var
  idd, idm : integer;
  qd  : tzquery;
  namagrid : string;
begin
  idm               := strtoint(txtid.Text);
  master.Tag        := strtoint(txtid.Text);
  q_master.Tag      := strtoint(txtid.Text);
  TableName[idm]    := getTable(txtid.Text);
  CreateTransferBank;
  SQLGrid[idm]      := getQuery(txtid.Text, true, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  setColumnWidth(txtid.Text, q_master, master, false);
  //StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmTransferBank.ReloadClick;
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  //CreateTransferBank;
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
  grid_master.SetFocus;
end;
procedure TFrmTransferBank.SettingFont;
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
procedure TFrmTransferBank.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, False);
  SetEditTable(master, False);
  SetDeleteTable(master, cekValidasi('`delete`', mn));
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);
  readonlyAllColumn(master);
  master.NavigatorButtons.Cancel.Visible  := False;
  master.NavigatorButtons.Post.Visible    := False;
end;
procedure TFrmTransferBank.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmTransferBank.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTransferBank.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmTransferBank.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTransferBank.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmTransferBank.MenuItem1Click(Sender: TObject);
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
procedure TFrmTransferBank.OneMonth1Click(Sender: TObject);
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

procedure TFrmTransferBank.NextMonth1Click(Sender: TObject);
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
procedure TFrmTransferBank.PrevMonth1Click(Sender: TObject);
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
procedure TFrmTransferBank.OneYear1Click(Sender: TObject);
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
procedure TFrmTransferBank.PopupMenuPopup(Sender: TObject);
var
  mn : string;
begin
  mn := getQValueString('select name from s_module where id_module='''+inttostr(getFocusQuery.Tag)+''' ');
  ppAdd.Visible    := False;
  ppEdit.Visible   := False;
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

procedure TFrmTransferBank.OneDay1Click(Sender: TObject);
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
procedure TFrmTransferBank.oday1Click(Sender: TObject);
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
procedure TFrmTransferBank.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmTransferBank.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmTransferBank.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmTransferBank.getFocusTableName : String;
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
function TFrmTransferBank.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmTransferBank.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmTransferBank.AutoActiveQuery;
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
procedure TFrmTransferBank.AutoRefreshQuery;
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
function TFrmTransferBank.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmTransferBank.ImportFromExcel1Click(Sender: TObject);
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

function TFrmTransferBank.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmTransferBank.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmTransferBank.actLookupExecute(Sender: TObject);
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
procedure TFrmTransferBank.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmTransferBank.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmTransferBank.actDBGExecute(Sender: TObject);
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

procedure TFrmTransferBank.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmTransferBank.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmTransferBank.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmTransferBank.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmTransferBank.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmTransferBank.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmTransferBank.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmTransferBank.ppFreezeClick(Sender: TObject);
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
procedure TFrmTransferBank.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmTransferBank.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmTransferBank.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmTransferBank.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmTransferBank.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmTransferBank.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmTransferBank.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTransferBank.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmTransferBank.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTransferBank.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTransferBank.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmTransferBank.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTransferBank.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmTransferBank.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmTransferBank.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmTransferBank.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmTransferBank.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmTransferBank.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmTransferBank.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmTransferBank.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmTransferBank.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmTransferBank.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmTransferBank.newRecordMaster;
begin
  AutoRefreshQuery;
  //
end;
procedure TFrmTransferBank.beforePostMaster;
begin
  //
end;
procedure TFrmTransferBank.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmTransferBank.beforeEditMaster;
begin
  //
end;
procedure TFrmTransferBank.beforeDeleteMaster;
begin
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmTransferBank.afterDeleteMaster;
begin
  //
end;
procedure TFrmTransferBank.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmTransferBank.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmTransferBank.LookupADEmployee_id;
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
  Q.Query('select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             'order by name ' );
  if LookupQuery('Choose Employee', Q, 800, False, '', 'm_employee') then
  begin
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,unit_id,workarea_id,grade_id,'+
                            'employeestatus_id', Q );
  end;
  Q.free;
end;
procedure TFrmTransferBank.N1CreateTHR1Click(Sender: TObject);
begin
  //
  createTransfer('Non Manager');
end;
procedure TFrmTransferBank.N3CreateTransferBankManager1Click(Sender: TObject);
begin
  createTransfer('Manager');
end;

procedure TFrmTransferBank.CreateTransfer(levelTipe:string);
var
  qp, qt : tzquery;
  dt, kolom, syarat, s, levelID : string;
  databaru : boolean;
  sisa : double;
begin
  dt := ComboForm('Isi Tgl Transfer ( yyyy-MM-dd )', 'tanggal');
  if dt = '' then exit;

  s  := '';
  if InputQuery('Cari Employee Name', 'Search', s) = False then exit;
  qp := createquery;
  kolom := 'payroll_id,employee_id,nip,tdate,bankaccountnumber,bankaccountname,takehomepay,'+
           'department_id,bank_id,bankbranch,company_id,division_id,workarea_id,position_id,level_id,employeestatus_id';
  syarat:= ' (0=0) ';
  {qp.Query('select * from s_lookup where tablename=''t_payroll'' and columnname=''employee_id'' ');
  if qp.RecordCount > 0 then
  begin
    kolom := qp.getFieldString('kolom');
    syarat:= qp.getFieldString('syarat');
  end;}

  if lowercase(leveltipe)= 'manager' then
  begin
    levelID := ' level_id in (10,11) ';
  end else
  begin
    levelID := ' level_id not in (10,11,12,13) ';
  end;
  Qp.Query('select '+kolom+' from t_payroll where '+getSecurity(txtid.Text)+' and '+es+
             'tdate >= '''+date2sql(startdate)+''' and '+levelid+' and '+es+
             'tdate <= '''+date2sql(enddate)+''' and '+syarat+' and '+es+
             'employee_id in ( select employee_id from m_employee where name like ''%'+s+'%'' ) '+es+
             'order by department_id, nip');
  if LookupQuery('Choose Payroll', qp, 800, True, '', 't_payroll' ) = false then
  begin
    qp.Free;
    exit;
  end;

  ShowProgressbar;
  qt := createquery;
  qp.First;
  while not qp.Eof do
  begin
    SetProgressbarDefault(qp);
    qt.Query('select * from t_transferbank where '+gets('employee_id', qp)+' '+es+
            ' and month(tdate)=month('''+qp.date2sql('tdate')+''') and '+es+
            ' year(tdate)=year('''+qp.date2sql('tdate')+''')');
    if qt.RecordCount > 0 then
    begin
      qt.Edit;
      databaru := false;
    end else
    begin
      qt.Append;
      databaru := true;
    end;
    qt.copyData(qp);
    qt.setField('deptname', getQValueString('select name from m_department where '+gets('department_id', qt)+' ') );
    qt.setField('empname', getQValueString('select name from m_employee where '+gets('employee_id', qt)+' ') );
    qt.setField('tdate2', dt);
    isiKolomUser(databaru, qt);
    if qt.getFieldString('bankaccountnumber') = '' then
    begin
      qt.setField('tipe', 'Cash');
    end else
    begin
      qt.setField('tipe', 'Transfer');
      if qt.getFieldDouble('takehomepay') <= 10000 then qt.setField('tipe', 'Cash');
    end;
    qt.SetMultiField('takehomepay2,t100000,t50000,t20000,t10000,t5000,t2000,t1000,t500,t200,t100', '0');
    if LowerCase(qt.getFieldString('tipe')) ='cash' then
    begin
      qt.setField('bankaccountnumber', '');
      qt.setField('takehomepay2',  int(qt.getFieldDouble('takehomepay')/100)*100 );
      sisa := qt.getFieldDouble('takehomepay2');
      if sisa > 0 then
      begin
        qt.setField('t100000', int(sisa/100000) );
        sisa := sisa - (qt.getFieldDouble('t100000')*100000); qt.setField('t50000',  int(sisa/50000) );
        sisa := sisa - (qt.getFieldDouble('t50000')*50000);   qt.setField('t20000',  int(sisa/20000) );
        sisa := sisa - (qt.getFieldDouble('t20000')*20000);   qt.setField('t10000',  int(sisa/10000) );
        sisa := sisa - (qt.getFieldDouble('t10000')*10000);   qt.setField('t5000',   int(sisa/5000) );
        sisa := sisa - (qt.getFieldDouble('t5000')*5000);     qt.setField('t2000',   int(sisa/2000) );
        sisa := sisa - (qt.getFieldDouble('t2000')*2000);     qt.setField('t1000',   int(sisa/1000) );
        sisa := sisa - (qt.getFieldDouble('t1000')*1000);     qt.setField('t500',    int(sisa/500) );
        sisa := sisa - (qt.getFieldDouble('t500')*500);       qt.setField('t200',    int(sisa/200) );
        sisa := sisa - (qt.getFieldDouble('t200')*200);       qt.setField('t100',    int(sisa/100) );
      end;
    end;
    qt.Post;
    qp.Next;
  end;
  qp.Free;
  ReloadClick;
  HideProgressbar;
end;
procedure TFrmTransferBank.N2CreateCSVTransfer1Click(Sender: TObject);
begin
  //
  CreateCSV('Non Manager');
end;
procedure TFrmTransferBank.N4CreateCSVManager1Click(Sender: TObject);
begin
  CreateCSV('Manager');
end;


procedure TFrmTransferBank.CreateCSV(levelTipe:string);
var
  nama, s, fn, levelid : string;
  ts : tstringlist;
  qp : tzquery;
begin
  ShowProgressbar;
  startdate := BtnStartdate.Date;
  enddate   := BtnEnddate.Date;
  //sec:= getSecurity(txtid.Text, ' * ', 'p.');

  if lowercase(leveltipe)= 'manager' then
  begin
    levelID := ' level_id in (10,11) ';
  end else
  begin
    levelID := ' level_id not in (10,11,12,13) ';
  end;
  qp := createquery;
  qp.Query('select payroll_id, bankaccountnumber, takehomepay, nip, empname, deptname, tdate2 '+es+
           'from t_transferbank '+es+
           'where '+levelid+' and tdate>='''+date2sql(startdate)+''' and '+es+
           'tdate<='''+date2sql(enddate)+''' and tipe=''Transfer'' and department_id<>20 '+es+
           'order by tipe desc, deptname, empname');
  if qp.RecordCount = 0 then
  begin
    qp.Free;
    HideProgressbar;
    MsgError('No Data');
    exit;
  end;
  {if LookupQuery('Choose Payroll', qp, 800, true) = False then
  begin
    MsgError('Cancel');
    qp.Free;
    exit;
  end;
  fn  := FileSaveDialog('CSV Files (*.csv)|*.csv');
  if fn = '' then exit;}
  fn  := 'D:\' + formatdatetime('yyyyMM', enddate) + '_Kwarto.csv';
  ts  := tstringlist.Create;
  ts.Clear;
  s   := 'Acc. No.,Trans. Amount,emp.Number,emp.Name,Dept,Trans. Date';
  ts.Add(s);
  qp.First;
  qp.DisableControls;
  while not qp.Eof do
  begin
    nama := qp.getFieldString('empname');
    SetProgressbar('Employee : '+qp.getFieldString('nip')+
                   ' '+nama+' '+
                   ', '+inttostr(qp.RecNo)+'/'+inttostr(qp.recordcount),
                   (qp.recno * 100) div qp.recordcount);
    s := '';
    s := s + qp.getCSV('bankaccountnumber') + ',';
    s := s + qp.getCSV('takehomepay')       + ',';
    s := s + qp.getCSV('nip')               + ',';
    s := s + qp.getCSV('empname')           + ',';
    s := s + qp.getCSV('deptname')          + ',';
    s := s + formatdatetime('MM/dd/yyyy', qp.getField('tdate2'));
    ts.Add(s);
    qp.Next;
  end;
  if ts.Count > 1 then ts.SaveToFile(fn);
  qp.EnableControls;

  //////////////////////
  qp.Query('select payroll_id, bankaccountnumber, takehomepay, nip, empname, deptname, tdate2 '+es+
           'from t_transferbank '+es+
           'where tdate>='''+date2sql(startdate)+''' and '+es+
           'tdate<='''+date2sql(enddate)+''' and tipe=''Transfer'' and department_id=20 '+es+
           'order by tipe desc, division_id, deptname, empname');
  if qp.RecordCount = 0 then
  begin
    qp.Free;
    HideProgressbar;
    MsgError('No Data');
    exit;
  end;
  fn  := 'D:\' + formatdatetime('yyyyMM', enddate) + '_Noodletown.csv';
  ts  := tstringlist.Create;
  ts.Clear;
  s   := 'Acc. No.,Trans. Amount,emp.Number,emp.Name,Dept,Trans. Date';
  ts.Add(s);
  qp.First;
  qp.DisableControls;
  while not qp.Eof do
  begin
    nama := qp.getFieldString('empname');
    SetProgressbar('Employee : '+qp.getFieldString('nip')+
                   ' '+nama+' '+
                   ', '+inttostr(qp.RecNo)+'/'+inttostr(qp.recordcount),
                   (qp.recno * 100) div qp.recordcount);
    s := '';
    s := s + qp.getCSV('bankaccountnumber') + ',';
    s := s + qp.getCSV('takehomepay')       + ',';
    s := s + qp.getCSV('nip')               + ',';
    s := s + qp.getCSV('empname')           + ',';
    s := s + qp.getCSV('deptname')          + ',';
    s := s + formatdatetime('MM/dd/yyyy', qp.getField('tdate2'));
    ts.Add(s);
    qp.Next;
  end;
  if ts.Count > 1 then ts.SaveToFile(fn);
  qp.EnableControls;

  ts.Free;
  qp.Free;
  HideProgressbar;
  MsgOK('Finished');
end;
end.
