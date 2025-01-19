unit UTunjangan;

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
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, cxSplitter, zconnection,
  Vcl.AppEvnts, dxSkinMetropolis, dxSkinMetropolisDark,
  dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray, dxSkinOffice2016Colorful,
  dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light, dxBarBuiltInMenu,
  cxDataControllerConditionalFormattingRulesManagerDialog;

type
  TFrmTunjangan = class(TForm)
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
    Q_Laporan: TZQuery;
    DS_Laporan: TDataSource;
    frxDBDataset1: TfrxDBDataset;
    FR_Report: TfrxReport;
    Timer1: TTimer;
    ApplicationEvents1: TApplicationEvents;
    N1ProsesTunjangan1: TMenuItem;
    isdebug1: TMenuItem;
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
    procedure newRecordMaster;
    procedure beforePostMaster;
    procedure afterPostMaster;
    procedure beforeEditMaster;
    procedure beforeDeleteMaster;
    procedure afterDeleteMaster;
    procedure afterCancelMaster;

    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);

    procedure QDAfterPost(DataSet: TDataSet);
    procedure QDBeforeEdit(DataSet: TDataSet);
    procedure N1ProsesTunjangan1Click(Sender: TObject);

    procedure processPayroll;
    procedure createTunjangan(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
    procedure createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
    procedure HapusPayrollExist(eid : string; payrolldate:tdatetime);

    procedure SetSalaryNonAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll: tzQuery; tipe:string='ST');
    procedure isdebug1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmTunjangan: TFrmTunjangan;
  Auto, DisableChangeDate, isNowEditDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmTunjangan.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmTunjangan.cekAllEditModule(idm:integer);
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
procedure TFrmTunjangan.isdebug1Click(Sender: TObject);
begin
  if isDebug then
  begin
    isdebug:=False;
    msgok('Debug OFF');
  end else
  begin
    isdebug:=true;
    msgok('Debug ON');
  end;
end;

procedure TFrmTunjangan.isiALLTableKolom;
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
procedure TFrmTunjangan.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmTunjangan.FormCreate(Sender: TObject);
begin
  isDebug := False;
  timer1.Enabled     := False;
  timer1.Interval    := StrToInt(ReadIniFile('server', 'timeoutattendance')) * 60000;//1 menit =60000
  //timer1.Interval    := 20000;
  //isdebug := true;
  txtID.Text         := IDModule;
  txtModuleName.Text := ModuleName;
  lbljudul.Caption   := SentencesCase(txtModuleName.Text);
  self.Caption       := lbljudul.Caption;
  tabmaster.Caption  := SentencesCase(txtModuleName.Text);

  DisableChangeDate  := false;
  BtnStartdate.Date  := ServerDate;
  BtnEnddate.Date    := ServerDate;
  //btnstartdate.Date  := EncodeDate(2015, 3, 1);
  //btnenddate.Date    := EncodeDate(2015, 3, 1);
  startdate          := btnstartdate.Date;
  enddate            := BtnEnddate.Date;

  SettingQuery;
  ValidasiControl;
  SettingFont;
  ShowDateTemplate;
end;
procedure TFrmTunjangan.SettingQuery;
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
  setColumnWidth(txtid.Text, q_master, master, true);
  StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmTunjangan.ReloadClick;
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
procedure TFrmTunjangan.SettingFont;
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
procedure TFrmTunjangan.ValidasiControl;
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

procedure TFrmTunjangan.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmTunjangan.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTunjangan.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmTunjangan.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTunjangan.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmTunjangan.MenuItem1Click(Sender: TObject);
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

procedure TFrmTunjangan.OneMonth1Click(Sender: TObject);
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

procedure TFrmTunjangan.NextMonth1Click(Sender: TObject);
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
procedure TFrmTunjangan.PrevMonth1Click(Sender: TObject);
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
procedure TFrmTunjangan.OneYear1Click(Sender: TObject);
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
procedure TFrmTunjangan.PopupMenuPopup(Sender: TObject);
var
  mn : string;
begin
  mn := getQValueString('select name from s_module where id_module='''+inttostr(getFocusQuery.Tag)+''' ');
  ppAdd.Visible    := cekValidasi('`insert`', mn);
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

procedure TFrmTunjangan.OneDay1Click(Sender: TObject);
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
procedure TFrmTunjangan.oday1Click(Sender: TObject);
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
procedure TFrmTunjangan.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmTunjangan.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmTunjangan.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmTunjangan.getFocusTableName : String;
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
function TFrmTunjangan.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmTunjangan.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmTunjangan.AutoActiveQuery;
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
procedure TFrmTunjangan.AutoRefreshQuery;
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
function TFrmTunjangan.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;

function TFrmTunjangan.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmTunjangan.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmTunjangan.actLookupExecute(Sender: TObject);
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
procedure TFrmTunjangan.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmTunjangan.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmTunjangan.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmTunjangan.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmTunjangan.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmTunjangan.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmTunjangan.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmTunjangan.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmTunjangan.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmTunjangan.ppFreezeClick(Sender: TObject);
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
procedure TFrmTunjangan.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmTunjangan.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmTunjangan.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmTunjangan.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmTunjangan.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmTunjangan.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmTunjangan.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTunjangan.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmTunjangan.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTunjangan.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTunjangan.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmTunjangan.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTunjangan.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmTunjangan.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmTunjangan.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmTunjangan.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmTunjangan.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmTunjangan.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmTunjangan.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmTunjangan.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmTunjangan.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmTunjangan.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmTunjangan.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', now);
end;
procedure TFrmTunjangan.beforePostMaster;
//var
//  q1 : tzquery;
begin
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;

//  q1 := createquery;
//  q1.Query('select shift_id, shiftin, shiftout from m_shift where '+gets('shift_id', q_master)+' ');
//  q1.Free;

  //beforePostAttendance(q_master, isNewRecord[q_master.tag] ,true);
end;
procedure TFrmTunjangan.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmTunjangan.beforeEditMaster;
begin
  //
end;
procedure TFrmTunjangan.beforeDeleteMaster;
var
  sql :string;
begin
  sql := 'select count(*) from t_payroll where '+es+
          '  employee_id='''+q_master.getFieldString('employee_id')+''' and '+es+
          ' month(tdate)= month('''+q_master.date2sql('tdate')+''') and '+es+
          ' year(tdate)=year('''+q_master.date2sql('tdate')+''') ';
//  if getQValueInteger(sql) > 0 then
//  begin
//    MsgError('Payroll Already Exist');
//    abort;
//    exit;
//  end;

  ExecuteSQL('delete from t_tunjangan_detail where '+gets('tun_id', Q_Master)+' ');
end;
procedure TFrmTunjangan.afterDeleteMaster;
begin
  //
end;
procedure TFrmTunjangan.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmTunjangan.N1ProsesTunjangan1Click(Sender: TObject);
begin
  processPayroll;
end;

procedure TFrmTunjangan.QDAfterPost(DataSet: TDataSet);
begin
  isNowEditDate := False;
end;
procedure TFrmTunjangan.QDBeforeEdit(DataSet: TDataSet);
begin
  isNowEditDate := True;
end;

procedure TFrmTunjangan.processPayroll;
var
  emp, qd: tzQuery;
  sdate, edate, payrolldate, dt2, dt : tdatetime;
  kolom, syarat, s, levelID : string;
  //idtype, mg : string;
  y,m,d: word;
  total: integer;
begin
  qd    := createQuery;
  ExecuteSQL('flush tables');
  ExecuteSQL('update m_tunjangandate set tdate = null');
  qd.query('select * from m_tunjangandate');
  qd.AfterCancel := QDAfterPost;
  qd.AfterDelete := QDAfterPost;
  qd.AfterPost   := QDAfterPost;
  qd.BeforeEdit  := QDBeforeEdit;
  qd.OnNewRecord := QDBeforeEdit;
  //dbg('x');
  while not qd.eof do
  begin
    qd.Edit;
    dt := startdate;
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
  //dbg('1');

//  if LowerCase(levelTipe)='mingguan' then
//  begin
//    executeSQL('update m_tunjangandate set tdate='''+date2sql(startdate)+''' where payrollfield=''startdate'' ');
//    executeSQL('update m_tunjangandate set tdate='''+date2sql(enddate)+''' where payrollfield in (''tdate'', ''enddate'') ');
//  end;

  qd.Refresh;
  if LookupQuery('Setting Tgl Tunjangan', qd, 800, true, 'comp_month,comp_date,payrollfield', '', True, True) = false then
  begin
    qd.Free;
    MsgError('CANCEL');
    exit;
  end;
  //dbg('2');
  if isNowEditDate then qd.Post;

  s := '';
  if InputQuery('Cari Nama Karyawan', 'Search', s) = False then
  begin
    qd.Free;
    MsgError('CANCEL');
    exit;
  end;

  emp   := createQuery;
  kolom := '*';
  syarat:= ' (0=0) ';
  emp.Query('select * from s_lookup where tablename=''t_payroll'' and columnname=''employee_id'' ');
  if emp.RecordCount > 0 then
  begin
    kolom := emp.getFieldString('kolom');
    syarat:= emp.getFieldString('syarat');
  end;

  payrolldate := getQValue('select tdate from m_tunjangandate where payrollfield=''enddate'' ');
  sdate       := getQValue('select tdate from m_tunjangandate where payrollfield=''startdate'' ');
  edate       := getQValue('select tdate from m_tunjangandate where payrollfield=''tdate'' ');

//  total := getQValueInteger('select count(*) as total from t_tunjangan '+es+
//              'where '''+date2sql(sdate)+''' between startdate and enddate or '+es+
//              ' '''+date2sql(payrolldate)+''' between startdate and enddate ');
  total := getQValueInteger('select count(*) as total from t_tunjangan '+es+
              'where enddate> '''+formatdatetime('yyyy-MM-dd',edate)+''' ');
  if total > 0 then
  begin
    MsgError('Sudah ada data tunjangan sebelumnya');
    exit;
  end;

  {pesan('select count(*) as total from t_payroll '+es+
              'where month(tdate)= month('''+formatdatetime('yyyy-MM-dd',edate)+''') and '+es+
              'year(tdate)= year('''+formatdatetime('yyyy-MM-dd',edate)+''') ');
  total := getQValueInteger('select count(*) as total from t_payroll '+es+
              'where month(tdate)= month('''+formatdatetime('yyyy-MM-dd',edate)+''') and '+es+
              'year(tdate)= year('''+formatdatetime('yyyy-MM-dd',edate)+''') ');
  if total > 0 then
  begin
    MsgError('Sudah ada data payroll');
    exit;
  end;}

  ExecuteSQL('call autoupdateemployee(''' + date2sql(payrolldate) + ''');');

  emp.Query('select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             ' '+es+
             'and joindate <= '''+date2sql(payrolldate)+''' and '+es+
             ' ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sdate)+''' '+es+
             ' )  '+es+
             'order by name' );
  pesan(emp.SQL.Text);

  if confirm('Pilih Data ?') = 'YES' then
  begin
    if LookupQuery('Pilih Karyawan', emp, 800, True, '', 'm_employee') =False then
    begin
      //dbg('4');
      emp.free;
      qd.Free;
      MsgError('CANCEL');
      exit;
    end;
  end;

  ShowProgressbar;
  emp.First;
  while not emp.eof do
  begin
    setProgressbar('Processing '+emp.getFieldString('nip')+
                   ' '+emp.getFieldString('name')+
                   ', '+FormatDateTime('dd MMM yyyy', payrolldate)+
                   ', '+inttostr(emp.RecNo)+'/'+inttostr(emp.recordcount),
                   (emp.recno * 100) div emp.recordcount);
    if getQValueInteger('select count(*) from t_tunjangan '+es+
                        'where '+gets('employee_id', emp)+' and '+es+
                        'enddate > '''+date2sql(payrolldate)+''' ') = 0 then
    begin
      //createPayroll(payrolldate,qd,emp,'');
      createTunjangan(payrolldate,qd,emp,'');
    end else
    begin
      MsgError('Employee : '+emp.getFieldString('name')+', Sudah ada data tunjangan');
    end;
    emp.next;
  end;
  //dbg('6');
  emp.free;
  qd.Free;

  ReloadClick;
  HideProgressbar;
  msgok('Finished');
end;

procedure TFrmTunjangan.createTunjangan(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
var
  sh, eh: tdatetime;
  sd, ed : tdatetime;
  sdsql, edsql, sql : string;
  shsql, ehsql, tunID, ctp : string;
  qh, qd, qa: tzquery;
  hdr : double;
  c : integer;
begin
  q_date.first;
  while not q_date.eof do
  begin
    if q_date.getFieldString('payrollfield').ToLower='startdate' then sh := q_date.getField('tdate');
    if q_date.getFieldString('payrollfield').ToLower='enddate' then eh := q_date.getField('tdate');
    q_date.next;
  end;

  shsql  := date2sql(sh);
  ehsql  := date2sql(eh);

  qh  := createquery;
  qd  := createquery;
  qa  := createquery;
  qh.Query('select * from t_tunjangan where '+gets('employee_id', q_emp)+' and startdate='''+shsql+''' ');
  if qh.RecordCount > 0 then
  begin
    qh.Edit;
    isiKolomUser(false, qh);
  end else
  begin
    qh.Append;
    isiKolomUser(true, qh);
    qh.SetMultiField('overtimehour,lembur,ekm,ttransport,tshift,trumah,tota,takehomepay', 0);
  end;
  qh.setField('startdate', sh);
  qh.setField('tdate', eh);
  qh.setField('enddate', eh);
  qh.SetMultiFieldQ('employee_id,nip,name,joindate,resigndate,married,harikerja,employeestatus_id,department_id,ctp', q_emp);
  qh.Post;

  hdr := 0;
  qa.Query('select round( 1 * coalesce(sum(m_employee_salary.amount ),0), 0)  as amount '+es+
           'from m_employee_salary '+es+
           'where employee_id = '+qh.getFieldString('employee_id')+' and '+es+
           'tdate <= '''+qh.date2sql('enddate')+''' and active = 1 and salary_id = 405 group by employee_id');
  if qa.RecordCount>0 then
  begin
    hdr := qa.getFieldDouble('amount');
  end;

  tunID := qh.getFieldString('tun_id');
  ctp   := qh.getFieldString('ctp');

  sd := sh;
  while sd < eh do
  begin
    //if ctp = '' then ed := adddays(sd, 6) else ed := adddays(sd, 7);
    if ctp = '1' then ed := adddays(sd, 7) else ed := adddays(sd, 6);

    if ed>= eh then ed := eh;
    sdsql := date2sql(sd);
    edsql := date2sql(ed);

    qd.Query('select * from t_tunjangan_detail where '+gets('tun_id', qh)+' and startdate='''+sdsql+''' ');
    if qd.RecordCount > 0 then
    begin
      qd.Edit;
      isiKolomUser(false, qd);
    end else
    begin
      qd.append;
      isiKolomUser(true, qd);
      qd.SetMultiField('overtimehour,lembur,ekm,ttransport,tshift,trumah,tota,takehomepay', 0);
      qd.SetMultiField('day1,day2,day3,day4,day5,day6,day7,day8', 0);
      qd.SetMultiField('overtimehour1,overtimehour2,overtimehour3,overtimehour4,overtimehour5,overtimehour6,overtimehour7,,overtimehour8', 0);
    end;
    qd.SetMultiFieldQ('tun_id,employee_id,nip,name,joindate,resigndate,married,harikerja,employeestatus_id,department_id', qh);
    qd.setField('startdate', sd);
    qd.setField('tdate', ed);
    qd.setField('enddate', ed);

    qd.setField('day1', dayof(sd) );
    qd.setField('day2', dayof(adddays(sd, 1)) );
    qd.setField('day3', dayof(adddays(sd, 2)) );
    qd.setField('day4', dayof(adddays(sd, 3)) );
    qd.setField('day5', dayof(adddays(sd, 4)) );
    qd.setField('day6', dayof(adddays(sd, 5)) );
    qd.setField('day7', dayof(adddays(sd, 6)) );
    qd.setField('day8', dayof(adddays(sd, 7)) );

    qa.Query('select employee_id, sum(totalotrp) as lembur, sum(tshift) as tshift, sum(ttransport) as ttransport '+es+
             'from t_attendance where '+gets('employee_id', qd)+' and tdate between '''+sdsql+''' and '''+edsql+''' '+es+
             'group by employee_id');
    if qa.RecordCount > 0 then
    begin
      qd.SetMultiFieldQ('employee_id,lembur,tshift,ttransport', qa);
    end;
    qd.setField('trumah', 0);

    qa.Query('select attendance_id, statusattendance_id from t_attendance '+es+
             'where tdate>='''+sdsql+''' and tdate<='''+edsql+''' and '+es+
             'statusattendance_id in (SELECT statusattendance_id FROM m_statusattendance where ekm=1) and '+es+
             'employee_id='''+qd.getfieldstring('employee_id')+''' and lateminutes=0 and permitminutes=0 and earlyoutminutes=0 ');
    c := qa.RecordCount;
    c := qd.getFieldInteger('harikerja');
    qd.setField('ekm', 0);
    if qa.RecordCount >= qd.getFieldInteger('harikerja') then
    begin
      qd.setField('ekm', hdr);
    end;

    qd.setField('total', qd.getFieldDouble('lembur')+qd.getFieldDouble('ttransport')+
                         qd.getFieldDouble('tshift')+qd.getFieldDouble('ekm')+
                         qd.getFieldDouble('trumah') );

    sql := 'SELECT '+es+
           '     ROW_NUMBER() OVER (ORDER BY a.nip, DATE_ADD(''2023-12-08'', INTERVAL n DAY)) as nomor, '+es+
           '     '''+qd.getFieldString('nip')+''' AS nip, '+es+
           '     DATE_ADD('''+sdsql+''', INTERVAL n DAY) AS tdate, '+es+
           '     coalesce(a.overtimehour, 0) as overtimehour, coalesce(a.totalotrp, 0) as totalotrp '+es+
           ' FROM '+es+
           ' ( '+es+
           '     SELECT @row := @row + 1 AS n '+es+
           '     FROM '+es+
           '         (SELECT 0 UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7) t1, '+es+
           '         (SELECT 0 UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7) t2, '+es+
           '         (SELECT @row := -1) r '+es+
           '     WHERE '+es+
           '         @row < DATEDIFF('''+edsql+''', '''+sdsql+''') '+es+
           ' ) '+es+
           ' AS dt '+es+
           ' left join t_attendance a on a.nip='''+qd.getFieldString('nip')+''' and a.tdate=DATE_ADD('''+sdsql+''', INTERVAL n DAY) '+es+
           ' order by a.nip, DATE_ADD('''+sdsql+''', INTERVAL n DAY)';
    qa.Query(sql);
    qa.First;
    while not qa.Eof do
    begin
      qd.setField('overtimehour'+qa.getFieldString('nomor'), qa.getFieldDouble('overtimehour') );
      qa.Next;
    end;

    qd.setField('overtimehour8', 0);
    if ctp='1' then
    begin
      qa.Query('select overtimehour from t_attendance where '+gets('employee_id', qd)+' and '+es+
             'tdate='''+date2sql(adddays(sd,7))+''' ');
      if qa.RecordCount > 0 then qd.setField('overtimehour8', qa.getFieldDouble('overtimehour') );
    end;

    qa.Query('select attendance_id, statusattendance_id from t_attendance '+es+
             'where tdate>='''+date2sql(sd)+''' and tdate<='''+date2sql(ed)+''' and '+es+
             'statusattendance_id in (SELECT `value` FROM `s_setting` where name=''statusekm'') and nip='''+qh.getfieldstring('nip')+''' ');
    c := qa.RecordCount;
    c := qh.getFieldInteger('harikerja');
    if qh.RecordCount >= qh.getFieldInteger('harikerja') then
    begin
      qh.setField('kehadiran', hdr);
    end;

    qd.Post;

    sd := adddays(ed, 1);
  end;

  qh.Edit;
//           'sum(coalesce(overtimehour1, 0)) as overtimehour1, sum(coalesce(overtimehour2, 0)) as overtimehour2, '+es+
//           'sum(coalesce(overtimehour3, 0)) as overtimehour3, sum(coalesce(overtimehour4, 0)) as overtimehour4, '+es+
//           'sum(coalesce(overtimehour5, 0)) as overtimehour5, sum(coalesce(overtimehour6, 0)) as overtimehour6, '+es+
//           'sum(coalesce(overtimehour7, 0)) as overtimehour7, sum(coalesce(overtimehour8, 0)) as overtimehour8 '+es+
  qd.Query('select tun_id, sum(coalesce(lembur, 0)) as lembur, sum(coalesce(ekm, 0)) as ekm, '+es+
           'sum(coalesce(ttransport, 0)) as ttransport, sum(coalesce(tshift, 0)) as tshift, '+es+
           'sum(coalesce(overtimehour1, 0)) + sum(coalesce(overtimehour2, 0)) + '+es+
           'sum(coalesce(overtimehour3, 0)) + sum(coalesce(overtimehour4, 0)) + '+es+
           'sum(coalesce(overtimehour5, 0)) + sum(coalesce(overtimehour6, 0)) + '+es+
           'sum(coalesce(overtimehour7, 0)) + sum(coalesce(overtimehour8, 0)) as overtimehour '+es+
           ' '+es+
           'from t_tunjangan_detail where '+gets('tun_id', qh)+' group by tun_id');
  if qd.RecordCount>0 then
  begin
    qh.SetMultiFieldQ('overtimehour,lembur,ekm,ttransport,tshift', qd);
  end;

  //set trumah
  qa.Query('select * from m_perumahan where married='''+qh.getFieldString('married')+''' '+es+
           'and harikerja='''+qh.getFieldString('harikerja')+''' ');
  if qa.RecordCount > 0 then
  begin
    qh.setField('trumah', qa.getFieldDouble('amount'));
  end;

  //set total & takehomepay
  qh.setField('total', qh.getFieldDouble('lembur')+qh.getFieldDouble('ekm')+
                       qh.getFieldDouble('ttransport')+qh.getFieldDouble('tshift')+qh.getFieldDouble('trumah'));
  qh.setField('takehomepay', qh.getField('total'));
  qh.Post;

  qh.Free;
  qd.Free;
  qa.Free;
end;

procedure TFrmTunjangan.createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
var
  j, k, c : integer;
  qx, qh_payroll : tzquery;
  dt1, dt2 : tdatetime;
  hdr, a, b : double;
begin
  qx := createquery;
  qh_payroll := createQuery;
  qh_payroll.query('select * from t_tunjangan limit 0 ');

  HapusPayrollExist(q_emp.getFieldString('employee_id'), payrolldate);

  qh_payroll.Append;
  q_date.first;
  while not q_date.eof do
  begin
    if qh_payroll.isfieldexist(q_date.getField('payrollfield')) = true then
    begin
      qh_payroll.setField(q_date.getField('payrollfield'), q_date.getField('tdate'));
    end;
    q_date.next;
  end;
  //dbg('set payrolldate');

  //dbg('hapus payroll exist');
  for k := 0 to q_emp.fieldcount - 1 do
  begin
    if qh_payroll.isfieldexist(q_emp.fieldname(k)) = true then
    begin
      qh_payroll.setField(q_emp.fieldname(k), q_emp.getField(q_emp.fieldname(k)));
    end;
  end;

  qh_payroll.setField('takehomepay', qh_payroll.getFieldDouble('lembur') +
    qh_payroll.getFieldDouble('upm') + qh_payroll.getFieldDouble('produksi') + qh_payroll.getFieldDouble('shift') +
    qh_payroll.getFieldDouble('transport') + qh_payroll.getFieldDouble('kehadiran') + qh_payroll.getFieldDouble('perumahan')
  );
  qh_payroll.Post;

  qh_payroll.Edit;
  SetSalaryNonAT(payrolldate,q_date,q_emp, qh_payroll);

  qx.Query('select * from m_perumahan where married='''+qh_payroll.getFieldString('married')+''' '+es+
           'and harikerja='''+qh_payroll.getFieldString('harikerja')+''' ');
  if qx.RecordCount > 0 then
  begin
    qh_payroll.setField('perumahan', qh_payroll.getFieldDouble('perumahan') + qx.getFieldDouble('amount'));
  end;

  if (qh_payroll.date2sql('startdate')>='2023-12-29') and (qh_payroll.date2sql('startdate')<='2024-01-04') then
  begin

  end else
  begin
    qh_payroll.setField('perumahan', 0);
  end;

  hdr := 50000;
  qx.Query('select round( 1 * coalesce(sum(m_employee_salary.amount ),0), 0)  as amount '+es+
           'from m_employee_salary '+es+
           'where employee_id = '+qh_payroll.getFieldString('employee_id')+' and '+es+
           'tdate <= '''+qh_payroll.date2sql('enddate')+''' and active = 1 and salary_id = 405 group by employee_id');
  if qx.RecordCount>0 then
  begin
    hdr := qx.getFieldDouble('amount');
  end;

  dt1 := qh_payroll.getField('startdate');
  dt2 := dt1;
  if date2sql(dt2)>=qh_payroll.date2sql('enddate') then dt2 := qh_payroll.getField('enddate');

  while date2sql(dt2)<>qh_payroll.date2sql('enddate') do
  begin
    dt2 := addDays(dt1, 7);
    if date2sql(dt2)>=qh_payroll.date2sql('enddate') then dt2 := qh_payroll.getField('enddate');


    qx.Query('select attendance_id, statusattendance_id from t_attendance '+es+
             'where tdate>='''+date2sql(dt1)+''' and tdate<='''+date2sql(dt2)+''' and '+es+
             'statusattendance_id in (SELECT `value` FROM `s_setting` where name=''statusekm'') and nip='''+qh_payroll.getfieldstring('nip')+''' ');
    c := qx.RecordCount;
    c := qh_payroll.getFieldInteger('harikerja');
    if qx.RecordCount >= qh_payroll.getFieldInteger('harikerja') then
    begin
      a := qh_payroll.getFieldDouble('kehadiran');
      b := hdr;
      qh_payroll.setField('kehadiran', qh_payroll.getFieldDouble('kehadiran') + hdr);
    end;
    dt1 := addDays(dt2, 1);
  end;

  qh_payroll.setField('takehomepay', qh_payroll.getFieldDouble('lembur') +
    qh_payroll.getFieldDouble('upm') + qh_payroll.getFieldDouble('produksi') + qh_payroll.getFieldDouble('shift') +
    qh_payroll.getFieldDouble('transport') + qh_payroll.getFieldDouble('kehadiran') + qh_payroll.getFieldDouble('perumahan')
  );
  qh_payroll.Post;

  qh_payroll.Free;
  qx.Free;
end;

procedure TFrmTunjangan.HapusPayrollExist(eid : string; payrolldate:tdatetime);
var
  xx : tzquery;
  kol : string;
begin
  kol:= 'tunjangan_id';
  kol:= 'tun_id';
//  xx := createquery;
//  xx.query('select '+kol+' from t_tunjangan where employee_id = '''+eid+''' '+es+
//           'and month(tdate) = month('''+date2sql(payrolldate)+''') '+es+
//           'and year(tdate) = year('''+date2sql(payrolldate)+''') ');
//  if xx.recordcount > 0 then
//  begin
//    ExecuteSQL('delete from t_tunjangan where '+kol+' = '+xx.getQ('tun_id'));
//  end;
//
//  xx.Free;
end;

procedure TFrmTunjangan.SetSalaryNonAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll: tzQuery; tipe:string='ST');
var
  Q, qry : TZQuery;
  sql, hf : string;
  k : integer;
begin
  Q   := createQuery;
  qry := createQuery;
  Q.query('select * from m_salary where acctype=''tunjangan'' and txtlap = '''+tipe+''' order by procorder');
  q.First;
  while not q.Eof do
  begin
    dbg(q.getFieldString('name'));
    sql := q.getFieldString('param');
    hf  := q.getFieldString('payrollheaderfield');
    sql := trim(sql);
    if trim(Sql) <> '' then
    begin
      sql := Replace(sql,'$EMPLOYEE_ID', q_emp.getFieldString('employee_id'));
      sql := Replace(sql,'$SALARY_ID', q.getFieldString('salary_id'));

      q_date.first;
      while not q_date.eof do
      begin
        sql := Replace(sql, '$'+q_date.getFieldString('payrollfield'), q_date.date2sql('tdate'));
        q_date.next;
      end;
      if LowerCase(tipe) = 'st' then
      begin
        //if q.getFieldInteger('salary_id') = 205 then
        //begin
          pesan('name : '+q.getFieldString('name')+es+
                'slipname : '+q.getFieldString('slipname')+es+
                'sql : '+sql);
        //end;
        //dbg('xx1');
        qry.query(sql);
        //dbg(qry.RecordCount);
        //dbg('xx2');
      end else
      begin
        qry.query(sql);
      end;

      if qry.RecordCount > 0 then
      begin
         //dbg('salary : '+q.getFieldString('name'));
         if qry.isfieldexist('amount') then
         begin
           if hf <> '' then
           begin
             qh_payroll.setfield(hf, qh_payroll.getfield(hf) + int(qry.getFieldDouble('amount'))); //disini hilangin koma
           end;
//           qd_payroll.Append;
//           qd_payroll.Setfield('payroll_id', qh_payroll.getField('payroll_id'));
//           qd_payroll.copyData(q);
//           qd_payroll.setfield('amount', qry.getFieldDouble('amount'));
//           qd_payroll.setfield('debugamount', 0);
//           qd_payroll.setfield('diff', 0);
//           qd_payroll.post;
         end;
         for k := 0 to qry.fieldcount - 1 do
         begin
           if uppercase(qry.fieldname(k)) <> 'AMOUNT' then
           begin
             if qh_payroll.isfieldexist(qry.fieldname(k)) = true then
             begin
                qh_payroll.setfield(qry.fieldName(k), qry.getfield(qry.fieldName(k)));
                qh_payroll.post;
             end;
           end;
         end;
      end;
    end;
    dbg('set next');
    q.Next;
  end;
  Q.Free;
  qry.free;
end;

end.


