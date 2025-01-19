unit UPesangon;

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
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, cxSplitter, Vcl.AppEvnts;

type
  TFrmPesangon = class(TForm)
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

    procedure getTHR(qp : tzquery);
    procedure HitungPajak(qp : tzquery);
    procedure actDBGExecute(Sender: TObject);
    procedure N2ImportTHR1Click(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmPesangon: TFrmPesangon;
  DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmPesangon.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmPesangon.cekAllEditModule(idm:integer);
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
procedure TFrmPesangon.isiALLTableKolom;
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
procedure TFrmPesangon.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmPesangon.FormCreate(Sender: TObject);
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
end;
procedure TFrmPesangon.SettingQuery;
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
procedure TFrmPesangon.ReloadClick;
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
procedure TFrmPesangon.SettingFont;
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
procedure TFrmPesangon.ValidasiControl;
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
procedure TFrmPesangon.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmPesangon.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmPesangon.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmPesangon.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmPesangon.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmPesangon.MenuItem1Click(Sender: TObject);
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
procedure TFrmPesangon.OneMonth1Click(Sender: TObject);
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

procedure TFrmPesangon.NextMonth1Click(Sender: TObject);
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
procedure TFrmPesangon.PrevMonth1Click(Sender: TObject);
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
procedure TFrmPesangon.OneYear1Click(Sender: TObject);
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
procedure TFrmPesangon.PopupMenuPopup(Sender: TObject);
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
procedure TFrmPesangon.OneDay1Click(Sender: TObject);
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
procedure TFrmPesangon.oday1Click(Sender: TObject);
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
procedure TFrmPesangon.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmPesangon.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmPesangon.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmPesangon.getFocusTableName : String;
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
function TFrmPesangon.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmPesangon.getFocusGridView : TcxGridDBBandedTableView;
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
procedure TFrmPesangon.AutoActiveQuery;
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
procedure TFrmPesangon.AutoRefreshQuery;
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
function TFrmPesangon.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;
procedure TFrmPesangon.ImportFromExcel1Click(Sender: TObject);
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

function TFrmPesangon.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmPesangon.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmPesangon.actLookupExecute(Sender: TObject);
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
procedure TFrmPesangon.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmPesangon.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmPesangon.actDBGExecute(Sender: TObject);
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

procedure TFrmPesangon.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmPesangon.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmPesangon.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmPesangon.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmPesangon.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmPesangon.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmPesangon.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmPesangon.ppFreezeClick(Sender: TObject);
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
procedure TFrmPesangon.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmPesangon.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmPesangon.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmPesangon.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmPesangon.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmPesangon.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmPesangon.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPesangon.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmPesangon.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPesangon.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPesangon.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmPesangon.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPesangon.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmPesangon.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmPesangon.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmPesangon.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmPesangon.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmPesangon.ApplicationEvents1Exception(Sender: TObject; E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmPesangon.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmPesangon.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmPesangon.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmPesangon.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmPesangon.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', serverdate);
end;
procedure TFrmPesangon.beforePostMaster;
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
  kolom := getQValueString('select kolom from s_lookup where tablename=''t_pesangon'' and columnname=''employee_id'' ');
  qe    := createquery;
  qe.Query('select '+kolom+' from m_employee where '+gets('employee_id', q_master)+' ');
  if qe.RecordCount > 0 then
  begin
    q_master.SetMultiFieldQ('employee_id,nip,joindate,resigndate,company_id,'+
                      'division_id,position_id,department_id,unit_id,'+
                      'workarea_id,grade_id,employeestatus_id,level_id', qe );
    q_master.setField('npwpemployee', qe.getFieldString('npwp'));
  end;
  qe.Free;

  q_master.setField('salary_id', '341');
  q_master.setmultifield('taxallowance,pph21,takehomepay','0');
  getTHR(Q_Master);
  HitungPajak(Q_Master);
  q_master.setField('takehomepay', q_master.getFieldDouble('taxallowance')+
                                   q_master.getFieldDouble('amount')-
                                   q_master.getFieldDouble('pph21') );
end;
procedure TFrmPesangon.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmPesangon.beforeEditMaster;
begin
  //
end;
procedure TFrmPesangon.beforeDeleteMaster;
begin
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmPesangon.afterDeleteMaster;
begin
  //
end;
procedure TFrmPesangon.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmPesangon.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmPesangon.LookupADEmployee_id;
var
  Q : TZQuery;
  kolom, syarat, s : String;
begin
  s := '';
  s := InputBox('Input Employee Name', 'Search', s);
  kolom := '*';
  syarat:= ' (0=0) ';
  Q := createquery;
  q.Query('select * from s_lookup where tablename=''t_pesangon'' and columnname=''employee_id'' ');
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
                      'division_id,position_id,department_id,unit_id,'+
                      'workarea_id,grade_id,employeestatus_id,level_id', q );
    Q_Master.SetMultiField('masakerja,basethr,taxallowance,pph21,takehomepay', '0');
    Q_Master.setField('npwpemployee', q.getFieldString('npwp'));
    Q_Master.setField('salary_id', '341');
    getTHR(Q_Master);
    HitungPajak(Q_Master);
  end;
  Q.free;
end;
procedure TFrmPesangon.HitungPajak(qp : tzquery);
var
  taxFinal, cnt : integer;
  grossup, tax, taxallowance, amt, pph21, thp : double;
  selesai : boolean;
  function getPPh21(amount: double; npwp:string): double;
  var
    pph21setahun, mulai,sampai,jumlahnilaipajak: double;
    tarif: string;
    q3, q_tarif : tzquery;
  begin
    jumlahnilaipajak := amount;
    pph21setahun     := 0;
    mulai   := 0;
    sampai  := 0;
    q3      := createquery;
    q_tarif := createquery;
    tarif   := 'tarif';
    if npwp = '' then tarif := 'tarifnonnpwp';
    
    q3.query('select tdate from m_tarif where final=1 order by tdate desc limit 1');
    q_tarif.query('select * from m_tarif where tdate = '''+q3.date2sql('tdate')+''' and final=1 order by start');
    q_tarif.first;
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
    q3.Free;
    q_tarif.Free;
    result := int(pph21setahun);
  end;
begin
  taxFinal      := getQValueInteger('select taxfinal from m_employee where '+gets('employee_id', qp)+' ');
  cnt           := 0;
  taxallowance  := 0;
  amt           := qp.getFieldDouble('amount');
  repeat
    tax := getPPh21(amt+taxallowance, qp.getFieldString('npwpemployee') );
    //if qp.getFieldString('npwpemployee') = '' then tax := int(tax * 1.2);
    if taxfinal = 1 then selesai := true;
    if taxfinal = 2 then
    begin
      if grossUp = tax then
      begin
        taxallowance := tax;
        selesai      := true;
      end else
      begin
        taxallowance := tax;
        grossUp      := tax;
      end;
    end;
    cnt := cnt + 1;
  until (selesai = true) or (cnt >= 100);

  thp := taxallowance + amt - tax;
  qp.setField('taxallowance', taxallowance);
  qp.setField('amount', amt);
  qp.setField('pph21', tax);
  qp.setField('takehomepay', thp)
end;
procedure TFrmPesangon.getTHR(qp : tzquery);
begin
  exit;
end;

procedure TFrmPesangon.N2ImportTHR1Click(Sender: TObject);
var
  s, sheet, fn, dtsql, tn, eid : string;
  x, joingaji : integer;
  ts : tstringlist;
  qe, qk : tzquery;
begin
  if confirm('Do You Want to Import THR ?') <> 'YES' then exit;
  dtsql := ComboForm('Choose THR Date', 'tanggal');
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
      q_master.Query('select * from t_thr where '+gets('employee_id', qk )+' and tdate='''+dtsql+''' ');
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
      q_master.SetMultiFieldQ('nip,amount', qe);
      q_master.SetMultiFieldQ('employee_id,nip,joindate,resigndate', qk);
      q_master.setField('salary_id', '341');
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

end.
