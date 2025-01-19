unit UTHR;

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
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, cxSplitter, Vcl.AppEvnts,
  dxSkinMetropolis, dxSkinMetropolisDark, dxSkinOffice2013DarkGray,
  dxSkinOffice2013LightGray, dxSkinOffice2016Colorful, dxSkinOffice2016Dark,
  dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light, dxBarBuiltInMenu,
  cxDataControllerConditionalFormattingRulesManagerDialog;

type
  TFrmTHR = class(TForm)
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
    MASTERemployee_id: TcxGridDBBandedColumn;
    actDBG: TAction;
    N2ImportTHR1: TMenuItem;
    ApplicationEvents1: TApplicationEvents;
    QM_Master: TZQuery;
    DataSource4: TDataSource;
    frxDBDataset7: TfrxDBDataset;
    FR_SlipManager: TfrxReport;
    frxDBDataset5: TfrxDBDataset;
    DataSource3: TDataSource;
    QM_Detail1: TZQuery;
    QM_Detail2: TZQuery;
    DataSource2: TDataSource;
    frxDBDataset6: TfrxDBDataset;
    N1PreviewTHRSLIP1: TMenuItem;
    N2ExportTHRSLIP1: TMenuItem;
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

    procedure getTHR(qp : tzquery);
    procedure HitungPajak(qp : tzquery);
    procedure actDBGExecute(Sender: TObject);
    procedure N2ImportTHR1Click(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N1PreviewTHRSLIP1Click(Sender: TObject);
    procedure N2ExportTHRSLIP1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmTHR: TFrmTHR;
  DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport, ULookup;
//form close, form create
procedure TFrmTHR.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmTHR.cekAllEditModule(idm:integer);
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
procedure TFrmTHR.isiALLTableKolom;
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
procedure TFrmTHR.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmTHR.FormCreate(Sender: TObject);
begin
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
  isdebug:=true;
end;
procedure TFrmTHR.SettingQuery;
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
  setColumnWidth(txtid.Text, q_master, master);
  StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmTHR.ReloadClick;
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
procedure TFrmTHR.SettingFont;
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
procedure TFrmTHR.ValidasiControl;
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
procedure TFrmTHR.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmTHR.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTHR.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmTHR.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTHR.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmTHR.MenuItem1Click(Sender: TObject);
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
procedure TFrmTHR.OneMonth1Click(Sender: TObject);
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

procedure TFrmTHR.NextMonth1Click(Sender: TObject);
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
procedure TFrmTHR.PrevMonth1Click(Sender: TObject);
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
procedure TFrmTHR.OneYear1Click(Sender: TObject);
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
procedure TFrmTHR.PopupMenuPopup(Sender: TObject);
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
procedure TFrmTHR.OneDay1Click(Sender: TObject);
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
procedure TFrmTHR.oday1Click(Sender: TObject);
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
procedure TFrmTHR.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmTHR.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmTHR.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmTHR.getFocusTableName : String;
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
function TFrmTHR.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmTHR.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmTHR.AutoActiveQuery;
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
procedure TFrmTHR.AutoRefreshQuery;
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
function TFrmTHR.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmTHR.ImportFromExcel1Click(Sender: TObject);
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

function TFrmTHR.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmTHR.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmTHR.actLookupExecute(Sender: TObject);
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
procedure TFrmTHR.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmTHR.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmTHR.actDBGExecute(Sender: TObject);
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

procedure TFrmTHR.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmTHR.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmTHR.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmTHR.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmTHR.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmTHR.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmTHR.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmTHR.ppFreezeClick(Sender: TObject);
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
procedure TFrmTHR.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmTHR.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmTHR.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmTHR.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmTHR.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmTHR.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmTHR.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTHR.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmTHR.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTHR.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTHR.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmTHR.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTHR.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmTHR.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmTHR.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmTHR.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmTHR.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmTHR.ApplicationEvents1Exception(Sender: TObject; E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmTHR.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmTHR.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmTHR.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmTHR.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmTHR.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', serverdate);
end;
procedure TFrmTHR.beforePostMaster;
var
  kolom : string;
  qe : tzquery;
begin
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
  kolom := getQValueString('select kolom from s_lookup where tablename=''t_thr'' and columnname=''employee_id'' ');
  qe    := createquery;
  qe.Query('select '+kolom+' from m_employee where '+gets('employee_id', q_master)+' ');
  if qe.RecordCount > 0 then
  begin
    q_master.SetMultiFieldQ('employee_id,nip,joindate,resigndate,company_id,'+
                      'division_id,position_id,department_id,'+
                      'workarea_id,employeestatus_id,level_id', qe );
  end;
  qe.Free;

  q_master.setField('npwpemployee', getQValueString('select npwp from m_employee where '+
                              gets('employee_id', q_master)+' '));
  q_master.setmultifield('taxallowance,pph21,takehomepay','0');
  getTHR(Q_Master);
  HitungPajak(Q_Master);
  q_master.setField('takehomepay', q_master.getFieldDouble('taxallowance')+
                                   q_master.getFieldDouble('amount')-
                                   q_master.getFieldDouble('pph21') );
end;
procedure TFrmTHR.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmTHR.beforeEditMaster;
begin
  //
end;
procedure TFrmTHR.beforeDeleteMaster;
begin
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmTHR.afterDeleteMaster;
begin
  //
end;
procedure TFrmTHR.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmTHR.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmTHR.LookupADEmployee_id;
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
  Q.Query('select '+kolom+' from m_employee where '+getsecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             'order by name ' );
  if LookupQuery('Choose Employee', Q, 800, False, '', 'm_employee') then
  begin
    Q_Master.SetMultiFieldQ('employee_id,nip,joindate,resigndate,company_id,'+
                      'division_id,position_id,department_id,'+
                      'workarea_id,employeestatus_id,level_id', q );
    Q_Master.SetMultiField('masakerja,basethr,taxallowance,pph21,takehomepay', '0');
    Q_Master.setField('npwpemployee', q.getFieldString('npwp'));
    Q_Master.setField('salary_id', '50');
    getTHR(Q_Master);
    HitungPajak(Q_Master);
  end;
  Q.free;
end;
procedure TFrmTHR.N1CreateTHR1Click(Sender: TObject);
var
  qe, qk, qp : TZQuery;
  kolom, syarat, s : String;
  lb, dt : tdatetime;
  joingaji, selisih, x : integer;
  strJoin, sdsql, edsql, dtsql, lebaran,
  tgljoin, tglresign, tglcutoff : string;
  tserror : tstringlist;
begin
  {if getQValueInteger('select count(*) from t_payroll where '+es+
                      '  '+gets('employee_id', q_master)+' and '+es+
                      ' tdate > '''+date2sql(enddate)+''' ') > 0 then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;}
  lebaran := ComboForm('Isi Tgl Lebaran', 'tanggal');
  if lebaran = '' then exit;

  dtsql := ComboForm('Isi Tgl Dibagikan THR', 'tanggal');
  if dtsql = '' then exit;

  tgljoin := ComboForm('Isi Maksimal Joindate', 'tanggal');
  if tgljoin = '' then exit;

  tglresign := ComboForm('Isi Minimal Resigndate', 'tanggal');
  if tglresign = '' then exit;

  tglcutoff := ComboForm('Isi Cut Off Batas Masa Kerja', 'tanggal');
  if tglcutoff = '' then exit;

  joingaji := 0;
  strJoin  := 'NO';
  if confirm('THR Join Gaji ?') = 'YES' then
  begin
    joingaji := 1;
    strJoin  := 'YES'
  end;


  s := '';
  s := InputBox('Cari Nama Employee', 'Search', s);
  qe := createquery;
  tserror := tstringlist.Create;
  tserror.Clear;
  ClearErrorList;
  kolom := '*';
  syarat:= ' (0=0) ';
  qe.Query('select * from s_lookup where tablename=''t_thr'' and columnname=''employee_id'' ');
  if qe.RecordCount > 0 then
  begin
    kolom := qe.getFieldString('kolom');
    syarat:= qe.getFieldString('syarat');
  end;
  //msgok(lebaran);
  {s := 'select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' and '+es+
             'joindate<=date_add('''+lebaran+''', interval -38 day) and '+es+
             '( isnull(resigndate) or resigndate>='''+getQValueString('select value from s_setting where name=''paramthr1'' ')+''' )  '+es+
             'order by name ';  }
  {s := 'select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' and level_id not in (10,11,12,13) and '+es+
             'joindate<=date_add('''+lebaran+''', interval -40 day) and idtype<>''xx'' and '+es+
             '( isnull(resigndate) or resigndate>=date_add('''+lebaran+''', interval -40 day) )  '+es+
             'order by name ';}
  {s := 'select '+kolom+' '+es+
             'from m_employee e '+es+
             'left join m_department d on e.department_id=d.department_id '+es+
             'left join m_level l on e.level_id=l.level_id '+es+
             'where '+getSecurity(txtid.Text)+' and e.name like ''%'+s+'%'' '+es+
             'and '+syarat+' and '+es+
             'e.joindate<=date_add('''+lebaran+''', interval -30 day) '+es+
             'and e.idtype<>''xx'' and '+es+
             'and e.level_id not in (10, 11, 12, 13, 14, 21, 22) and '+es+
             '( isnull(e.resigndate) or e.resigndate>=date_add('''+lebaran+''', interval -30 day) )  '+es+
             'order by l.level, d.name, e.name ';}
  s := 'select '+kolom+' '+es+
             'from m_employee e '+es+
             'left join m_department d on e.department_id=d.department_id '+es+
             'left join m_level l on e.level_id=l.level_id '+es+
             'where '+getSecurity(txtid.Text)+' and e.name like ''%'+s+'%'' '+es+
             'and '+syarat+' and '+es+
             'e.joindate<='''+tgljoin+''' '+es+
             'and e.idtype<>''xx'' and employeestatus_id<>''4'' '+es+
             'and e.level_id in (select level_id from m_level where level=''Non Manager'' ) and '+es+
             '( isnull(e.resigndate) or e.resigndate>='''+tglresign+''' )  '+es+
             'order by l.level, d.name, e.name ';

             //'and e.level_id in (10, 11, 22) and '+es+
             //'and e.level_id not in (10, 11, 12, 13, 14, 21, 22) and '+es+
  pesan(s);
  qe.Query(s);

  if LookupQuery('Pilih Employee', qe, 800, True, '', 'm_employee') =False then
  begin
    qe.Free;
    exit;
  end;
  dt := Str2Date(dtsql);
  lb := Str2Date(lebaran);
  if Confirm('Konfirmasi '+es+
             'Tgl Lebaran : '+formatdatetime('dd MMMM yyyy',lb)+es+
             'Tgl Dibagikan THR : '+formatdatetime('dd MMMM yyyy',Dt)+es+
             'Tgl Maksimal Join : '+formatdatetime('dd MMMM yyyy', str2date(tgljoin) )+es+
             'Tgl Minimal Resign : '+formatdatetime('dd MMMM yyyy', str2date(tglresign) )+es+
             'Tgl Cut Off : '+formatdatetime('dd MMMM yyyy', str2date(tglcutoff) )+es+
             'Joingaji : '+strJoin+es+
             'Total Karyawan : '+qe.RecordCountStr+
             '') <> 'YES' then
  begin
    qe.Free;
    exit;
  end;
  //dbg(addDays(lb, -30));
  showprogressbar;
  qp := createquery;
  qk := createquery;
  qe.First;
  while not qe.Eof do
  begin
    SetProgressbar('Processing '+qe.getFieldString('name')+' '+
                      FormatDateTime('dd MMM yyyy', dt)+' '+
                      inttostr(qe.RecNo)+'/'+inttostr(qe.RecordCount),
                   (qe.RecNo*100) div qe.RecordCount );
    if PayrollNotExist(qe.getFieldString('employee_id'), dt) then
    begin
      qp.Query('select * from t_thr where '+gets('employee_id', qe)+' '+Es+
               'and month(tdate)=month('''+dtsql+''') and year(tdate)=year('''+dtsql+''') ');
      if qp.RecordCount > 0 then
      begin
        isNewRecord[strtoint(txtID.Text)] := False;
        qp.Edit;
        isiKolomUser(False, qp);
      end else
      begin
        qp.Append;
        isiKolomUser(True, qp);
        qp.SetMultiField('joingaji,masakerja,basethr,taxallowance,amount,pph21,takehomepay', '0');
        isNewRecord[strtoint(txtID.Text)] := True;
      end;
      qp.SetMultiFieldQ('employee_id,nip,resigndate,company_id,overtime_id,'+
                        'division_id,position_id,department_id,bankaccountname,'+
                        'workarea_id,employeestatus_id,level_id,bankaccountnumber', qe );
      qp.setField('level', getQValueString('select level from m_level where '+gets('level_id', qp)+' '));
      if qp.getFieldInteger('overtime_id')=27 then
      begin
        qp.setField('joindate', qe.getfield('joindate'));
      end else
      if qp.getFieldInteger('overtime_id')=28  then
      begin
        qp.setField('joindate', qe.getfield('startcontract1'));
      end;

      qp.setField('npwpemployee', qe.getFieldString('npwp'));
      qp.setField('salary_id', '50');
      qp.setField('joingaji', joingaji);
      qp.setField('tdate', dt);
      qp.setField('lebaran', lb);
      qp.setField('cutoff', str2date(tglcutoff) );
      qp.setField('tipe', 'Cash');
      if Length(qp.getFieldString('bankaccountnumber')) = 10 then qp.setField('tipe', 'Transfer');
      getTHR(qp);
      HitungPajak(qp);
      qp.setField('takehomepay', qp.getFieldDouble('taxallowance')+
                                 qp.getFieldDouble('amount')-
                                 qp.getFieldDouble('pph21') );
      qp.Post;
    end else
    begin
      tserror.Add('NIP : '+qe.getFieldString('nip')+', Name : '+qe.getFieldString('name')+ '[ Payroll "'+FormatDateTime('mmm yyyy', dt)+'" Already Exist ]' );
    end;
    qe.Next;
  end;

  qp.Free;
  qk.Free;
  qe.Free;
  ExecuteSQL('delete from t_thr where month(tdate)=month('''+dtsql+''') and '+es+
             'year(tdate)=year('''+dtsql+''') and masakerja<1 ');
  ReloadClick;
  hideprogressbar;
  if tserror.Count > 0 then
  begin
    AddErrorListFromTS(tserror);
    ShowError;
    tserror.Free;
  end else
  begin
    tserror.free;
  end;
end;
procedure TFrmTHR.getTHR(qp : tzquery);
var
  joindate : tdatetime;
  gajipokok, thr, masakerja : Double;
  //d1, m1, y1, d2, m2, y2 : word;
begin
  //if isNewRecord[strtoint(txtID.Text)] = false then
  {gajipokok := getqvalueDouble('select coalesce(sum(m_employee_salary.amount ),0) as amount '+es+
                  'from m_employee_salary '+es+
                  'where '+gets('employee_id', qp)+' and tdate <='''+qp.date2sql('lebaran')+''' '+es+
                  'and active = 1 and salary_id in ( '+es+
                      'select salary_id from m_salary where tables=''m_employee_salary'' '+es+
                      ' and slipname in ( select slipname from m_thrbase where '+gets('workarea_id', qp)+' ) '+es+
                                                  ' ) group by employee_id'); }
  gajipokok := getqvalueDouble('select coalesce(sum(m_employee_salary.amount ),0) as amount '+es+
                  'from m_employee_salary '+es+
                  'where '+gets('employee_id', qp)+' and tdate <='''+qp.date2sql('lebaran')+''' '+es+
                  'and active = 1 and salary_id in ( '+es+
                      'select salary_id from m_salary where tables=''m_employee_salary'' '+es+
                      ' and slipname in ( select slipname from m_thrbase ) '+es+
                                                  ' ) group by employee_id');
  gajipokok := gajipokok + getqvalueDouble('select coalesce(sum(t_masakerja),0) as amount '+es+
                  'from t_summary '+es+
                  'where '+gets('employee_id', qp)+' and month(tdate)=5 and year(tdate)=2018 '+es+
                  'group by employee_id ');
  joindate  := qp.getFieldDateTime('joindate');
  //masakerja := selisihHari(joindate, addDays(qp.getFieldDateTime('lebaran'), -40) ) div 30;
  //dbg(selisihHari(joindate, qp.getFieldDateTime('cutoff') ));
  masakerja := selisihHari(joindate, qp.getFieldDateTime('cutoff') ) div 30;
  //DecodeDate(qp.getFieldDateTime('lebaran'), y2, m2, d2);
  if qp.isNotNull('resigndate') then
  begin
    if qp.date2sql('resigndate') <= qp.date2sql('cutoff') then
    begin
      //DecodeDate(qp.getFieldDateTime('resigndate'), y2, m2, d2);
      masakerja := selisihHari(joindate, qp.getFieldDateTime('resigndate')) div 30;
    end;
  end;
  //DecodeDate(joindate, y1, m1, d1);

  //masakerja := ((y2*12) + m2) - ((y1*12) + m1);
  //masakerja := masakerja + 1;
  //dbg(gajipokok);
  //dbg(masakerja);
  if masakerja <1 then masakerja := 0;
  if masakerja >= 12 then masakerja := 12;
  masakerja := masakerja + getQValueInteger('select value from s_setting where name=''paramthr'' ');
  thr       := (gajipokok/12) * masakerja;
  thr       := bulatkan(thr, 0);
  qp.setField('basethr', gajipokok);
  qp.setField('masakerja', masakerja);
  if isNewRecord[strtoint(txtID.Text)] then
  begin
    qp.setField('amount', '0' );
    qp.setField('amount', thr );
  end;

end;

procedure TFrmTHR.HitungPajak(qp : tzquery);
var
  bjab_pct, bjab_max, bjab_bln,
  taxIRImport, taxALImport :double;
  intQ1, q3, q_tarif, qh_payroll : tzquery;
  payrolldate : tdatetime;
  selesai, isTaxIR, isTaxALAD : Boolean;
  bulanpengali, taxIrregular, taxtype, cnt : integer;
  grossUp : double;
  totalincome, taxallowance, gross, gross_monthly, bonusthr,
  gross_yearly, gross_ytd, grossdeduct, grossdeduct_yearly, grossdeduct_ytd,
  totalgross, bjab, bjab2,
  pajakDenganTHR, pajakTanpaTHR, pajakTHR,
  jhtemployee, jhtemployee_yearly, jhtemployee_ytd, totaljhtemployee,
  jpsemployee, jpsemployee_yearly, jpsemployee_ytd, totaljpsemployee,
  totaltaxdeduct, nett, ptkp, pkp, pkpr, tax_yearly, tax_ytd, tax : double;
  {jamsostek,
  bonusthr2, bonusthrtaxallowance,
  totalgrossDenganTHR, totalgrossTanpaTHR, pphsdhdibayar,
   bpsYearly, totalBPS,
  taxYearly, totalgross : double;}
  function settingBulangPengali(eid:string; PayrollDate:tdatetime) : Integer;
  var
    q : tzquery;
    y1,month1,d1,y2,month2,d2, thn,bln,tgl : word;
  begin
    decodedate(payrolldate,thn,bln,tgl);
    //bln := bln + 1;
    if bln >= 12 then bln := 12;
    result := 13-bln;
    q := createquery;
    q.query('select resigndate from m_employee where employee_id='''+eid+ '''');
    if not q.isNull('resigndate') then
    begin
      decodedate(payrolldate,y1,month1,d1);
      decodedate(q.getfield('resigndate'),y2,month2,d2);
      if (y1=y2) and (month1=month2) then result :=1 else result := 13-bln;
    end  else
    begin
      result := 13-bln;
    end;
    q.Free;
  end;
  procedure SetBulanBjab;
  begin
    bjab_bln := 12;

    if formatdatetime('yyyy-MM', qh_payroll.getFieldDateTime('joindate') ) >
       formatdatetime('yyyy-01', payrolldate )  then
    begin
      //join di tahun ini
      if qh_payroll.isNotNull('resigndate') then
      begin
        //resigndate sudah diisi
        if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           formatdatetime('yyyy', payrolldate ) then
        begin
          bjab_bln := 1+MonthsBetween(qh_payroll.getFieldDateTime('joindate'), qh_payroll.getFieldDateTime('resigndate'));
        end;
      end else
      begin
        //resigndate kosong
        bjab_bln := 13 - strtoint( formatdatetime('MM', qh_payroll.getFieldDateTime('joindate') ) );
      end;
    end else
    begin
      if qh_payroll.isNotNull('resigndate') then
      begin
        //resigndate sudah diisi
        if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           formatdatetime('yyyy', payrolldate ) then
        begin
          bjab_bln := strtoint( formatdatetime('MM', qh_payroll.getFieldDateTime('resigndate') ) );
        end;
      end
    end;
    //dbg('bjab_bln : '+floattostr(bjab_bln));
  end;
  function getBiayaJabatan(amount: double): double;
  var
    a: double;
  begin
    a := amount * bjab_pct / 100;
    //if a > (bjab_max * 12 ) then a := bjab_max * 12;
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
    if qh_payroll.getfieldstring('npwpemployee') = '' then tarif := 'tarifnonnpwp';
    jumlahnilaipajak := amount;
    q3.query('select tdate from m_ptkp where tdate <= '''+date2sql(payrolldate)+''' order by tdate desc');
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
    intQ1.query('SELECT * FROM m_employeestatus WHERE employeestatus_id ='''+qh_payroll.getFieldString('employeestatus_id')+''' ');
    if intQ1.recordcount > 0 then
    begin
      if intQ1.getFieldInteger('tidakpotongbjab') > 0 then bjab3 := 0;
    end;
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
  procedure SetBiayaJabatan(Qt : tzquery; totalgrosstanpathr, thr : double) ;
  begin
    bjab   := getBiayajabatan(totalgrosstanpathr);
    bjab2  := getBiayajabatan(thr);
    intQ1.query('SELECT * FROM m_employeestatus WHERE employeestatus_id ='''+qt.getFieldString('employeestatus_id')+''' ');
    if intQ1.recordcount > 0 then
    begin
      if intQ1.getFieldInteger('tidakpotongbjab') > 0 then
      begin
        bjab := 0;
        bjab2:= 0;
     end;
    end;
    if ((bjab+bjab2)<(bjab_max*bjab_bln)) then bjab2 := bjab2
    else bjab2 := (bjab_max*bjab_bln)-bjab;
  end;
  procedure sebelumTHR;
  begin
    repeat;
      totalincome := qh_payroll.getFieldDouble('totalincome');
      if isTaxALAD then taxallowance := taxALImport;
      gross             := totalincome + taxallowance +
                           qh_payroll.getFieldDouble('jkm')+
                           qh_payroll.getFieldDouble('jkk')+
                           qh_payroll.getFieldDouble('jkn');
      gross_monthly     := qh_payroll.getFieldDouble('grossmonthly');
      bonusthr          := 0;
      gross_yearly      := (gross*bulanpengali) + gross_monthly + bonusthr;
      gross_ytd         := getQvaluedouble('select sum(gross+grossmonthly+'+es+
                            'thrbonus+thrbonus2+thrbonustaxallowance) '+es+
                            'from t_payroll '+es+
                            'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+es+
                            'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'group by employee_id');
      grossdeduct       := qh_payroll.getFieldDouble('grossdeduct');
      grossdeduct_yearly:= grossdeduct * bulanPengali;
      grossdeduct_ytd   := getQValueDouble('select grossdeduct+grossdeduct_ytd '+es+
                            'from t_payroll '+es+
                            'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+es+
                            'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'order by tdate desc limit 1');
      totalgross        := gross_yearly+gross_ytd-
                           grossdeduct_yearly-grossdeduct_ytd;

      SetBiayaJabatan(qp, totalgross, bonusthr);
      jhtemployee       := qh_payroll.getFieldDouble('jhtemployee');
      jhtemployee_yearly:= jhtemployee * bulanpengali;
      jhtemployee_ytd   := getQvaluedouble('select sum(jhtemployee) from t_payroll '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+qp.getFieldString('employee_id')+''' '+
                          'group by employee_id');
      totaljhtemployee  := jhtemployee_yearly + jhtemployee_ytd;

      jpsemployee       := qh_payroll.getFieldDouble('jpsemployee');
      jpsemployee_yearly:= jpsemployee * bulanpengali;
      jpsemployee_ytd   := getQvaluedouble('select sum(jpsemployee) from t_payroll '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+qp.getFieldString('employee_id')+''' '+
                          'group by employee_id');
      totaljpsemployee  := jpsemployee_yearly + jpsemployee_ytd;
      totaltaxdeduct    := bjab+bjab2 + totaljhtemployee + totaljpsemployee;
      nett              := totalgross - totaltaxdeduct;
      ptkp              := qh_payroll.getFieldDouble('nontaxableincome');
      pkp               := nett - ptkp;
      if pkp <= 0 then pkp := 0;
      pkpr              := int(pkp/1000) * 1000;
      tax_yearly        := getPPh21(pkpr);
      pajakTanpaTHR     := tax_yearly;
      tax_ytd           := getQvaluedouble('select sum(tax21_irregular+tax21_monthly'+es+
                            '+thrbonustax+pph21sebelum) from t_payroll '+es+
                            'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+es+
                            'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'group by employee_id');

      tax               := bulatkan( (tax_yearly-tax_ytd)/bulanpengali, 0 );
      if tax < 0 then
      begin
        //ini kalo tax nya minus dan bukan bulan desember, maka pajak nol
        if strtoint(formatdatetime('mm', payrolldate)) < 12 then tax := 0;
        //ini kalo tax nya minus dan belum resign, maka pajak nol
        if qp.isNull('resigndate') then tax := 0 else
        begin
          //ini kalo tax nya minus dan sudah resign dan resign dibulan setelah payroll, maka pajak nol
          if qp.date2sql('resigndate') > date2sql(payrolldate) then tax := 0;
        end;
      end;
      if (bulanPengali = 1) or (qp.isNotNull('resigndate')) then
      begin  //ini kalo pengali satu ataupun sudah resign tapi pengali >=1, harus hitung sisa pajakny
        tax :=  tax_Yearly - getQvaluedouble('select sum(tax21_irregular+tax21_monthly'+es+
                            '+thrbonustax+pph21sebelum) from t_payroll '+es+
                            'where year(tdate) = year('''+date2sql(payrolldate)+''') and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'group by employee_id');
      end;

      if isTaxIR then tax := taxIRImport;

      {dbg('sebelum THR '+es+
          'bulanpengali : '+inttostr(bulanpengali)+es+
          'taxallowance : '+FormatFloat('#,##0', taxallowance)+es+
          'gross : '+FormatFloat('#,##0', gross)+es+
          'gross_monthly : '+FormatFloat('#,##0', gross_monthly)+es+
          'bonusthr : '+FormatFloat('#,##0', bonusthr)+es+
          'gross_yearly : '+FormatFloat('#,##0', gross_yearly)+es+
          'gross_ytd : '+FormatFloat('#,##0', gross_ytd)+es+
          'totalgross : '+FormatFloat('#,##0', totalgross)+es+
          'bjab : '+FormatFloat('#,##0', bjab+bjab2)+es+
          'totaljhtemployee : '+FormatFloat('#,##0', totaljhtemployee)+es+
          'totaljpsemployee : '+FormatFloat('#,##0', totaljpsemployee)+es+
          'totaltaxdeduct : '+FormatFloat('#,##0', totaltaxdeduct)+es+
          'nett : '+FormatFloat('#,##0', nett)+es+
          'ptkp : '+FormatFloat('#,##0', ptkp)+es+
          'pkp : '+FormatFloat('#,##0', pkp)+es+
          'pkpr : '+FormatFloat('#,##0', pkpr)+es+
          'tax_yearly : '+FormatFloat('#,##0', tax_yearly)+es+
          'tax_ytd : '+FormatFloat('#,##0', tax_ytd)+es+
          'tax : '+FormatFloat('#,##0', tax)+es+
          '');}

      if taxtype = 1 then selesai := true;
      if taxtype = 2 then
      begin
        if grossUp = tax then
        begin
          taxallowance    := tax;
          if isTaxALAD then taxallowance := taxALImport;
          selesai := true;
        end else
        begin
          taxallowance    := tax;
          if isTaxALAD then taxallowance := taxALImport;
          grossUp := tax;
        end;
      end;
      cnt := cnt + 1;
    until (selesai = true) or (cnt >= 100);
  end;
  procedure sesudahTHR;
  begin
    selesai := False;
    cnt := 0;
    repeat;
      totalincome := qh_payroll.getFieldDouble('totalincome');
      if isTaxALAD then taxallowance := taxALImport;
      gross             := totalincome + taxallowance +
                           qh_payroll.getFieldDouble('jkm')+
                           qh_payroll.getFieldDouble('jkk')+
                           qh_payroll.getFieldDouble('jkn');
      gross_monthly     := qh_payroll.getFieldDouble('grossmonthly');
      bonusthr          := qp.getFieldDouble('amount');
      gross_yearly      := (gross*bulanpengali) + gross_monthly + bonusthr;
      gross_ytd         := getQvaluedouble('select sum(gross+grossmonthly+'+es+
                            'thrbonus+thrbonus2+thrbonustaxallowance) '+es+
                            'from t_payroll '+es+
                            'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+es+
                            'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'group by employee_id');
      grossdeduct       := qh_payroll.getFieldDouble('grossdeduct');
      grossdeduct_yearly:= grossdeduct * bulanPengali;
      grossdeduct_ytd   := getQValueDouble('select grossdeduct+grossdeduct_ytd '+es+
                            'from t_payroll '+es+
                            'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+es+
                            'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'order by tdate desc limit 1');
      totalgross        := gross_yearly+gross_ytd-
                           grossdeduct_yearly-grossdeduct_ytd;

      SetBiayaJabatan(qp, totalgross, bonusthr);
      jhtemployee       := qh_payroll.getFieldDouble('jhtemployee');
      jhtemployee_yearly:= jhtemployee * bulanpengali;
      jhtemployee_ytd   := getQvaluedouble('select sum(jhtemployee) from t_payroll '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+qp.getFieldString('employee_id')+''' '+
                          'group by employee_id');
      totaljhtemployee  := jhtemployee_yearly + jhtemployee_ytd;

      jpsemployee       := qh_payroll.getFieldDouble('jpsemployee');
      jpsemployee_yearly:= jpsemployee * bulanpengali;
      jpsemployee_ytd   := getQvaluedouble('select sum(jpsemployee) from t_payroll '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+qp.getFieldString('employee_id')+''' '+
                          'group by employee_id');
      totaljpsemployee  := jpsemployee_yearly + jpsemployee_ytd;
      totaltaxdeduct    := bjab+bjab2 + totaljhtemployee + totaljpsemployee;
      nett              := totalgross - totaltaxdeduct;
      ptkp              := qh_payroll.getFieldDouble('nontaxableincome');
      pkp               := nett - ptkp;
      if pkp <= 0 then pkp := 0;
      pkpr              := int(pkp/1000) * 1000;
      tax_yearly        := getPPh21(pkpr);
      pajakDenganTHR    := tax_yearly;
      tax_ytd           := getQvaluedouble('select sum(tax21_irregular+tax21_monthly'+es+
                            '+thrbonustax+pph21sebelum) from t_payroll '+es+
                            'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+es+
                            'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'group by employee_id');
      tax               := RoundUp( (tax_yearly-tax_ytd)/bulanpengali, 0 );
      if tax < 0 then
      begin
        //ini kalo tax nya minus dan bukan bulan desember, maka pajak nol
        if strtoint(formatdatetime('mm', payrolldate)) < 12 then tax := 0;
        //ini kalo tax nya minus dan belum resign, maka pajak nol
        if qp.isNull('resigndate') then tax := 0 else
        begin
          //ini kalo tax nya minus dan sudah resign dan resign dibulan setelah payroll, maka pajak nol
          if qp.date2sql('resigndate') > date2sql(payrolldate) then tax := 0;
        end;
      end;
      if (bulanPengali = 1) or (qp.isNotNull('resigndate')) then
      begin  //ini kalo pengali satu ataupun sudah resign tapi pengali >=1, harus hitung sisa pajakny
        tax :=  tax_Yearly - getQvaluedouble('select sum(tax21_irregular+tax21_monthly'+es+
                            '+thrbonustax+pph21sebelum) from t_payroll '+es+
                            'where year(tdate) = year('''+date2sql(payrolldate)+''') and '+es+
                            'employee_id = '''+qp.getFieldString('employee_id')+''' '+es+
                            'group by employee_id');
      end;

      if isTaxIR then tax := taxIRImport;

      {dbg('sesudah THR '+es+
          'bulanpengali : '+inttostr(bulanpengali)+es+
          'taxallowance : '+FormatFloat('#,##0', taxallowance)+es+
          'gross : '+FormatFloat('#,##0', gross)+es+
          'gross_monthly : '+FormatFloat('#,##0', gross_monthly)+es+
          'bonusthr : '+FormatFloat('#,##0', bonusthr)+es+
          'gross_yearly : '+FormatFloat('#,##0', gross_yearly)+es+
          'gross_ytd : '+FormatFloat('#,##0', gross_ytd)+es+
          'totalgross : '+FormatFloat('#,##0', totalgross)+es+
          'bjab : '+FormatFloat('#,##0', bjab+bjab2)+es+
          'totaljhtemployee : '+FormatFloat('#,##0', totaljhtemployee)+es+
          'totaljpsemployee : '+FormatFloat('#,##0', totaljpsemployee)+es+
          'totaltaxdeduct : '+FormatFloat('#,##0', totaltaxdeduct)+es+
          'nett : '+FormatFloat('#,##0', nett)+es+
          'ptkp : '+FormatFloat('#,##0', ptkp)+es+
          'pkp : '+FormatFloat('#,##0', pkp)+es+
          'pkpr : '+FormatFloat('#,##0', pkpr)+es+
          'tax_yearly : '+FormatFloat('#,##0', tax_yearly)+es+
          'tax_ytd : '+FormatFloat('#,##0', tax_ytd)+es+
          'tax : '+FormatFloat('#,##0', tax)+es+
          '');}

      if taxIrregular = 1 then selesai := true;
      if taxIrregular = 2 then
      begin
        if grossUp = tax then
        begin
          taxallowance    := tax;
          if isTaxALAD then taxallowance := taxALImport;
          selesai := true;
        end else
        begin
          taxallowance    := tax;
          if isTaxALAD then taxallowance := taxALImport;
          grossUp := tax;
        end;
      end;
      cnt := cnt + 1;
    until (selesai = true) or (cnt >= 100);
  end;
  procedure processHitungPajak;
  begin
    //pajak diimport di t_ad
    taxALImport := 0;
    taxIRImport := 0;
    isTaxALAD   := False;
    isTaxIR     := False;
    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+qp.getFieldString('employee_id')+''' and '+es+
                'month(tdate) = month('''+qp.date2sql('tdate')+''') and '+es+
                'year(tdate) = year('''+qp.date2sql('tdate')+''')  and '+es+
                'salary_id = 320 group by employee_id'); //T. Pajak Irregular
    if intQ1.recordcount>0 then
    begin
      isTaxALAD   := True;
      taxALImport := intQ1.getFieldDouble('amount');
    end;
    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+qp.getFieldString('employee_id')+''' and '+es+
                'month(tdate) = month('''+qp.date2sql('tdate')+''') and '+es+
                'year(tdate) = year('''+qp.date2sql('tdate')+''')  and '+es+
                'salary_id = 313 group by employee_id'); //P. Pajak irregular
    if intQ1.recordcount>0 then
    begin
      isTaxIR     := True;
      taxIRImport := intQ1.getFieldDouble('amount');
    end;
    //pajak diimport di t_ad

    sebelumTHR;
    sesudahTHR;
    pajakTHR := pajakDenganTHR - pajakTanpaTHR;
    qp.setField('taxallowance', '0');
    if taxIrregular = 2 then qp.setField('taxallowance', pajakthr);
    qp.setField('pph21', pajakthr);
    //dbg('pajakthr : '+floattostr(pajakthr));
  end;

begin
  if qp.getFieldInteger('joingaji') = 1  then exit;

  intQ1       := createQuery;
  qh_payroll  := createQuery;
  q_tarif     := createQuery;
  q3          := createQuery;
  bjab_pct    := 5;
  bjab_max    := 6000000;
  qh_payroll.query('select * from t_payroll where '+gets('employee_id', qp)+' '+es+
                  'and tdate < '''+qp.date2sql('tdate')+''' order by tdate desc limit 1 ');
  if qh_payroll.RecordCount = 0 then
  begin
    qh_payroll.Free;
    q_tarif.free;
    intQ1.free;
    q3.Free;
    exit;
  end;
  payrolldate := addMonths(qh_payroll.getFieldDateTime('tdate'), 1);
  if q3.query('select * from m_biayajabatan where tdate <= '''+date2sql(payrolldate)+''' order by tdate desc limit 1') > 0 then
  begin
    bjab_pct := q3.getfielddouble('biayajabatan');
    bjab_max := q3.getfielddouble('maxbiayajabatan');
  end;
  taxType       := getQValueInteger('select taxtype from m_employee where '+gets('employee_id', qp)+' ');
  taxIrregular  := getQValueInteger('select taxirregular from m_employee where '+gets('employee_id', qp)+' ');
  SetBulanBjab;
  bulanpengali := settingBulangPengali(qp.getFieldString('employee_id'), payrolldate);
  processHitungPajak;

  qh_payroll.Free;
  q_tarif.free;
  intQ1.free;
  q3.Free;
end;


procedure TFrmTHR.N2ImportTHR1Click(Sender: TObject);
var
  lebaran, s, sheet, fn, dtsql, tn, eid : string;
  x, joingaji : integer;
  ts : tstringlist;
  qe, qk : tzquery;
begin
  if confirm('Do You Want to Import THR ?') <> 'YES' then exit;

  lebaran := ComboForm('Isi Tgl Lebaran', 'tanggal');
  if lebaran = '' then exit;
  dtsql := ComboForm('Isi Tgl Dibagikan THR', 'tanggal');
  if dtsql = '' then exit;

  joingaji := 0;
  if confirm('THR Join Gaji ?') = 'YES' then joingaji := 1;
  fn := '';
  fn := FileOpenDialog('Excel Files 2007 (*.xlsx)|*.xlsx|Excel Files 2003 (*.xls)|*.xls');
  if FileExists(fn) = False then exit;
  if ConnectExcel(fn) = false then exit;

  ts := tstringlist.Create;
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
  qe.First;
  while not qe.Eof do
  begin
    SetProgressbarDefault(qe);
    qk.Query('select employee_id, nip, joindate, resigndate from m_employee where '+
             gets('nip', qe)+' ');
    if qk.RecordCount > 0 then
    begin
      q_master.Query('select * from t_thr where '+gets('employee_id', qk )+' and '+es+
                     'month(tdate)=month('''+dtsql+''') and year(tdate)=year('''+dtsql+''') ');
      if q_master.RecordCount = 0 then
      begin
        q_master.Append;
      end else
      begin
        q_master.Edit;
      end;
      isNewRecord[strtoint(txtID.Text)] := False;
      q_master.setField('joingaji', joingaji);
      q_master.setField('tdate', dtsql);
      q_master.setField('lebaran', lebaran);
      q_master.SetMultiFieldQ('nip,amount', qe);
      q_master.SetMultiFieldQ('employee_id,nip,joindate,resigndate', qk);
      q_master.setField('salary_id', '50');
      q_master.Post;
    end;
    qe.Next;
  end;

  qe.Free;
  qk.Free;
  ts.Free;
  DisconnetExcel;


  q_master.EnableControls;
  q_master.Refresh;
  HideProgressbar;
end;

procedure TFrmTHR.N1PreviewTHRSLIP1Click(Sender: TObject);
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
  qm.Query('select * from t_thr where tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+'''');
  if LookupQuery('Choose THR', qm, 800, True, '', 't_thr' ) = false then
  begin
    qm.Free;
    exit;
  end;

  s := getColumnFromFilter(qm, 'thr_id');
  //where tdate >= '2019-05-01' and tdate <= '2019-05-30'
  //and h.level_id not in ( 10,11,22, 12,13,14,21 )
  qm_master.Query('select h.thr_id, h.tdate, h.nip, e.name as employeename, '+es+
                  'dp.name as departmentname, po.name as positionname, h.takehomepay '+es+
                  'from t_thr h '+es+
                  'left join m_employee e on h.employee_id = e.employee_id '+es+
                  'left join m_company c on h.company_id = c.company_id '+es+
                  'left join m_division d on h.division_id = d.division_id '+es+
                  'left join m_department dp on h.department_id = dp.department_id '+es+
                  'left join m_workarea w on h.workarea_id = w.workarea_id '+es+
                  'left join m_position po on h.position_id = po.position_id '+es+
                  'left join m_level l on h.level_id = l.level_id '+es+
                  'left join m_employeestatus es on h.employeestatus_id = es.employeestatus_id '+es+
                  'where h.thr_id in '+s+' '+es+
                  'order by h.tdate, dp.name, e.name');
  if qm_master.RecordCount > 0 then
  begin
    qm_detail1.Query('select thr_id, ''THR'' as slipname, takehomepay as amount '+es+
                     'from t_thr '+es+
                     'where thr_id in '+s+' ');
    qm_detail2.Query('select 0 as thr_id, ''THR'' as slipname, 0 as amount '+es+
                     'from t_thr '+es+
                     'where thr_id in '+s+' and 1=0');
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    FR_SlipManager.ShowReport;
  end else
  begin
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    MsgError('No Data to Print');
  end;
  qm.Free;
end;
procedure TFrmTHR.N2ExportTHRSLIP1Click(Sender: TObject);
var
  fn, tipe :string;
  level : integer;
  qm : tzquery;
begin

  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  qm_master.Active  := False;
  QM_Detail1.Active := False;
  QM_Detail2.Active := False;

  qm := createquery;
  qm.Query('select * from t_thr where tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+'''');
  if LookupQuery('Choose THR', qm, 800, True, '', 't_thr' ) = false then
  begin
    qm.Free;
    exit;
  end;

  if qm.RecordCount = 0 then
  begin
    qm.Free;
    MsgError('No Data Found');
    exit;
  end;
  //s := getColumnFromFilter(qm, 'thr_id');

  ShowProgressbar;
  qm.First;
  while not qm.eof do
  begin
    SetProgressbarDefault(qm);

    level := qm.getFieldInteger('level_id');
    tipe  := lowercase(getQValueString('select level from m_level where level_id='''+inttostr(level)+''' '));

    qm_master.Query('select h.thr_id, h.tdate, h.nip, e.name as employeename, dp.code as codedept, '+es+
                  'dp.name as departmentname, po.name as positionname, h.takehomepay '+es+
                  'from t_thr h '+es+
                  'left join m_employee e on h.employee_id = e.employee_id '+es+
                  'left join m_company c on h.company_id = c.company_id '+es+
                  'left join m_division d on h.division_id = d.division_id '+es+
                  'left join m_department dp on h.department_id = dp.department_id '+es+
                  'left join m_workarea w on h.workarea_id = w.workarea_id '+es+
                  'left join m_position po on h.position_id = po.position_id '+es+
                  'left join m_level l on h.level_id = l.level_id '+es+
                  'left join m_employeestatus es on h.employeestatus_id = es.employeestatus_id '+es+
                  'where h.thr_id='''+qm.getFieldString('thr_id')+''' '+es+
                  'order by h.tdate, dp.name, e.name');
    qm_detail1.Query('select thr_id, ''THR'' as slipname, takehomepay as amount '+es+
                     'from t_thr '+es+
                     'where thr_id='''+qm.getFieldString('thr_id')+''' ');
    qm_detail2.Query('select 0 as thr_id, ''THR'' as slipname, 0 as amount '+es+
                     'from t_thr '+es+
                     'where thr_id='''+qm.getFieldString('thr_id')+''' and 1=0');
    fn := 'D:\Temp\';
    if tipe = 'non manager' then
    begin
      fn := 'D:\Temp\THRSLIP_'+ formatdatetime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_Non_Manager\';
    end else
    begin
      if (level = 10) or (level = 11) or (level = 22) then fn := 'D:\Temp\THRSLIP_'+ formatdatetime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_Level3\';
    end;

    if not DirectoryExists(fn) then CreateDir(fn);
    fn := fn + qm_master.getFieldString('codedept')+'\';
    if not DirectoryExists(fn) then CreateDir(fn);

    fn := fn + 'THRSLIP_' + FormatDateTime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_';
    fn := fn + Replace(qm_master.getFieldString('employeename'), ' ', '') + '_'+ qm_master.getFieldString('nip')  + '.pdf';
    exportReporttoJPEG(FR_SlipManager,  fn);
    qm.Next;
  end;
  qm.Free;
  HideProgressbar;
  MsgOK('Finished');
end;
end.
