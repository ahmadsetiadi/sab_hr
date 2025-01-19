unit USummary;

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
  cxDataControllerConditionalFormattingRulesManagerDialog, EXLReportExcelTLB,
  EXLReportBand, EXLReport, system.win.comobj, dxSpreadSheetActions, dxSpreadSheet,
  dxSpreadSheetCore;

type
  TFrmSummary = class(TForm)
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
    ApplicationEvents1: TApplicationEvents;
    N1ExportSummary1: TMenuItem;
    EXLReport1: TEXLReport;
    EXLReport2: TEXLReport;
    N1PrintSlipGaji1: TMenuItem;
    N2PrintSlipKoperasi1: TMenuItem;
    Q_Koperasi: TZQuery;
    DS_Koperasi: TDataSource;
    frxDBDataset10: TfrxDBDataset;
    FR_Koperasi: TfrxReport;
    QM_Master: TZQuery;
    DataSource4: TDataSource;
    frxDBDataset11: TfrxDBDataset;
    FR_SlipManager: TfrxReport;
    frxDBDataset12: TfrxDBDataset;
    DataSource3: TDataSource;
    QM_Detail1: TZQuery;
    QM_Detail2: TZQuery;
    DataSource2: TDataSource;
    frxDBDataset13: TfrxDBDataset;
    FR_Slip: TfrxReport;
    N3PrintSlip1: TMenuItem;
    N4ExportSlipKoperasi1: TMenuItem;
    N3PreviewSlipTunjangan1: TMenuItem;
    N6ExportSlipTunjangan1: TMenuItem;
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
    procedure N1ExportSummary1Click(Sender: TObject);
    procedure N1PrintSlipGaji1Click(Sender: TObject);
    procedure N2PrintSlipKoperasi1Click(Sender: TObject);
    procedure N3PrintSlip1Click(Sender: TObject);
    procedure N4ExportSlipKoperasi1Click(Sender: TObject);

  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmSummary: TFrmSummary;
  Auto, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmSummary.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmSummary.cekAllEditModule(idm:integer);
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
procedure TFrmSummary.isiALLTableKolom;
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
procedure TFrmSummary.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmSummary.FormCreate(Sender: TObject);
begin
//  timer1.Enabled     := False;
//  timer1.Interval    := StrToInt(ReadIniFile('server', 'timeoutattendance')) * 60000;//1 menit =60000
  //timer1.Interval    := 20000;
  isdebug := true;
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
procedure TFrmSummary.SettingQuery;
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
procedure TFrmSummary.ReloadClick;
var
  idm : integer;
  SQL, sqldetail : string;
begin
  ShowProgressbar;
  idm               := strtoint(txtid.Text);
  startdate         := Firstday(BtnStartdate.Date);
  enddate           := LastDay(BtnEnddate.Date);
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate);
  SQL := Replace(SQLGrid[idm], 'limit 0', '');

  sqldetail := getqvaluestring('select _sql from s_report where name=''query v_payroll_detail'' ');
  sqldetail := replace(sqldetail, '$filtertgl', ' ph.tdate >=''$startdate'' and ph.tdate <=''$enddate''  ');
  sqldetail := Replace(sqldetail, '$startdate', date2sql(startdate) );
  sqldetail := Replace(sqldetail, '$enddate', date2sql(enddate) );
  executesql('create or replace view v_payroll_detail as '+es+
             sqldetail+'');

  q_master.Query(SQL);
  q_master.Refresh;
  grid_master.SetFocus;
  HideProgressbar;
//  Firstday()
//  Lastday()
end;
procedure TFrmSummary.SettingFont;
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
procedure TFrmSummary.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, false);
  SetEditTable(master, false);
  SetDeleteTable(master, false);
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);

  ReadOnlyDataset(master);
end;

procedure TFrmSummary.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmSummary.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmSummary.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmSummary.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmSummary.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmSummary.MenuItem1Click(Sender: TObject);
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

procedure TFrmSummary.OneMonth1Click(Sender: TObject);
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

procedure TFrmSummary.NextMonth1Click(Sender: TObject);
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
procedure TFrmSummary.PrevMonth1Click(Sender: TObject);
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
procedure TFrmSummary.OneYear1Click(Sender: TObject);
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
procedure TFrmSummary.PopupMenuPopup(Sender: TObject);
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

procedure TFrmSummary.OneDay1Click(Sender: TObject);
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
procedure TFrmSummary.oday1Click(Sender: TObject);
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
procedure TFrmSummary.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmSummary.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmSummary.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmSummary.getFocusTableName : String;
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
function TFrmSummary.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmSummary.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmSummary.AutoActiveQuery;
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
procedure TFrmSummary.AutoRefreshQuery;
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
function TFrmSummary.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;

function TFrmSummary.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmSummary.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmSummary.actLookupExecute(Sender: TObject);
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
procedure TFrmSummary.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmSummary.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmSummary.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmSummary.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmSummary.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmSummary.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmSummary.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmSummary.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmSummary.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmSummary.ppFreezeClick(Sender: TObject);
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
procedure TFrmSummary.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmSummary.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmSummary.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmSummary.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmSummary.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmSummary.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmSummary.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmSummary.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmSummary.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmSummary.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmSummary.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmSummary.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmSummary.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmSummary.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmSummary.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmSummary.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmSummary.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmSummary.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmSummary.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmSummary.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmSummary.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmSummary.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmSummary.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', now);
end;
procedure TFrmSummary.beforePostMaster;
//var
//  q1 : tzquery;
begin
//  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
//  begin
//    MsgError('Payroll Already Exist');
//    abort;
//    exit;
//  end;

end;
procedure TFrmSummary.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmSummary.beforeEditMaster;
begin
  //
end;
procedure TFrmSummary.beforeDeleteMaster;
begin
  //DeleteAllDataDetail(txtID.Text, q_master.getFieldString('absen_id'));
end;
procedure TFrmSummary.afterDeleteMaster;
begin
  //
end;
procedure TFrmSummary.afterCancelMaster;
begin
  //
end;
//end mas

procedure TFrmSummary.N1ExportSummary1Click(Sender: TObject);
var
  ATable : TdxSpreadSheetTableView;
  fn : string;
  q1, q2 : tzquery;
  sql : string;
  sheet1, xls, wrb: variant;
  ASheet1, ASheet2 : TdxSpreadSheet;
begin
  sql:= 'SELECT ROW_NUMBER() over ( order by e.name) as no, '+es+
          's.nip, s.tdate, s.typejamsostek, s.takehomepay, s.gajipokok, s.bumida, '+es+
          'e.name, e.idnumber, e.no_bpjstk, e.no_bpjsks, e.no_bumida, e.dob, s.basejamsostek, '+es+
          's.jkk, s.jkm, s.jhtcompany, s.jhtemployee, s.jpscompany, s.jpsemployee, '+es+
          's.bpjsks_company, s.bpjsks_employee '+es+
          'FROM v_summary s'+es+
          'left join m_employee e on s.employee_id=e.employee_id '+es+
          'where s.tdate>='''+date2sql(startdate)+''' and s.tdate<='''+date2sql(enddate)+''' '+es+
          'order by e.name';
  q1 := createquery;
  q2 := createquery;
  q1.Query(sql);
  q2.Query(sql);

  Q_Koperasi.Query('select s.payroll_id, s.employee_id, s.nip, s.name, '+es+
                   's.department, s.employeestatus, s.position, s.takehomepay, '+es+
                   'coalesce(a.saldo,0) as awal, s.iuran_koperasi, '+es+
                   's.p_koperasi, coalesce(a.saldo,0)+s.iuran_koperasi-s.p_koperasi as saldo, '+es+
                   'k.sisa, s.tdate '+es+
                   'from v_summary s '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(amount) as saldo '+es+
                   '  from t_ad '+es+
                   '  where tdate<'''+date2sql(startdate)+''' and salary_id in (356) '+es+
                   '  group by employee_id '+es+
                   ') a on s.employee_id= a.employee_id '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(sisa) as sisa '+es+
                   '  from t_loan '+es+
                   '  where tipe=''Koperasi'' '+es+
                   '  group by employee_id '+es+
                   ') k on s.employee_id= k.employee_id '+es+
                   'where s.tdate>='''+date2sql(startdate)+''' and s.tdate<='''+date2sql(enddate)+'''');

  fn := ExtractFilePath(Application.ExeName) + 'report\' + 'BPJS_TK01.xlsx';
  if FileExists(fn) then DeleteFile(fn);

  EXLReport1.Template   := ExtractFilePath(Application.ExeName) + 'template\' + 'BPJS_TK.xlsx';
  EXLReport1.TemplSheet := 'BPJS_TK';
  EXLReport1.DataSet    := q1;
  EXLReport1.Show(fn);

  fn := ExtractFilePath(Application.ExeName) + 'report\' + 'BPJS_KS01.xlsx';
  if FileExists(fn) then DeleteFile(fn);
  EXLReport1.Template   := ExtractFilePath(Application.ExeName) + 'template\' + 'BPJS_KS.xlsx';
  EXLReport1.TemplSheet := 'BPJS_KS';
  EXLReport1.DataSet    := q1;
  EXLReport1.Show(fn);

  fn := ExtractFilePath(Application.ExeName) + 'report\' + 'BUMIDA01.xlsx';
  if FileExists(fn) then DeleteFile(fn);
  EXLReport1.Template   := ExtractFilePath(Application.ExeName) + 'template\' + 'BUMIDA.xlsx';
  EXLReport1.TemplSheet := 'BUMIDA';
  EXLReport1.DataSet    := q1;
  EXLReport1.Show(fn);

  fn := ExtractFilePath(Application.ExeName) + 'report\' + 'Payroll01.xlsx';
  if FileExists(fn) then DeleteFile(fn);
  EXLReport1.Template   := ExtractFilePath(Application.ExeName) + 'template\' + 'Payroll.xlsx';
  EXLReport1.TemplSheet := 'Payroll';
  EXLReport1.DataSet    := q_master;
  EXLReport1.Show(fn);

  fn := ExtractFilePath(Application.ExeName) + 'report\' + 'Banking01.xlsx';
  if FileExists(fn) then DeleteFile(fn);
  EXLReport1.Template   := ExtractFilePath(Application.ExeName) + 'template\' + 'Banking.xlsx';
  EXLReport1.TemplSheet := 'Banking BCA';
  EXLReport1.DataSet    := q_master;
  EXLReport1.Show(fn);

  fn := ExtractFilePath(Application.ExeName) + 'report\' + 'Koperasi01.xlsx';
  if FileExists(fn) then DeleteFile(fn);
  EXLReport1.Template   := ExtractFilePath(Application.ExeName) + 'template\' + 'Koperasi.xlsx';
  EXLReport1.TemplSheet := 'Report Payroll Koperasi';
  EXLReport1.DataSet    := q_koperasi;
  EXLReport1.Show(fn);

  q1.Free;
  q2.Free;
  ShowProgressbar;
  ASheet1 := TdxSpreadSheet.Create(Self);

  ASheet1.AddSheet('BPJS_TK');
  ASheet1.AddSheet('BPJS_KS');
  ASheet1.AddSheet('Bumida');
  ASheet1.AddSheet('Report Payroll Perbagian');
  ASheet1.AddSheet('Banking BCA');
  ASheet1.AddSheet('Report Payroll Koperasi');
  ASheet1.AddSheet('Laporan Pengeluaran');
  ASheet1.AddSheet('Report Jam Lembur');
  setprogressbar('Please Wait', 10);

  ASheet2 := TdxSpreadSheet.Create(Self);
  ASheet2.LoadFromFile(ExtractFilePath(Application.ExeName) + 'report\' + 'BPJS_TK01.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 1;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;
  setprogressbar('Please Wait', 20);

  ASheet2.LoadFromFile(ExtractFilePath(Application.ExeName) + 'report\' + 'BPJS_KS01.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 2;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;
  setprogressbar('Please Wait', 30);

  ASheet2.LoadFromFile(ExtractFilePath(Application.ExeName) + 'report\' + 'BUMIDA01.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 3;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;

  setprogressbar('Please Wait', 40);
  ASheet2.LoadFromFile(ExtractFilePath(Application.ExeName) + 'report\' + 'Payroll01.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 4;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;

  setprogressbar('Please Wait', 50);
  ASheet2.LoadFromFile(ExtractFilePath(Application.ExeName) + 'report\' + 'Banking01.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 5;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;

  setprogressbar('Please Wait', 60);
  ASheet2.LoadFromFile(ExtractFilePath(Application.ExeName) + 'report\' + 'Koperasi01.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 6;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;

  setprogressbar('Please Wait', 70);

  asheet1.Sheets[0].Destroy;
  fn := ExtractFilePath(Application.ExeName) + 'report\' + 'Report_Payroll.xlsx';
  asheet1.SaveToFile(fn);

  xls := CreateOleObject('Excel.Application');
  wrb := xls.workbooks.open(fn);
  sheet1 := wrb.worksheets.item['BPJS_TK'];
  sheet1.select;
  sheet1.range['N6'].value := q_master.getFieldString('enddate');

  sheet1 := wrb.worksheets.item['BPJS_KS'];
  sheet1.select;
  sheet1.range['I6'].value := q_master.getFieldString('enddate');

  sheet1 := wrb.worksheets.item['BUMIDA'];
  sheet1.select;
  sheet1.range['H6'].value := q_master.getFieldString('enddate');


  xls.DisplayAlerts := False;
  xls.ActiveWorkbook.save;

  sheet1 := Unassigned;
  xls.workbooks.close;
  wrb := Unassigned;
  xls.quit;
  xls := Unassigned;

  HideProgressbar;
  msgok('Data Telah Disimpan di abc '+fn);
end;


procedure TFrmSummary.N1PrintSlipGaji1Click(Sender: TObject);
var
  s :string;
  qm : tzquery;
begin
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  qm_master.Active  := False;
  QM_Detail1.Active := False;
  QM_Detail2.Active := False;
  qm := createquery;
  //qm.Query('select * from t_payroll where tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+'''');
  qm.Query('select p.* '+es+
          'from t_payroll p '+es+
          'left join m_department d on p.department_id=d.department_id '+es+
          'left join m_employee e on p.employee_id=e.employee_id '+es+
          'where '+es+
          'tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' '+es+
          'order by d.code, e.name');
  //pesan(qm.SQL.Text);

  if LookupQuery('Choose Payroll', qm, 800, True, '', 't_payroll' ) = false then exit;
  //q_master.DisableControls;
  s := getColumnFromFilter(qm, 'payroll_id');
  qm_master.Query('select p.*, e.name as employeename,'+es+
                  'e.email as email, e.password, '+es+
                  'c.name as companyname, null logo, '+es+
                  'd.name as divisionname,'+es+
                  'dp.name as departmentname,'+es+
                  'w.name as workareaname,'+es+
                  'po.name as positionname,'+es+
                  'l.name as levelname,'+es+
                  'es.name as employeestatusname '+es+
                  'from t_payroll p '+es+
                  'left join m_employee e on p.employee_id = e.employee_id '+es+
                  'left join m_company c on p.company_id = c.company_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_department dp on p.department_id = dp.department_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_level l on p.level_id = l.level_id '+es+
                  'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                  'where p.payroll_id in '+s+' '+es+
                  'order by p.level, p.tdate, dp.code, e.name');
  if qm_master.RecordCount > 0 then
  begin
    qm_detail1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''D'' and s.sliporder > 0 '+es+
                  'and pd.amount <> 0 '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by pd.payroll_id, convert(s.sliporder, signed)');
    qm_detail2.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''C'' and s.sliporder > 0 '+es+
                  'and pd.amount <> 0 '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by pd.payroll_id, convert(s.sliporder, signed)');
    //FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    //q_master.EnableControls;
    FR_SlipManager.ShowReport;
  end else
  begin
    //FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    //q_master.EnableControls;
    MsgError('No Data to Print');
  end;
  qm.Free;
end;

procedure TFrmSummary.N2PrintSlipKoperasi1Click(Sender: TObject);
begin
  Q_Koperasi.Query('select s.payroll_id, s.employee_id, s.nip, s.name, '+es+
                   's.department, s.employeestatus, s.position, '+es+
                   'coalesce(a.saldo,0) as awal, s.iuran_koperasi, '+es+
                   's.p_koperasi, coalesce(a.saldo,0)+s.iuran_koperasi-s.p_koperasi as saldo, '+es+
                   'k.sisa, s.tdate '+es+
                   'from v_summary s '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(amount) as saldo '+es+
                   '  from t_ad '+es+
                   '  where tdate<'''+date2sql(startdate)+''' and salary_id in (356) '+es+
                   '  group by employee_id '+es+
                   ') a on s.employee_id= a.employee_id '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(sisa) as sisa '+es+
                   '  from t_loan '+es+
                   '  where tipe=''Koperasi'' '+es+
                   '  group by employee_id '+es+
                   ') k on s.employee_id= k.employee_id '+es+
                   'where s.tdate>='''+date2sql(startdate)+''' and s.tdate<='''+date2sql(enddate)+'''');
  if LookupQuery('Choose Payroll', Q_Koperasi, 800, True, '', '' ) = false then exit;
  //msgok(q_koperasi.RecordCountStr);

  if q_koperasi.RecordCount = 0 then
  begin
    msgerror('No Data to Print');
  end else
  begin
    FR_Koperasi.ShowReport;
  end;
end;

procedure TFrmSummary.N3PrintSlip1Click(Sender: TObject);
begin
  Q_Koperasi.Query('select s.payroll_id, s.employee_id, s.nip, s.name, '+es+
                   's.department, s.employeestatus, s.position, '+es+
                   'coalesce(a.saldo,0) as awal, s.iuran_koperasi, '+es+
                   's.p_koperasi, coalesce(a.saldo,0)+s.iuran_koperasi-s.p_koperasi as saldo, '+es+
                   'k.sisa, s.tdate '+es+
                   'from v_summary s '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(amount) as saldo '+es+
                   '  from t_ad '+es+
                   '  where tdate<'''+date2sql(startdate)+''' and salary_id in (356) '+es+
                   '  group by employee_id '+es+
                   ') a on s.employee_id= a.employee_id '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(sisa) as sisa '+es+
                   '  from t_loan '+es+
                   '  where tipe=''Koperasi'' '+es+
                   '  group by employee_id '+es+
                   ') k on s.employee_id= k.employee_id '+es+
                   'where s.tdate>='''+date2sql(startdate)+''' and s.tdate<='''+date2sql(enddate)+'''');
  if LookupQuery('Choose Payroll', Q_Koperasi, 800, True, '', '' ) = false then exit;

  ShowProgressbar;
  q_koperasi.First;
  while not q_koperasi.Eof do
  begin
    SetProgressbarDefault(Q_Koperasi);
    qm_master.Query('select p.*, e.name as employeename,'+es+
                  'e.email as email, e.password, '+es+
                  'c.name as companyname, null logo, '+es+
                  'd.name as divisionname,'+es+
                  'dp.name as departmentname,'+es+
                  'w.name as workareaname,'+es+
                  'po.name as positionname,'+es+
                  'l.name as levelname,'+es+
                  'es.name as employeestatusname '+es+
                  'from t_payroll p '+es+
                  'left join m_employee e on p.employee_id = e.employee_id '+es+
                  'left join m_company c on p.company_id = c.company_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_department dp on p.department_id = dp.department_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_level l on p.level_id = l.level_id '+es+
                  'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                  'where p.payroll_id = '''+q_koperasi.getFieldString('payroll_id')+''' '+es+
                  'order by p.level, p.tdate, dp.code, e.name');
    if qm_master.RecordCount > 0 then
    begin
      qm_detail1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                    'from t_payroll_detail pd '+es+
                    'left join m_salary s on pd.salary_id = s.salary_id '+es+
                    'where s.acc=''D'' and s.sliporder > 0 '+es+
                    'and pd.amount <> 0 '+es+
                    'group by pd.payroll_id, s.slipname '+es+
                    'order by pd.payroll_id, convert(s.sliporder, signed)');
      qm_detail2.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                    'from t_payroll_detail pd '+es+
                    'left join m_salary s on pd.salary_id = s.salary_id '+es+
                    'where s.acc=''C'' and s.sliporder > 0 '+es+
                    'and pd.amount <> 0 '+es+
                    'group by pd.payroll_id, s.slipname '+es+
                    'order by pd.payroll_id, convert(s.sliporder, signed)');
      //FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
      //q_master.EnableControls;

      ExportReportToPDF(FR_SlipManager, 'C:\xampp\htdocs\mtg\assets\slipgaji\' +
                                        'SLIPGAJI_' +
                                        qm_master.getFieldString('nip')+ '_' +
                                        LeftStr( replace( qm_master.date2sql('tdate'), '-', '') ,6) + '.pdf'   );
    end;

    q_koperasi.Next;
    HideProgressbar;
  end;

end;

procedure TFrmSummary.N4ExportSlipKoperasi1Click(Sender: TObject);
var
  q : tzquery;
begin
  q := createquery;
  Q.Query('select s.payroll_id, s.employee_id, s.nip, s.name, '+es+
                   's.department, s.employeestatus, s.position, '+es+
                   'coalesce(a.saldo,0) as awal, s.iuran_koperasi, '+es+
                   's.p_koperasi, coalesce(a.saldo,0)+s.iuran_koperasi-s.p_koperasi as saldo, '+es+
                   'k.sisa, s.tdate '+es+
                   'from v_summary s '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(amount) as saldo '+es+
                   '  from t_ad '+es+
                   '  where tdate<'''+date2sql(startdate)+''' and salary_id in (356) '+es+
                   '  group by employee_id '+es+
                   ') a on s.employee_id= a.employee_id '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(sisa) as sisa '+es+
                   '  from t_loan '+es+
                   '  where tipe=''Koperasi'' '+es+
                   '  group by employee_id '+es+
                   ') k on s.employee_id= k.employee_id '+es+
                   'where s.tdate>='''+date2sql(startdate)+''' and s.tdate<='''+date2sql(enddate)+'''');
  if LookupQuery('Choose Payroll', Q, 800, True, '', '' ) = false then exit;

  ShowProgressbar;
  Q.First;
  while not Q.Eof do
  begin
    SetProgressbarDefault(Q);
    Q_Koperasi.Query('select s.payroll_id, s.employee_id, s.nip, s.name, '+es+
                   's.department, s.employeestatus, s.position, '+es+
                   'coalesce(a.saldo,0) as awal, s.iuran_koperasi, '+es+
                   's.p_koperasi, coalesce(a.saldo,0)+s.iuran_koperasi-s.p_koperasi as saldo, '+es+
                   'k.sisa, s.tdate '+es+
                   'from v_summary s '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(amount) as saldo '+es+
                   '  from t_ad '+es+
                   '  where tdate<'''+date2sql(startdate)+''' and salary_id in (356) '+es+
                   '  group by employee_id '+es+
                   ') a on s.employee_id= a.employee_id '+es+
                   'left join ( '+es+
                   '  select employee_id, sum(sisa) as sisa '+es+
                   '  from t_loan '+es+
                   '  where tipe=''Koperasi'' '+es+
                   '  group by employee_id '+es+
                   ') k on s.employee_id= k.employee_id '+es+
                   'where s.payroll_id='''+Q.getFieldString('payroll_id')+''' ');
    ExportReportToPDF(FR_Koperasi, 'C:\xampp\htdocs\mtg\assets\slipkoperasi\' +
                                        'SLIPKOPERASI_' +
                                        q_koperasi.getFieldString('nip') + '_' +
                                        LeftStr( replace( q_koperasi.date2sql('tdate'), '-', '') ,6) + '.pdf' );

    Q.Next;
    HideProgressbar;
  end;

  q.Free;
end;

end.
