unit UAd;

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
  cxDataControllerConditionalFormattingRulesManagerDialog, Vcl.Grids,
  Vcl.DBGrids, QImport3, QImport3Xlsx;

type
  TFrmAd = class(TForm)
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
    MASTERad_id: TcxGridDBBandedColumn;
    MASTERtdate: TcxGridDBBandedColumn;
    MASTERemployee_id: TcxGridDBBandedColumn;
    MASTERnip: TcxGridDBBandedColumn;
    MASTERsalary_id: TcxGridDBBandedColumn;
    MASTERamount: TcxGridDBBandedColumn;
    MASTERdescription: TcxGridDBBandedColumn;
    MASTERcompany_id: TcxGridDBBandedColumn;
    MASTERdivision_id: TcxGridDBBandedColumn;
    MASTERdepartment_id: TcxGridDBBandedColumn;
    MASTERworkarea_id: TcxGridDBBandedColumn;
    MASTERposition_id: TcxGridDBBandedColumn;
    MASTERemployeestatus_id: TcxGridDBBandedColumn;
    MASTERuseradded: TcxGridDBBandedColumn;
    MASTERdateadded: TcxGridDBBandedColumn;
    MASTERuseredited: TcxGridDBBandedColumn;
    MASTERdateedited: TcxGridDBBandedColumn;
    DS_Employee: TDataSource;
    Q_Employee: TZQuery;
    Q_Salary: TZQuery;
    DS_Salary: TDataSource;
    N1ImportFromExcel1: TMenuItem;
    ApplicationEvents1: TApplicationEvents;
    MASTERlevel_id: TcxGridDBBandedColumn;
    N2ImportALL1: TMenuItem;
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

    procedure IsiSKolom(idm, tn:String);
    procedure ImportFromExcel1Click(Sender: TObject);
    procedure ImportExcel(idm, tn, sheet : string; qe:tzquery);
    procedure afterPost(tn:string; qm : tzquery);
    procedure beforePost(tn:string;qm : tzquery);
    procedure MASTERemployee_idPropertiesPopup(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N2ImportALL1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmAd: TFrmAd;
  DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmAd.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmAd.cekAllEditModule(idm:integer);
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
procedure TFrmAd.isiALLTableKolom;
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
procedure TFrmAd.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmAd.FormCreate(Sender: TObject);
begin
  isDebug            := True;
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
procedure TFrmAd.SettingQuery;
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
  setColumnWidth(txtid.Text, q_master, master, false);
  StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmAd.ReloadClick;
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
procedure TFrmAd.SettingFont;
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
procedure TFrmAd.ValidasiControl;
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
procedure TFrmAd.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmAd.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmAd.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmAd.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmAd.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmAd.MenuItem1Click(Sender: TObject);
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
procedure TFrmAd.OneMonth1Click(Sender: TObject);
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

procedure TFrmAd.NextMonth1Click(Sender: TObject);
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
procedure TFrmAd.PrevMonth1Click(Sender: TObject);
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
procedure TFrmAd.OneYear1Click(Sender: TObject);
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
procedure TFrmAd.PopupMenuPopup(Sender: TObject);
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
procedure TFrmAd.OneDay1Click(Sender: TObject);
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
procedure TFrmAd.oday1Click(Sender: TObject);
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
procedure TFrmAd.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmAd.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmAd.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmAd.getFocusTableName : String;
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
function TFrmAd.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmAd.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmAd.AutoActiveQuery;
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
procedure TFrmAd.AutoRefreshQuery;
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
function TFrmAd.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmAd.IsiSKolom(idm, tn:String);
var
  q1, q2 : tzquery;
begin
  q1 := createquery;
  q2 := createquery;
  q1.Query('show columns from '+tn+' ');
  q1.First;
  while not q1.Eof do
  begin
    q2.Query('select * from s_kolom '+es+
                        'where columnname='''+q1.getColumnString(0)+''' and '+es+
                        '`tablename`='''+tn+''' ');
    if q2.RecordCount > 0 then q2.Edit else q2.Append;
    q2.setField('id_module', idm );
    q2.setField('tablename', tn );
    q2.setField('no', q1.RecNo );
    q2.setField('columntype', q1.getColumnString(1) );
    q2.SetField('columnname', q1.getColumnString(0) );
    q2.Post;
    q1.Next;
  end;
  q1.Free;
  q2.Free;
end;
procedure TFrmAd.ImportFromExcel1Click(Sender: TObject);
var
  AdaSh : Boolean;
  idm, sheet, fn, tn, psn : string;
  qe : tzquery;
  x : integer;
  z : tzconnection;
  tsS : TStringList;
Label
  LabelError, LabelOK;
begin
  z  := TZConnection.Create(FrmAd);
  qe := createquery;
  tsS:= tstringlist.Create;
  idm:= '13';// inttostr(getQueryByName(getFocusGridView.Name).Tag);
  tn := getTable(idm);
  IsiSKolom(idm, tn);

  fn := FileOpenDialog('Excel Files 2007 (*.xlsx)|*.xlsx|Excel Files 2003 (*.xls)|*.xls');
  psn:= 'Can''t Connect to Excel File';
  if ConnectExcel2(fn, z) = false then Goto LabelError;

  psn:= 'This Module is Not Allowed to Import';
  qe.Query('select * from s_sheet where tablename='''+tn+''' and id_module='''+idm+''' ');
  if qe.RecordCount = 0 then Goto LabelError;

  sheet := qe.getFieldString('name');
  AdaSh := False;
  tss.clear;
  z.GetTableNames('', tsS);
  for x := 0 to tsS.Count-1 do
  begin
    if lowercase(sheet) = lowercase(tsS.strings[x]) then AdaSh := true;
  end;
  psn:= 'Sheet "'+replace(sheet, '$', '')+'" Not Found in Excel';
  if AdaSh = False then Goto LabelError;

  psn:= 'Cancel';
  qe.QueryExcel2('select * from ['+sheet+']', z); //select dari excel
  if LookupQuery('Choose Data From Excel', qe, 800, true, '', '',false) =false then Goto LabelError;

  ImportExcel(idm, tn, sheet, qe);
  psn:= 'Finished';
  Goto LabelOK;
LabelError:
  DisconnetExcel2(z);
  qe.Free;
  z.Free;
  tsS.Free;
  MsgError(Psn);
  exit;
LabelOK:
  DisconnetExcel2(z);
  qe.Free;
  z.Free;
  tsS.Free;
  ReloadClick;
  MsgOK(Psn);
end;
procedure TFrmAd.ImportExcel(idm, tn, sheet : string; qe:tzquery);
var
  qc, qm, qk, ql : tzquery;
  tsk, tse : tstringlist;
  x : integer;
  sqllookup, cn, tk, lfn, kfn, kn, ke, sy, pr : string;
  isNew : Boolean;
  nip : string;
begin
  ShowProgressbar;
  qc := CreateQuery;
  qk := CreateQuery;
  qm := CreateQuery;
  ql := CreateQuery;
  tsk:= TStringlist.Create;
  tse:= TStringlist.Create;
  qc.Query('select * from s_kolom where id_module='''+idm+''' and '+es+
                 '`tablename`='''+tn+''' and `_visible`=1 and '+es+
                 '( isnull(tipekolom) or tipekolom not in (''blob'', ''photo'') ) '+es+
                 'order by tablename, no');
  ClearErrorList;
  tsk.Clear;
  tse.Clear;
  qc.First;
  while not qc.Eof do
  begin
    if qc.getFieldInteger('unique') = 1 then tsk.add(qc.getFieldString('columnname'));
    qc.next; //ambil yang unique = 1 di s_kolom buat di where
  end;
  qe.First;
  while not qe.Eof do
  begin //pengulangan isi excel
    SetProgressbarDefault(qe);
    //qe.edit;
//    if qe.getfieldstring('nip').Length<> 7 then
//    begin
//      qe.setField('nip', '1' + FormatFloat('00000#', qe.getFieldInteger('nip')));
//    end;
//    nip := qe.getfieldstring('nip');

    //qe.Post;

    sy := '';
    pr := '';
    for x := 0 to tsk.count -1 do
    begin //buat ambil where dan isinya
      qk.Query('select * from s_kolom where tablename='''+tn+''' and columnname='''+tsk.Strings[x]+''' ');
      if qk.RecordCount > 0 then
      begin
        kn := qk.getFieldString('columnname');
        ke := qk.getFieldString('columnexcel');
        if lowercase(qk.getFieldString('tipekolom')) ='date' then
        begin
          sy := sy + ' and ' + kn + '=''' + qe.date2sql(ke) + ''' ';
        end else
        begin
          sy := sy + ' and ' + kn + '=''' + qe.getFieldString(ke) + ''' ';
        end;
        pr := pr + UpperCase(ke) + ':"' + qe.getFieldString(ke) + '", ';
      end;
    end;
    qm.Query('select * from '+tn+es+
             'where  (0=0) '+sy+' ');  //select ke table mysql
    if qm.RecordCount = 0 then
    begin
      qm.Append;
      isNew := true;
      isiKolomUser(isNew, qm);
    end else
    begin
      qm.edit;
      isNew := False;
      isiKolomUser(isNew, qm);
    end;
    qc.First;
    while not qc.Eof do
    begin
      kn := qc.getFieldString('columnname');
      cn := qc.getFieldString('captionname');
      ke := qc.getFieldString('columnexcel');
      tk := qc.getFieldString('tipekolom');
      tk := lowercase(tk);
      lfn:= qc.getFieldString('listfieldnames');
      kfn:= qc.getFieldString('keyfieldnames');
      sqllookup := qc.getFieldString('isi');
      if ke <> '' then
      begin //begin ke <> ''
      if ( qe.isNull(ke) ) or (qe.getFieldString(ke)='') then
      begin
        qm.setField(kn, null);
      end else
      begin
        try
          if (tk = '') or (tk = 'combobox') or (tk = 'memo') or (tk = 'memo2') then qm.setField(kn, trim(qe.getField(ke)) );
          if (tk = 'calc0') or (tk = 'calc2') or (tk = 'calc4') then qm.setField(kn, qe.getFieldDouble(ke));
          if (tk = 'spin') then qm.setField(kn, qe.getFieldInteger(ke));
          if (tk = 'month') or (tk = 'date') or (tk = 'datetime') then qm.setField(kn, qe.getFieldDateTime(ke) );
          if (tk = 'time') then
          begin
            qm.setField(kn, trim(qe.getFieldString(ke)) );
          end;
          if (tk = 'checkbox') then
          begin
            if lowercase(trim(qe.getFieldString(ke))) = 'active' then qm.setField(kn, '1') else qm.setField(kn, '0');
          end;
          if tk = 'lookup' then
          begin
            {if (tn='m_employee_salary') and (kn='salary_id') then
            begin
              sqllookup := Replace(sqllookup, '$syarat', ' '+lfn+'='''+qe.getField(ke)+''' and tables=''m_employee_salary'' ');
            end else
            begin}
              sqllookup := Replace(sqllookup, '$syarat', ' '+lfn+'='''+qe.getField(ke)+''' ');
            //end;
            ql.Query(sqllookup);
            if ql.RecordCount = 0 then ql.Append else ql.Edit;
            ql.setField(lfn, qe.getField(ke) );
            ql.Post;
            qm.setField(kn, ql.getField(kfn));
          end;
        except
          on E : Exception do begin tse.Add('Data No : '+qe.RecNoStr+', '+pr+', Column Name :"'+cn+'", ['+e.Message+']'); end;
        end;
      end;
      end;//end ke <> ''
      qc.next;
    end;

    qm.Edit;
    if (qm.isFieldExist('nip')) then
    begin
      if qm.getfieldstring('nip').Length<> 7 then
      begin
        qm.setField('nip', '1' + FormatFloat('00000#', qm.getFieldInteger('nip')));
      end;
      nip := qm.getfieldstring('nip');
    end;
    qm.Post;

    //dbg(tn);
    if tn <> 'm_employee' then
    begin
      if (qm.isFieldExist('employee_id')) and (qm.isFieldExist('nip')) then
      begin
        //pesan('select employee_id from m_employee where nip='''+qm.getFieldString('nip')+''' ');
        qm.setField('employee_id', getQValueInteger('select employee_id from m_employee where nip='''+qm.getFieldString('nip')+''' ') );
      end;
    end;

    //dbg('1');
    try
      if (tn = 't_attendance') or (tn = 't_ad') then
      begin
        if payrollNotExist(qm.getFieldString('employee_id'), qm.getFieldDateTime('tdate')) then
        begin
          beforePost(tn, qm);
          if qm.getFieldInteger('employee_id') > 0 then
          begin
            if tn='t_ad' then
            begin
              qm.Post
              //if qm.getfielddouble('amount') <> 0 then qm.Post else qm.Cancel;
            end else
            begin //t_attendance
              qm.Post;
            end;
          end else
          begin
            tse.Add('Data No : '+qe.RecNoStr+', NIP : '+qm.getFieldString('nip')+' tidak Ditemukan pada Employee Data ');
          end;
          afterPost(tn, qm);
        end else
        begin
          tse.Add('NIP : '+qm.getFieldString('nip')+', Date : '+FormatDateTime('dd MMM yyyy', qm.getFieldDateTime('tdate'))+' [Payroll Already Exist]');
        end;
      end else
      begin
        //dbg('2');
        if tn = 'm_employee' then
        begin
          if isNew then qm.setField('password', defaultPassword(qm) ) else
          begin
            if qm.getFieldString('password') = '' then qm.setField('password', defaultPassword(qm) );
          end;

          qm.setField('showpassword', Decrypt(qm.getFieldString('password')) );
        end;
        //dbg('3');
        beforePost(tn, qm);
        //dbg('4');
        qm.Post;
        //dbg('5');
        afterPost(tn, qm);
        //dbg('6');
      end;
    except
      on E : Exception do begin tse.Add('Data No : '+qe.RecNoStr+', '+pr+', ['+e.Message+']'); end;
    end;

    qe.Next;
  end;
  qc.Free;
  qk.Free;
  qm.Free;
  ql.Free;
  tsk.Free;
  HideProgressbar;
  if tse.Count > 0 then
  begin
    AddErrorListFromTS(tse);
    ShowError;
    tse.Free;
  end else
  begin
    tse.free;
  end;
end; //end import

procedure TFrmAd.afterPost(tn:string; qm : tzquery);
begin
  tn := lowercase(tn);
  if tn='m_employee_mutation' then
  begin
    updateEmployeeFromMutation(qm.getFieldString('employee_id'))
  end;
end;
procedure TFrmAd.beforePost(tn:string;qm : tzquery);
var
  qem : tzquery;
begin
  qem:= createquery;
  tn := lowercase(tn);
  if (tn='t_ad') then
  begin
    qem.Query('select * from m_employee where '+gets('employee_id', qm)+' ');
    if qem.RecordCount > 0 then
    begin
      qm.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,level_id,'+
                        'department_id,workarea_id,employeestatus_id', qem);
    end;
  end;
  if tn='t_attendance' then
  begin
    qem.Query('select * from m_employee where '+gets('employee_id', qm)+' ');
    if qem.RecordCount > 0 then
    begin
      qm.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,workarea_id,level_d=id,'+
                            'employeestatus_id,overtime_id,dayoff', qem);
    end;
    //beforepostAttendance(qm, false);
  end;
  if tn = 'm_employee_mutation' then
  begin
    CheckIsFirstMutation(qm);
  end;
  qem.Free;
end;

function TFrmAd.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmAd.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmAd.actLookupExecute(Sender: TObject);
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
procedure TFrmAd.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmAd.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmAd.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmAd.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmAd.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmAd.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmAd.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmAd.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmAd.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmAd.ppFreezeClick(Sender: TObject);
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
procedure TFrmAd.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmAd.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmAd.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmAd.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmAd.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmAd.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmAd.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmAd.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmAd.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmAd.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmAd.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmAd.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmAd.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmAd.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmAd.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmAd.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmAd.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmAd.ApplicationEvents1Exception(Sender: TObject; E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmAd.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmAd.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmAd.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmAd.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmAd.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', serverdate);
  q_master.setField('amount', '0');
end;
procedure TFrmAd.beforePostMaster;
begin
  if PayrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Can''t Save Record, Already Have Payroll');
    abort;
    exit;
  end;
end;
procedure TFrmAd.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmAd.beforeEditMaster;
begin
  //
end;
procedure TFrmAd.beforeDeleteMaster;
begin
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Already Has Payroll for This Periode');
    abort;
    exit;
  end;
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmAd.afterDeleteMaster;
begin
  //
end;
procedure TFrmAd.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmAd.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmAd.LookupADEmployee_id;
var
  Q : TZQuery;
  kolom, syarat, s : String;
begin
  s := '';
  s := InputBox('Input Employee Name', 'Search', s);
  kolom := '*';
  syarat:= ' (0=0) ';
  Q := createquery;
  q.Query('select * from s_lookup where tablename=''t_ad'' and columnname=''employee_id'' ');
  if q.RecordCount > 0 then
  begin
    kolom := q.getFieldString('kolom');
    syarat:= q.getFieldString('syarat');
  end;
  {Q.Query(getSecurity2(txtid.Text,
             'select '+kolom+' from m_employee where $security and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             'order by name ' ));}
  Q.Query('select '+kolom+' from m_employee where '+getsecurity(txtid.Text)+' '+es+
             'and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             'order by name ');
  if LookupQuery('Choose Employee', Q, 800, False, '', 'm_employee') then
  begin
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,level_id,'+
                            'department_id,workarea_id,employeestatus_id', Q );
  end;
  Q.free;
end;

procedure TFrmAd.N2ImportALL1Click(Sender: TObject);
begin
  //
//  q_import.Active := false;
//  QImport.Execute;
//  q_import.Active := true;
end;
end.
