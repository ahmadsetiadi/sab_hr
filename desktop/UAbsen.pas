unit UAbsen;

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
  TFrmAbsen = class(TForm)
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
    N1ImportAbsen1: TMenuItem;
    OpenDialog1: TOpenDialog;
    N3Refresh1: TMenuItem;
    N4GenerateAlpa1: TMenuItem;
    N2GenerateAbsen2: TMenuItem;
    N3: TMenuItem;
    PrevPeriode1: TMenuItem;
    ThisPeriode1: TMenuItem;
    NextPeriode1: TMenuItem;
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


    procedure ImportAbsen;
    procedure GenerateAbsen;
    function CheckPayrollExists(sdate, edate:tdatetime): boolean;

    procedure N1ImportAbsen1Click(Sender: TObject);
    procedure N2GenerateAbsen2Click(Sender: TObject);
    procedure N3Refresh1Click(Sender: TObject);
    procedure N4GenerateAlpa1Click(Sender: TObject);
    procedure PrevPeriode1Click(Sender: TObject);
    procedure ThisPeriode1Click(Sender: TObject);
    procedure NextPeriode1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmAbsen: TFrmAbsen;
  Auto, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmAbsen.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmAbsen.cekAllEditModule(idm:integer);
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
procedure TFrmAbsen.isiALLTableKolom;
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


procedure TFrmAbsen.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmAbsen.FormCreate(Sender: TObject);
begin
  timer1.Enabled     := False;
  timer1.Interval    := StrToInt(ReadIniFile('server', 'timeoutattendance')) * 60000;//1 menit =60000

  isdebug := false;
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
procedure TFrmAbsen.SettingQuery;
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
procedure TFrmAbsen.ReloadClick;
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
procedure TFrmAbsen.SettingFont;
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
procedure TFrmAbsen.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, cekValidasi('`insert`', mn));
  SetEditTable(master, cekValidasi('`edit`', mn));
  SetDeleteTable(master, cekValidasi('`delete`', mn));
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);
end;

procedure TFrmAbsen.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmAbsen.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmAbsen.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmAbsen.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmAbsen.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmAbsen.MenuItem1Click(Sender: TObject);
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

procedure TFrmAbsen.OneMonth1Click(Sender: TObject);
begin
  //one month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  enddate   := EncodeDate(YearOf(btnenddate.Date), MonthOf(btnenddate.Date), 25);
  startdate := addmonths(enddate, -1);
  startdate := EncodeDate(YearOf(startdate), MonthOf(startdate), 26);

  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;

procedure TFrmAbsen.NextMonth1Click(Sender: TObject);
begin
  //next month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  enddate   := addMonths(btnenddate.Date, 1);
  enddate   := EncodeDate(YearOf(enddate), MonthOf(enddate), 25);
  startdate := addmonths(enddate, -1);
  startdate := EncodeDate(YearOf(startdate), MonthOf(startdate), 26);

  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;

procedure TFrmAbsen.PrevMonth1Click(Sender: TObject);
begin
  //prev month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  enddate   := addMonths(btnenddate.Date, -1);
  enddate   := EncodeDate(YearOf(enddate), MonthOf(enddate), 25);
  startdate := addmonths(enddate, -1);
  startdate := EncodeDate(YearOf(startdate), MonthOf(startdate), 26);

  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmAbsen.OneYear1Click(Sender: TObject);
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
procedure TFrmAbsen.PopupMenuPopup(Sender: TObject);
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

procedure TFrmAbsen.OneDay1Click(Sender: TObject);
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
procedure TFrmAbsen.oday1Click(Sender: TObject);
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

procedure TFrmAbsen.PrevPeriode1Click(Sender: TObject);
var
  y,m,d:word;
begin
  //prev periode
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  startdate := btnstartdate.Date;
  startdate := addmonths(startdate, -2);
  startdate := EncodeDate(YearOf(startdate), MonthOf(startdate), 26);

  enddate   := addmonths(startdate, 1);
  enddate   := EncodeDate(YearOf(enddate), MonthOf(enddate), 25);

  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;

end;
procedure TFrmAbsen.ThisPeriode1Click(Sender: TObject);
begin
//
end;
procedure TFrmAbsen.NextPeriode1Click(Sender: TObject);
begin
//
end;

procedure TFrmAbsen.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmAbsen.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmAbsen.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmAbsen.getFocusTableName : String;
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
function TFrmAbsen.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmAbsen.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmAbsen.AutoActiveQuery;
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
procedure TFrmAbsen.AutoRefreshQuery;
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
end;

function TFrmAbsen.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;

function TFrmAbsen.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;

function TFrmAbsen.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;

procedure TFrmAbsen.actLookupExecute(Sender: TObject);
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
procedure TFrmAbsen.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmAbsen.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmAbsen.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmAbsen.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmAbsen.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmAbsen.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmAbsen.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmAbsen.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmAbsen.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmAbsen.ppFreezeClick(Sender: TObject);
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
procedure TFrmAbsen.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmAbsen.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmAbsen.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmAbsen.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmAbsen.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmAbsen.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmAbsen.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmAbsen.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmAbsen.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmAbsen.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmAbsen.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmAbsen.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmAbsen.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmAbsen.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmAbsen.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmAbsen.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmAbsen.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmAbsen.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmAbsen.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmAbsen.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmAbsen.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmAbsen.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmAbsen.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', now);
end;
procedure TFrmAbsen.beforePostMaster;
var
  manual : boolean;
//  q1 : tzquery;
begin
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;

  manual := false;
  if q_master.getFieldInteger('manual') = 1 then manual := true;
  beforePostAttendance2(q_master, isNewRecord[Q_master.Tag], true, not manual, false);
end;
procedure TFrmAbsen.afterPostMaster;
begin
  afterPostAttendance2(q_master, isNewRecord[Q_master.Tag]);
  q_master.Refresh;
end;
procedure TFrmAbsen.beforeEditMaster;
begin
  //
end;
procedure TFrmAbsen.beforeDeleteMaster;
begin
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('attendance_id'));
end;
procedure TFrmAbsen.afterDeleteMaster;
begin
  //
end;
procedure TFrmAbsen.afterCancelMaster;
begin
  //
end;
//end master

function TFrmAbsen.CheckPayrollExists(sdate, edate:tdatetime): boolean;
begin
  if getQValueInteger('select count(*) from t_payroll where '+es+
                      '  (0=0) and ('+es+
                      ' '''+date2sql(sdate)+''' between startdate and enddate or '+es+
                      ' '''+date2sql(edate)+''' between startdate and enddate '+es+
                      ') ') > 0 then
  begin
    result := True;
  end else
  begin
    result := False;
  end;
end;

procedure TFrmAbsen.N1ImportAbsen1Click(Sender: TObject);
begin
  ImportAbsen;
end;

procedure TFrmAbsen.ImportAbsen;
var
  fn : string;
  tf, ts : tstringlist;
  x, y, i, no, ttl: integer;
  qf: tzquery;
  sql : string;
begin
  fn := '';
  fn := FileOpenDialog('Sinar Absensi (*.TXT)|*.TXT', true);

  if fn = '' then exit;

  ShowProgressbar;
  qf := createquery;
  ts := tstringlist.Create;
  tf := tstringlist.Create;
  String2StringList(ts, fn, ',');

  no := 1;
  ttl:= 0;
  for x := 0 to ts.Count -1 do
  begin
    fn := Replace(ts.Strings[x], '"', '');
    tf.Clear;
    tf.LoadFromFile(fn);
    ttl := ttl + tf.Count;
  end;

  for x := 0 to ts.Count -1 do
  begin
    fn := Replace(ts.Strings[x], '"', '');
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
  HideProgressbar;
  msgok('Finish');
end;

procedure TFrmAbsen.N2GenerateAbsen2Click(Sender: TObject);
begin
  GenerateAbsen;
end;

  procedure TFrmAbsen.GenerateAbsen;
  var
    sdate, edate, dt : tdatetime;
    jarak, no, x, dow, total : integer;
    qe, qa, qf, qd : tzquery;
    timeout_old : string;
    isnew: boolean;
  begin
    sdate := btnstartdate.date;
    edate := btnenddate.Date;

    //dbg(dayofweek(serverdate()));
    if CheckPayrollExists(sdate, edate) then
    begin
      msgerror('Sudah ada payroll untuk periode tersebut');
      exit;
    end;

    if confirm('Generate Attendance from '+formatdatetime('dd MMM yyyy',sdate)+' to '+formatdatetime('dd MMM yyyy', edate)+' ?') <> 'YES' then exit;

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

    if qe.RecordCount>1 then
    begin
      if not LookupQuery('Pilih Karyawan', Qe, 800, true, '', 'm_employee') then exit;
    end;
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
          afterPostAttendance2(qa, isNew);
        end;

        dt := adddays(dt, 1);
        x := x + 1;
      end;
      qe.Next;
    end;
    qe.Free;
    //q_master.EnableControls;
    HideProgressbar;
    reloadclick;
  end;

procedure TFrmAbsen.N3Refresh1Click(Sender: TObject);
var
  f: string;
  q: tzquery;
  manual : boolean;
begin
  if confirm('Apakah akan refresh '+q_master.RecordCountStr+' Data ?') <> 'YES' then exit;

  q := createquery;
  f := getColumnFromFilter(q_master, 'attendance_id');
  f := 'attendance_id in '+f+'';

  showprogressbar;
  q.Query('select * from t_attendance where '+f+' order by nip, tdate');
  //q_master.DisableControls;
  q.First;
  while not q.Eof do
  begin
    SetProgressbarDefault(q);
    q.Edit;
    manual := false;
    if q_master.getFieldInteger('manual') = 1 then manual := true;
    beforePostAttendance2(q, false, true, not manual, false);
    q.Post;
    afterPostAttendance2(q, false);
    q.Next;
  end;

  //q_master.EnableControls;
  q_master.Refresh;
  q.Free;
  ReloadClick;
  hideprogressbar;
end;

procedure TFrmAbsen.N4GenerateAlpa1Click(Sender: TObject);
var
  qe, qa : tzquery;
  sdate, edate, dt : tdatetime;
  jarak, total, x, dow: integer;
  manual : boolean;
begin
  sdate := btnstartdate.date;
  edate := btnenddate.Date;
  jarak := DaysBetween(addDays(sdate, -1), addDays(edate, 1));

  qe := createquery;
  qe.Query('select nip as a, employee_id, nip, count(*) as totalhari from t_attendance where '+es+
           'tdate>='''+date2sql(sdate)+''' and tdate<='''+date2sql(edate)+''' '+es+
           'group by employee_id order by nip');
  {qe.Query('select nip as a, employee_id, nip from m_employee where '+es+
           '(0=0) '+es+
           'group by nip order by nip');}
  if not LookupQuery('Pilih Karyawan', Qe, 800, true, '', 'm_employee') then
  begin
    qe.Free;
    exit;
  end;

  showprogressbar;
  qa := createquery;
  if jarak = 0 then total := qe.RecordCount else total := qe.RecordCount * jarak;
  x:= 1;
  qe.First;
  while not qe.Eof do
  begin

    dt := addDays(sdate, 0);
    while dt <= addDays(edate, 0) do
    begin
      dow := dayofweek(dt);
      if dow<>7 then dow := 0;
      SetProgressbar('Proses NIP: '+qe.getFieldString('nip')+ ', Tgl: '+date2sql(dt)+
                 ' ('+inttostr(x+1)+'/'+inttostr(total)+') ',
                 (x*100) div total );
      qa.query('select * from t_attendance where '+gets('employee_id', qe)+' '+es+
               'and tdate='''+date2sql(dt)+''' ');
      if qa.RecordCount = 0 then
      begin
        qa.Append;
        qa.setField('manual', 0);
        qa.SetMultiFieldQ('employee_id,nip', qe);
        qa.setField('statusattendance_id', '1');
        qa.setField('tdate', date2sql(dt));

        //qm:tzquery; isnew:boolean; auto:Boolean=True;
        //prosessTime:boolean=false; processJadwal:boolean=true

        manual := false;
        if qa.getFieldInteger('manual') = 1 then manual := true;
        beforePostAttendance2(qa, true, true, not manual, false);

        isiKolomUser(true, qa);
        qa.Post;
        afterPostAttendance2(qa, true);
      end else
      begin
//        qa.Edit;
//        beforePostAttendance(qa, false);
//        isiKolomUser(false, qa);
//        qa.Post;
      end;
      dt := adddays(dt, 1);
      x := x + 1;
    end;
    qe.Next;
  end;
  qe.Free;
  qa.Free;
  q_master.Refresh;
  hideprogressbar;
end;

end.
