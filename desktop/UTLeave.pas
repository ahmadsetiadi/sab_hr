unit UTLeave;

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
  TFrmTLeave = class(TForm)
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
    MASTERemployee_id: TcxGridDBBandedColumn;
    ApplicationEvents1: TApplicationEvents;
    N1Approved1: TMenuItem;
    N2CancelApproved1: TMenuItem;
    N3ShowStatusENTRY1: TMenuItem;
    N4ShowStatusAPPROVED1: TMenuItem;
    N5ShowALL1: TMenuItem;
    MASTERColumn1: TcxGridDBBandedColumn;
    DS_Leave: TDataSource;
    Q_Leave: TZQuery;
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
    procedure LookupADEmployee_id;
    procedure AutoIsiEmployee;
    procedure newRecordMaster;
    procedure beforePostMaster;
    procedure afterPostMaster;
    procedure beforeEditMaster;
    procedure beforeDeleteMaster;
    procedure afterDeleteMaster;
    procedure afterCancelMaster;

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure MASTERemployee_idPropertiesPopup(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure ImportExcel(qe,qk:tzquery; tse:tstringlist; no,total:integer; fname:string);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    function isStatusAPPROVED(qm:TZQuery) : Boolean;
    procedure N1Approved1Click(Sender: TObject);
    procedure N2CancelApproved1Click(Sender: TObject);
    procedure N3ShowStatusENTRY1Click(Sender: TObject);
    procedure N4ShowStatusAPPROVED1Click(Sender: TObject);
    procedure N5ShowALL1Click(Sender: TObject);
    procedure MASTERColumn1PropertiesPopup(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmTLeave: TFrmTLeave;
  DisableEvent, Auto, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmTLeave.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmTLeave.cekAllEditModule(idm:integer);
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
procedure TFrmTLeave.isiALLTableKolom;
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
procedure TFrmTLeave.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmTLeave.FormCreate(Sender: TObject);
begin
  isdebug := true;
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

  DisableEvent       := False;
end;
procedure TFrmTLeave.SettingQuery;
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
procedure TFrmTLeave.ReloadClick(syarat:string=' (0=0) ');
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate, syarat);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
  grid_master.SetFocus;
end;
procedure TFrmTLeave.SettingFont;
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
procedure TFrmTLeave.ValidasiControl;
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

procedure TFrmTLeave.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmTLeave.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTLeave.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmTLeave.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTLeave.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmTLeave.MenuItem1Click(Sender: TObject);
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
procedure TFrmTLeave.OneMonth1Click(Sender: TObject);
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

procedure TFrmTLeave.NextMonth1Click(Sender: TObject);
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
procedure TFrmTLeave.PrevMonth1Click(Sender: TObject);
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
procedure TFrmTLeave.OneYear1Click(Sender: TObject);
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
procedure TFrmTLeave.PopupMenuPopup(Sender: TObject);
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

procedure TFrmTLeave.OneDay1Click(Sender: TObject);
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
procedure TFrmTLeave.oday1Click(Sender: TObject);
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
procedure TFrmTLeave.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmTLeave.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmTLeave.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmTLeave.getFocusTableName : String;
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
function TFrmTLeave.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmTLeave.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmTLeave.AutoActiveQuery;
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
procedure TFrmTLeave.AutoRefreshQuery;
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
function TFrmTLeave.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmTLeave.ImportFromExcel1Click(Sender: TObject);
var
  s, sheet, fn, dtsql, tn, eid : string;
  x, joingaji : integer;
  tse, ts : tstringlist;
  qe, qk : tzquery;
begin
  exit;
  if confirm('Do You Want to Import Attendance ?') <> 'YES' then exit;
  fn := '';
  fn := FileOpenDialog('Excel Files 2003 (*.xls)|*.xls|Excel Files 2007 (*.xlsx)|*.xlsx');
  if FileExists(fn) = False then exit;
  if ConnectExcel(fn) = false then exit;

  ts := tstringlist.Create;
  tse:= tstringlist.Create;
  ts.clear;
  GetTableExcel(ts);
  s := '';
  for x := 0 to ts.Count -1 do
  begin
    s := s + ts.Strings[x] + ',';
  end;
  s := HilangkanKomaBelakang(s);
  sheet := ComboForm('Choose Sheet Import', 'combobox', s);
  if sheet = '' then
  begin
    DisconnetExcel;
    ts.Free;
    MsgError('Please Choose Sheet Import');
    exit;
  end;
  tn := getQValueString('select tablename from s_sheet where name='''+sheet+''' ');
  if tn = '' then
  begin
    DisconnetExcel;
    ts.Free;
    MsgError('This Sheet is Not Allowed to Import');
    exit;
  end;

  qe := createquery;
  qe.QueryExcel('select * from ['+sheet+']'); //select dari excel
  if LookupQuery('Choose Data From Excel', qe, 800, true, '', '',false) =false then
  begin
    qe.Free;
    ts.Free;
    DisconnetExcel;
    exit;
  end;

  ShowProgressbar;
  qk := createquery;
  q_master.DisableControls;
  ImportExcel(qe, qk, tse, 1,1, fn );
  qe.Free;
  qk.Free;
  ts.Free;
  DisconnetExcel;
  q_master.EnableControls;
  ReloadClick;
  HideProgressbar;
  if tse.Count > 0 then
  begin
    ClearErrorList;
    AddErrorListFromTS(tse);
    tse.Free;
    ShowError;
  end else
  begin
    tse.free;
    msgok('Finished');
  end;
end;

function TFrmTLeave.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmTLeave.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmTLeave.actLookupExecute(Sender: TObject);
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
procedure TFrmTLeave.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmTLeave.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmTLeave.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmTLeave.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmTLeave.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmTLeave.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmTLeave.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmTLeave.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmTLeave.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmTLeave.ppFreezeClick(Sender: TObject);
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
procedure TFrmTLeave.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmTLeave.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmTLeave.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmTLeave.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmTLeave.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmTLeave.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmTLeave.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTLeave.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmTLeave.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTLeave.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTLeave.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmTLeave.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTLeave.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmTLeave.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmTLeave.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmTLeave.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmTLeave.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmTLeave.ApplicationEvents1Exception(Sender: TObject; E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmTLeave.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmTLeave.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmTLeave.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmTLeave.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmTLeave.AutoIsiEmployee;
var
  q : tzquery;
begin
  q := createquery;
  Q.Query('select employee_id,nip,company_id,division_id,position_id,'+es+
             'department_id,unit_id,workarea_id,grade_id,level_id,'+es+
             'employeestatus_id,joindate,resigndate,availableleave '+es+
             'from m_employee where nip='''+getUserLogin2+''' '+es+
             'order by name');
  if q.RecordCount > 0 then
  begin
    IsiMasterCuti(q);
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,unit_id,workarea_id,grade_id,level_id,'+
                            'employeestatus_id,joindate,resigndate,availableleave', Q );
    q.Query('select * from m_employee_cuti where '+gets('employee_id', q_master)+' '+es+
            'and expired=0 and availableleave > 0 order by startdate');
    if q.RecordCount <= 0 then
    begin
      MsgError('Karyawan ' + q_master.getFieldString('nip') + ' Belum Mendapatkan Cuti atau Cuti telah habis');
      q_master.Cancel;
      q.Free;
      exit;
    end else
    begin
      if q.RecordCount >= 2 then LookupQuery('Choose Leave Source', q, 800, False, '', 'm_employee_cuti');
      q_master.SetMultiFieldQ('employee_cuti_id', q);
    end;
  end else
  begin
    //MsgError('NIP '+getUserLogin2 + ' tidak ditemukan di Employee Data');
    //q_master.Cancel;
  end;
  Q.free;
end;
procedure TFrmTLeave.newRecordMaster;
begin
  AutoRefreshQuery;
  if LowerCase(getTipeLogin)='employee' then AutoIsiEmployee;

  q_master.SetMultiField('startdate,enddate,tdate', serverdate);
  q_master.SetMultiField('availableleave', '0');
  q_master.SetMultiField('takenleave,leavetype_id,cutitahunan', '1');
  q_master.setField('status', 'ENTRY');
  q_master.setField('userentry', GetUserLogin);
end;
procedure TFrmTLeave.beforePostMaster;
var
  dt : tdatetime;
  ts : integer;
begin
  q_master.setField('cutitahunan', getqvalueinteger('select cutitahunan from m_leavetype where '+gets('leavetype_id', q_master)+' '));
  q_master.setfield('tdate', q_master.getfield('startdate'));

  if q_master.getFieldInteger('cutitahunan') = 1 then
  begin
    dt := addMonths( q_master.getFieldDateTime('joindate'),12);
    dt := addDays(dt, -1);
    if date2sql( q_master.getFieldDateTime('startdate') ) < date2sql(dt) then
    begin
      MsgError('Belum diperkenankan untuk Cuti'+es+
               'Mulai Cuti dari tgl '+formatdatetime('dd MMM yyyy', dt));
      abort;
      exit;
    end;
    if q_master.getFieldDouble('takenleave') > q_master.getFieldDouble('availableleave') then
    begin
      MsgError('Cuti yang diambil melebihi dari sisa cuti'+Es+
               'Sisa Cuti = '+ q_master.getFieldstring('availableleave'));
      abort;
      exit;
    end;
  end else
  begin
    ts := getqvalueinteger('select total from m_leavetype where '+gets('leavetype_id', q_master)+' ');
    if q_master.getFieldDouble('takenleave') >  ts then
    begin
      MsgError('Cuti yang diambil melebihi dari Cuti Spesial yang diberikan'+Es+
               'Total Cuti ini hanya = '+ inttostr(ts));
      abort;
      exit;
    end;
  end;


  isiKolomUser(isNewRecord[strtoint(txtid.Text)], q_master);
end;
procedure TFrmTLeave.afterPostMaster;
begin
  isiMasterCuti(Q_Master);
  q_master.Refresh;
end;
procedure TFrmTLeave.beforeEditMaster;
begin
  if DisableEvent = false then
  begin
    if isStatusAPPROVED(q_master) then
    begin
      MsgError('Can''t Edit If Status is APPROVED');
      isNowEdit[strtoint(txtid.Text)]    := False;
      abort;
      exit;
    end;
  end;
end;
procedure TFrmTLeave.beforeDeleteMaster;
begin
  if isStatusAPPROVED(q_master) then
  begin
    MsgError('Can''t Delete If Status is APPROVED');
    abort;
    exit;
  end;
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmTLeave.afterDeleteMaster;
begin
  //
end;
procedure TFrmTLeave.afterCancelMaster;
begin
  //
end;
//end master

function TFrmTLeave.isStatusAPPROVED(qm:TZQuery) : Boolean;
begin
  result := False;
  if uppercase(qm.getFieldString('status')) = 'APPROVED' then result := True;
end;
procedure TFrmTLeave.MASTERColumn1PropertiesPopup(Sender: TObject);
var
  Q : TZQuery;
begin
  if isStatusAPPROVED(q_master) then
  begin
    MsgError('Can''t Edit If Status is APPROVED');
    isNowEdit[strtoint(txtid.Text)]    := False;
    abort;
    exit;
  end;
  Q := createquery;
  q.Query('select * from m_employee_cuti where '+gets('employee_id', q_master)+' '+es+
          'and expired=0 and availableleave > 0 order by startdate');
  if LookupQuery('Choose Leave Source', q, 800, False, '', 'm_employee_cuti') then
  begin
    q_master.SetMultiFieldQ('employee_cuti_id', q);
  end;
  q.Free;
end;

procedure TFrmTLeave.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmTLeave.LookupADEmployee_id;
var
  Q : TZQuery;
  kolom, syarat, s : String;
begin
  if isStatusAPPROVED(q_master) then
  begin
    MsgError('Can''t Edit If Status is APPROVED');
    isNowEdit[strtoint(txtid.Text)]    := False;
    abort;
    exit;
  end;
  s := '';
  s := InputBox('Input Employee Name', 'Search', s);
  kolom := '*';
  syarat:= ' (0=0) ';
  Q := createquery;
  q.Query('select * from s_lookup where tablename=''t_cuti'' and columnname=''employee_id'' ');
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
    IsiMasterCuti(q);
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,unit_id,workarea_id,grade_id,level_id,'+
                            'employeestatus_id,joindate,resigndate,availableleave', Q );
    q.Query('select * from m_employee_cuti where '+gets('employee_id', q_master)+' '+es+
            'and expired=0 and availableleave > 0 order by startdate');
    if q.RecordCount <= 0 then
    begin
      MsgError('Karyawan ' + q_master.getFieldString('nip') + ' Belum Mendapatkan Cuti atau Cuti telah habis');
      q_master.Cancel;
      q.Free;
      exit;
    end else
    begin
      if q.RecordCount >= 2 then LookupQuery('Choose Leave Source', q, 800, False, '', 'm_employee_cuti');
      q_master.SetMultiFieldQ('employee_cuti_id', q);
    end;
  end;
  Q.free;
end;
procedure TFrmTLeave.ImportExcel(qe,qk:tzquery; tse:tstringlist; no,total:integer; fname:string);
var
  dtsql : string;
  function getDateFromExcel(qm:tzquery):string;
  var
    tsd1, tsd2 : tstringlist;
    dtstr : string;
  begin
    result := '';
    tsd1 := tstringlist.Create;
    tsd2 := tstringlist.Create;
    tsd1.Clear;
    tsd2.Clear;
    dtstr := trim(qm.getFieldString('date'));
    String2StringList(tsd1, dtstr,' ');
    if tsd1.Count <= 0 then
    begin
      tse.Add('Data No : '+qm.RecNoStr+', NIP : '+qm.getFieldString('nip')+' Error Convert Date ');
      tsd1.Free;
      tsd2.Free;
      exit;
    end;
    String2StringList(tsd2, trim(tsd1.Strings[1]),'/');
    if tsd2.Count <= 0 then
    begin
      tse.Add('Data No : '+qm.RecNoStr+', NIP : '+qm.getFieldString('nip')+' Error Convert Date ');
      tsd1.Free;
      tsd2.Free;
      exit;
    end;
    result := tsd2.Strings[2] + '-' + tsd2.Strings[1] + '-' + tsd2.Strings[0];
    tsd2.Free;
    tsd1.Free;
  end;
begin
  qe.First;
  while not qe.Eof do
  begin
    SetProgressbar('Processing '+inttostr(qe.RecNo)+'/'+inttostr(qe.RecordCount)+
                      ' ('+inttostr(no)+'/'+inttostr(total)+') ['+fname+']',
                   (qe.RecNo*100) div qe.RecordCount );
    if qe.getFieldString('id') <> '' then
    begin //id <> ''
      qk.Query('select employee_id,nip,overtime_id,company_id,division_id,'+
               'department_id,unit_id,workarea_id,position_id,'+
               'grade_id,employeestatus_id from m_employee where '+es+
               'nip = '''+qe.getFieldString('id')+''' ');
      if qk.RecordCount > 0 then
      begin //ada data di employee
        if qe.getFieldString('date') <> '' then dtsql := getDateFromExcel(qe);
        q_master.Query('select * from t_attendance where '+gets('employee_id', qk )+' and tdate='''+dtsql+''' ');
        if q_master.RecordCount = 0 then q_master.Append else q_master.Edit;
        q_master.SetMultiFieldQ('employee_id,nip,overtime_id,company_id,division_id,'+
                                'department_id,unit_id,workarea_id,position_id,grade_id,employeestatus_id', qk);
        q_master.setField('tdate', dtsql);
        q_master.setField('timein', qe.getField('in'));
        q_master.setField('timeout', qe.getField('out'));
        q_master.Post;
      end else //ada data di employee
      begin
        tse.Add('Data No : '+qe.RecNoStr+', NIP : '+qe.getFieldString('id')+' Not Found at Employee Data ');
      end;
    end;//id <> ''
    qe.Next;
  end;
end;
procedure TFrmTLeave.N1Approved1Click(Sender: TObject);
begin
  if lowercase(q_master.getFieldString('status')) = 'approved' then
  begin
    MsgError('Status Already APPROVED');
    abort;
    exit;
  end;
  if GetEmployeeLogin = q_master.getFieldInteger('employee_id') then
  begin
    msgerror('Tidak Dapat Approved Untuk Data Pribadi nya');
    abort;
    exit;
  end else
  begin
    if Confirm('Do You Want to APPROVED ?') = 'NO' then exit;
    q_master.Edit;
    q_master.setField('status', 'APPROVED');
    q_master.setField('userapproved', GetUserLogin);
    q_master.Post;
  end;
end;

procedure TFrmTLeave.N2CancelApproved1Click(Sender: TObject);
begin
  if lowercase(q_master.getFieldString('status')) = 'entry' then
  begin
    MsgError('Status Still ENTRY');
    abort;
    exit;
  end;
  if GetEmployeeLogin = q_master.getFieldInteger('employee_id') then
  begin
    msgerror('Tidak Dapat Cancel Approved Untuk Data Pribadi nya');
    abort;
    exit;
  end else
  begin
    if Confirm('Do You Want to CANCEL APPROVED ?') = 'NO' then exit;
    DisableEvent := True;
    q_master.Edit;
    q_master.setField('status', 'ENTRY');
    q_master.setField('usercancel', GetUserLogin);
    q_master.Post;
    DisableEvent := False;
  end;
end;
procedure TFrmTLeave.N3ShowStatusENTRY1Click(Sender: TObject);
begin
  ReloadClick(' (status=''ENTRY'') ');
end;
procedure TFrmTLeave.N4ShowStatusAPPROVED1Click(Sender: TObject);
begin
  ReloadClick(' (status=''APPROVED'') ');
end;
procedure TFrmTLeave.N5ShowALL1Click(Sender: TObject);
begin
  ReloadClick;
end;

end.
