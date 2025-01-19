unit URMPP;

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
  TFrmRMPP = class(TForm)
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
    PageDetail: TcxPageControl;
    TabDetail1: TcxTabSheet;
    GRID_DETAIL1: TcxGrid;
    DETAIL1: TcxGridDBBandedTableView;
    GRID_DETAIL1Level2: TcxGridLevel;
    cxSplitter1: TcxSplitter;
    cxGridPopupMenu2: TcxGridPopupMenu;
    DS_DETAIL1: TDataSource;
    Q_DETAIL1: TZQuery;
    TabDetail2: TcxTabSheet;
    GRID_DETAIL2: TcxGrid;
    DETAIL2: TcxGridDBBandedTableView;
    GRID_DETAIL2Level1: TcxGridLevel;
    TabDetail3: TcxTabSheet;
    TabDetail4: TcxTabSheet;
    TabDetail5: TcxTabSheet;
    TabDetail6: TcxTabSheet;
    TabDetail7: TcxTabSheet;
    GRID_DETAIL3: TcxGrid;
    DETAIL3: TcxGridDBBandedTableView;
    GRID_DETAIL3Level1: TcxGridLevel;
    GRID_DETAIL4: TcxGrid;
    DETAIL4: TcxGridDBBandedTableView;
    GRID_DETAIL4Level1: TcxGridLevel;
    GRID_DETAIL5: TcxGrid;
    DETAIL5: TcxGridDBBandedTableView;
    GRID_DETAIL5Level1: TcxGridLevel;
    GRID_DETAIL6: TcxGrid;
    DETAIL6: TcxGridDBBandedTableView;
    GRID_DETAIL6Level1: TcxGridLevel;
    GRID_DETAIL7: TcxGrid;
    DETAIL7: TcxGridDBBandedTableView;
    GRID_DETAIL7Level1: TcxGridLevel;
    Q_DETAIL2: TZQuery;
    DS_DETAIL2: TDataSource;
    cxGridPopupMenu3: TcxGridPopupMenu;
    Q_DETAIL3: TZQuery;
    DS_DETAIL3: TDataSource;
    cxGridPopupMenu4: TcxGridPopupMenu;
    Q_DETAIL4: TZQuery;
    DS_DETAIL4: TDataSource;
    cxGridPopupMenu5: TcxGridPopupMenu;
    Q_DETAIL5: TZQuery;
    DS_DETAIL5: TDataSource;
    cxGridPopupMenu6: TcxGridPopupMenu;
    Q_DETAIL6: TZQuery;
    DS_DETAIL6: TDataSource;
    cxGridPopupMenu7: TcxGridPopupMenu;
    Q_DETAIL7: TZQuery;
    DS_DETAIL7: TDataSource;
    cxGridPopupMenu8: TcxGridPopupMenu;
    ImportFromExcel1: TMenuItem;
    actTabDetail2: TAction;
    Q_Laporan: TZQuery;
    DS_Laporan: TDataSource;
    frxDBDataset1: TfrxDBDataset;
    TabDetail8: TcxTabSheet;
    TabDetail9: TcxTabSheet;
    GRID_DETAIL8: TcxGrid;
    DETAIL8: TcxGridDBBandedTableView;
    GRID_DETAIL8Level1: TcxGridLevel;
    GRID_DETAIL9: TcxGrid;
    DETAIL9: TcxGridDBBandedTableView;
    GRID_DETAIL9Level1: TcxGridLevel;
    Q_DETAIL8: TZQuery;
    DS_DETAIL8: TDataSource;
    cxGridPopupMenu9: TcxGridPopupMenu;
    Q_DETAIL9: TZQuery;
    DS_DETAIL9: TDataSource;
    cxGridPopupMenu10: TcxGridPopupMenu;
    TabDetail10: TcxTabSheet;
    GRID_DETAIL10: TcxGrid;
    DETAIL10: TcxGridDBBandedTableView;
    GRID_DETAIL10Level1: TcxGridLevel;
    Q_DETAIL10: TZQuery;
    DS_DETAIL10: TDataSource;
    cxGridPopupMenu11: TcxGridPopupMenu;
    Edit1: TEdit;
    ApplicationEvents1: TApplicationEvents;
    N1CreateReport1: TMenuItem;
    N1PrintReport1: TMenuItem;
    ZQuery1: TZQuery;
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
    function getCxGridByName(nama:string) : TcxGrid;
    function getGridByName(nama:string) : TcxGridDBBandedTableView;
    function getQueryByName(nama:string) : TZQuery;
    function getTabByName(nama:string) : TcxTabSheet;
    function getActiveModuleName : string;
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
    procedure VisibleALLGridDetail(tipe:boolean=False);
    procedure SettingGridDetail;

    procedure newRecordMaster;
    procedure beforePostMaster;
    procedure afterPostMaster;
    procedure beforeEditMaster;
    procedure beforeDeleteMaster;
    procedure afterDeleteMaster;
    procedure afterCancelMaster;

    procedure newRecordTotal;
    procedure beforePostTotal;
    procedure afterPostTotal;
    procedure beforeEditTotal;
    procedure beforeDeleteTotal;
    procedure afterDeleteTotal;
    procedure afterCancelTotal;

    procedure newRecordTaken;
    procedure beforePostTaken;
    procedure afterPostTaken;
    procedure beforeEditTaken;
    procedure beforeDeleteTaken;
    procedure afterDeleteTaken;
    procedure afterCancelTaken;
    procedure actTabDetail2Execute(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure isiDataMenuPrint;
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N1CreateReport1Click(Sender: TObject);
    procedure N1PrintReport1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmRMPP: TFrmRMPP;
  DisableEventEdit, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  eid : string;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmRMPP.VisibleALLGridDetail(tipe:boolean=False);
begin
  //PageDetail.Visible    := False;
  TabDetail1.visible    := False;
  TabDetail1.TabVisible := False;
  TabDetail2.visible    := False;
  TabDetail2.TabVisible := False;
  TabDetail3.visible    := False;
  TabDetail3.TabVisible := False;
  TabDetail4.visible    := False;
  TabDetail4.TabVisible := False;
  TabDetail5.visible    := False;
  TabDetail5.TabVisible := False;
  TabDetail6.visible    := False;
  TabDetail6.TabVisible := False;
  TabDetail7.visible    := False;
  TabDetail7.TabVisible := False;
  TabDetail8.visible    := False;
  TabDetail8.TabVisible := False;
  TabDetail9.visible    := False;
  TabDetail9.TabVisible := False;
  TabDetail10.visible   := False;
  TabDetail10.TabVisible:= False;
end;
procedure TFrmRMPP.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmRMPP.cekAllEditModule(idm:integer);
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
procedure TFrmRMPP.isiALLTableKolom;
var
  idm : integer;
  qk : tzquery;
begin
  idm := strtoint(txtid.Text);
  isiTableKolomFromGrid('m_employee2', master);
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
procedure TFrmRMPP.isiDataMenuPrint;
var
  x : integer;
  idm, mn, tipe : string;
  qm : tzquery;
begin
  qm := createquery;
  for x := 0 to itemmenu.Items.Count - 1 do
  begin
    mn   := itemmenu.Items.Items[x].Caption;
    tipe := 'menu';
    idm  := txtid.Text;
    qm.Query('select * from s_menu where id_module='''+idm+''' and tipe='''+tipe+''' and name='''+mn+''' ');
    if qm.RecordCount > 0 then qm.Edit else qm.Append;
    qm.setField('id_module', idm);
    qm.setField('tipe', tipe);
    qm.setField('name', mn);
    qm.Post;
  end;
  for x := 0 to ItemPrint.Items.Count - 1 do
  begin
    mn   := ItemPrint.Items.Items[x].Caption;
    tipe := 'print';
    idm  := txtid.Text;
    qm.Query('select * from s_menu where id_module='''+idm+''' and tipe='''+tipe+''' and name='''+mn+''' ');
    if qm.RecordCount > 0 then qm.Edit else qm.Append;
    qm.setField('id_module', idm);
    qm.setField('tipe', tipe);
    qm.setField('name', mn);
    qm.Post;
  end;
  qm.Free;
end;
procedure TFrmRMPP.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  q_master.Active := false;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmRMPP.FormCreate(Sender: TObject);
begin
  isdebug := true;
  ExecuteSQL('call autoupdateemployee(curdate());');
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
  ReadOnlyDataset(master);
  ReadOnlyDataset(DETAIL1);
end;
procedure TFrmRMPP.SettingQuery;
var
  idd, idm : integer;
  qd  : tzquery;
  namagrid : string;
begin
  idm               := strtoint(txtid.Text);

  master.Tag        := strtoint(txtid.Text);
  GRID_MASTER.Tag   := strtoint(txtid.Text);
  q_master.Tag      := strtoint(txtid.Text);
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  setColumnWidth(txtid.Text, q_master, master, true);
  //StyleGridReadOnly(master);
  SettingGridDetail;
  AutoActiveQuery;

  {ShowProgressbar;
  q_master.First;
  q_master.DisableControls;
  while not q_master.Eof do
  begin
    SetProgressbarDefault(q_master);
    IsiMasterCuti(q_master);
    q_master.Next;
  end;
  q_master.EnableControls;
  q_master.Refresh;
  HideProgressbar;}
end;
procedure TFrmRMPP.SettingGridDetail;
var
  idd, idm : integer;
  qd  : tzquery;
  namagrid : string;
begin
  VisibleALLGridDetail;
  idm:= strtoint(txtid.Text);
  qd := createquery;
  qd.Query('select * from s_module where parentid='''+txtid.Text+''' and active=1 and isdetail=1 order by no');
  if qd.RecordCount > 0 then
  begin
    PageDetail.Visible := True;
    pagedetail.ActivePageIndex := 0;
  end else
  begin
    PageDetail.Visible := False;
  end;
  qd.First;
  while not qd.Eof do
  begin
    idd                           := qd.getFieldInteger('id_module');
    namagrid                      := 'detail'+qd.getFieldString('no');
    getGridByName(namagrid).Tag   := idd;
    getQueryByName(namagrid).Tag  := idd;
    getCxGridByName(namagrid).Tag := idd;
    TableName[idd]                := getTable(inttostr(idd));
    SQLGrid[idd]                  := getQuery(inttostr(idd), False, startdate, enddate);
    getTabByName(namagrid).Caption        := qd.getFieldString('name');
    getTabByName(namagrid).Visible        := True;
    getTabByName(namagrid).TabVisible     := True;
    getQueryByName(namagrid).MasterSource := DS_MASTER;
    getQueryByName(namagrid).MasterFields := qd.getFieldString('masterfields');
    getQueryByName(namagrid).LinkedFields := qd.getFieldString('masterfields');
    getQueryByName(namagrid).Query(SQLGrid[idd]);
    setColumnWidth(inttostr(idd), getQueryByName(namagrid), getGridByName(namagrid));
    //StyleGridReadOnly(getGridByName(namagrid));
    qd.Next;
  end;
  qd.Free;
end;
procedure TFrmRMPP.ReloadClick;
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate);
  //dbg(SQLGrid[idm]);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
end;
procedure TFrmRMPP.SettingFont;
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
procedure TFrmRMPP.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  //SetInsertTable(master, cekValidasi('`insert`', mn));
  SetInsertTable(master, False);
  SetEditTable(master, cekValidasi('`edit`', mn));
  SetDeleteTable(master, cekValidasi('`delete`', mn));
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);

  if TabDetail1.Visible then begin
  {dbg(tabdetail1.Caption);
  dbg(ValidasiDetail(mn, TabDetail1.Caption));}
  TabDetail1.Visible    := ValidasiDetail(mn, TabDetail1.Caption);
  TabDetail1.TabVisible := ValidasiDetail(mn, TabDetail1.Caption); end;
  if TabDetail2.Visible then begin
  {dbg(tabdetail2.Caption);
  dbg(ValidasiDetail(mn, TabDetail2.Caption));}
  TabDetail2.Visible    := ValidasiDetail(mn, TabDetail2.Caption);
  TabDetail2.TabVisible := ValidasiDetail(mn, TabDetail2.Caption); end;
  if TabDetail3.Visible then begin
  {dbg(tabdetail3.Caption);
  dbg(ValidasiDetail(mn, TabDetail3.Caption));}
  TabDetail3.Visible    := ValidasiDetail(mn, TabDetail3.Caption);
  TabDetail3.TabVisible := ValidasiDetail(mn, TabDetail3.Caption); end;
  if TabDetail4.Visible then begin
  {dbg(tabdetail4.Caption);
  dbg(ValidasiDetail(mn, TabDetail4.Caption));}
  TabDetail4.Visible    := ValidasiDetail(mn, TabDetail4.Caption);
  TabDetail4.TabVisible := ValidasiDetail(mn, TabDetail4.Caption); end;
  if TabDetail5.Visible then begin
  {dbg(tabdetail5.Caption);
  dbg(ValidasiDetail(mn, TabDetail5.Caption));}
  TabDetail5.Visible    := ValidasiDetail(mn, TabDetail5.Caption);
  TabDetail5.TabVisible := ValidasiDetail(mn, TabDetail5.Caption); end;
  if TabDetail6.Visible then begin
  {dbg(tabdetail6.Caption);
  dbg(ValidasiDetail(mn, TabDetail6.Caption)); }
  TabDetail6.Visible    := ValidasiDetail(mn, TabDetail6.Caption);
  TabDetail6.TabVisible := ValidasiDetail(mn, TabDetail6.Caption); end;
  if TabDetail7.Visible then begin
  {dbg(tabdetail7.Caption);
  dbg(ValidasiDetail(mn, TabDetail7.Caption));}
  TabDetail7.Visible    := ValidasiDetail(mn, TabDetail7.Caption);
  TabDetail7.TabVisible := ValidasiDetail(mn, TabDetail7.Caption); end;
  if TabDetail8.Visible then begin
  {dbg(tabdetail8.Caption);
  dbg(ValidasiDetail(mn, TabDetail8.Caption)); }
  TabDetail8.Visible    := ValidasiDetail(mn, TabDetail8.Caption);
  TabDetail8.TabVisible := ValidasiDetail(mn, TabDetail8.Caption); end;
  if TabDetail9.Visible then begin
  {dbg(tabdetail9.Caption);
  dbg(ValidasiDetail(mn, TabDetail9.Caption));}
  TabDetail9.Visible    := ValidasiDetail(mn, TabDetail9.Caption);
  TabDetail9.TabVisible := ValidasiDetail(mn, TabDetail9.Caption); end;
  if TabDetail10.Visible then begin
  {dbg(tabdetail10.Caption);
  dbg(ValidasiDetail(mn, TabDetail10.Caption));}
  TabDetail10.Visible   := ValidasiDetail(mn, TabDetail10.Caption);
  TabDetail10.TabVisible:= ValidasiDetail(mn, TabDetail10.Caption); end;

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail1.Tag)+''' ');
  //SetInsertTable(detail1, cekValidasi('`insert`', mn));
  SetInsertTable(detail1, False);
  SetEditTable(detail1, cekValidasi('`edit`', mn));
  SetDeleteTable(detail1, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail1);
  ValidasiColumn(mn, 'readonly_column', detail1);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail2.Tag)+''' ');
  SetInsertTable(detail2, cekValidasi('`insert`', mn));
  SetEditTable(detail2, cekValidasi('`edit`', mn));
  SetDeleteTable(detail2, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail2);
  ValidasiColumn(mn, 'readonly_column', detail2);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail3.Tag)+''' ');
  SetInsertTable(detail3, cekValidasi('`insert`', mn));
  SetEditTable(detail3, cekValidasi('`edit`', mn));
  SetDeleteTable(detail3, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail3);
  ValidasiColumn(mn, 'readonly_column', detail3);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail4.Tag)+''' ');
  SetInsertTable(detail4, cekValidasi('`insert`', mn));
  SetEditTable(detail4, cekValidasi('`edit`', mn));
  SetDeleteTable(detail4, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail4);
  ValidasiColumn(mn, 'readonly_column', detail4);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail5.Tag)+''' ');
  SetInsertTable(detail5, cekValidasi('`insert`', mn));
  SetEditTable(detail5, cekValidasi('`edit`', mn));
  SetDeleteTable(detail5, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail5);
  ValidasiColumn(mn, 'readonly_column', detail5);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail6.Tag)+''' ');
  SetInsertTable(detail6, cekValidasi('`insert`', mn));
  SetEditTable(detail6, cekValidasi('`edit`', mn));
  SetDeleteTable(detail6, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail6);
  ValidasiColumn(mn, 'readonly_column', detail6);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail7.Tag)+''' ');
  SetInsertTable(detail7, cekValidasi('`insert`', mn));
  SetEditTable(detail7, cekValidasi('`edit`', mn));
  SetDeleteTable(detail7, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail7);
  ValidasiColumn(mn, 'readonly_column', detail7);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail8.Tag)+''' ');
  SetInsertTable(detail8, cekValidasi('`insert`', mn));
  SetEditTable(detail8, cekValidasi('`edit`', mn));
  SetDeleteTable(detail8, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail8);
  ValidasiColumn(mn, 'readonly_column', detail8);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail9.Tag)+''' ');
  SetInsertTable(detail9, cekValidasi('`insert`', mn));
  SetEditTable(detail9, cekValidasi('`edit`', mn));
  SetDeleteTable(detail9, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail9);
  ValidasiColumn(mn, 'readonly_column', detail9);

  mn := getQValueString('select name from s_module where id_module='''+inttostr(q_detail10.Tag)+''' ');
  SetInsertTable(detail10, cekValidasi('`insert`', mn));
  SetEditTable(detail10, cekValidasi('`edit`', mn));
  SetDeleteTable(detail10, cekValidasi('`delete`', mn));
  ValidasiColumn(mn, 'hide_column', detail10);
  ValidasiColumn(mn, 'readonly_column', detail10);

  {ReadOnlyDataset(master);
  ReadOnlyDataset(detail1);
  ReadOnlyDataset(detail2);}
end;
procedure TFrmRMPP.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmRMPP.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmRMPP.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmRMPP.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmRMPP.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmRMPP.MenuItem1Click(Sender: TObject);
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
procedure TFrmRMPP.OneMonth1Click(Sender: TObject);
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

procedure TFrmRMPP.NextMonth1Click(Sender: TObject);
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
procedure TFrmRMPP.PrevMonth1Click(Sender: TObject);
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
procedure TFrmRMPP.OneYear1Click(Sender: TObject);
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
procedure TFrmRMPP.OneDay1Click(Sender: TObject);
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
procedure TFrmRMPP.oday1Click(Sender: TObject);
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
procedure TFrmRMPP.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmRMPP.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmRMPP.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGridView.Name) = 'master'  then result := Q_MASTER;
  if lowercase(getFocusGridView.Name) = 'detail1' then result := Q_DETAIL1;
  if lowercase(getFocusGridView.Name) = 'detail2' then result := Q_DETAIL2;
  if lowercase(getFocusGridView.Name) = 'detail3' then result := Q_DETAIL3;
  if lowercase(getFocusGridView.Name) = 'detail4' then result := Q_DETAIL4;
  if lowercase(getFocusGridView.Name) = 'detail5' then result := Q_DETAIL5;
  if lowercase(getFocusGridView.Name) = 'detail6' then result := Q_DETAIL6;
  if lowercase(getFocusGridView.Name) = 'detail7' then result := Q_DETAIL7;
  if lowercase(getFocusGridView.Name) = 'detail8' then result := Q_DETAIL8;
  if lowercase(getFocusGridView.Name) = 'detail9' then result := Q_DETAIL9;
  if lowercase(getFocusGridView.Name) = 'detail10' then result := Q_DETAIL10;
end;
function TFrmRMPP.getFocusTableName : String;
var
  x : integer;
  idtag : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGrid then
    begin
      if TcxGrid(Components[x]).IsFocused then
      begin
        idtag  := TcxGrid(Components[x]).Tag;
        result := getqvaluestring('select tablename from s_module where tag='''+inttostr(idtag)+''' ');
        break;
        exit;
      end;
    end;
    {if Components[x] is TcxGridDBBandedTableView then
    begin
      if TcxGridDBBandedTableView(Components[x]).Focused then
      begin
        idtag  := TcxGridDBBandedTableView(Components[x]).Tag;
        result := getqvaluestring('select tablename from s_module where tag='''+inttostr(idtag)+''' ');
        break;
        exit;
      end;
    end;}
  end;
end;
function TFrmRMPP.getFocusGrid : TcxGridDBBandedTableView;
var
  x : integer;
begin
  result := getFocusGridView;
  exit;
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
function TFrmRMPP.getFocusGridView : TcxGridDBBandedTableView;
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
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail1' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail1;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail2' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail2;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail3' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail3;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail4' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail4;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail5' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail5;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail6' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail6;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail7' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail7;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail8' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail8;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail9' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail9;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_detail10' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Detail10;
      end;
    end;
  end;
end;
function TFrmRMPP.getActiveModuleName : string;
var
  id1 : string;
begin
  id1 := inttostr(getCxGridByName(getFocusGridView.Name).Tag);
  result := getQValueString('select name from s_module where id_module='''+id1+''' ');
end;
procedure TFrmRMPP.ApplicationEvents1Exception(Sender: TObject; E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmRMPP.AutoActiveQuery;
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
procedure TFrmRMPP.AutoRefreshQuery;
var
  x : integer;
  qk : TZquery;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TZQuery then
    begin
      if lowercase(TZQuery(Components[x]).Name) <> 'q_master' then
      begin
        if TZQuery(Components[x]).Active then TZQuery(Components[x]).Refresh;
      end;
    end;
  end;
  qk := createquery;
  qk.Query('select kolom_id from s_kolom where tablename in (''t_mpp'',''t_mpp_detail'') and tipekolom=''lookup'' order by tablename, no');
  qk.First;
  while not qk.Eof do
  begin
    if qlq[qk.getFieldInteger('kolom_id')].Active then qlq[qk.getFieldInteger('kolom_id')].Refresh;
    qk.Next;
  end;
  qk.Free;
end;
function TFrmRMPP.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
  if nama = 'detail1' then result := TabDetail1;
  if nama = 'detail2' then result := TabDetail2;
  if nama = 'detail3' then result := TabDetail3;
  if nama = 'detail4' then result := TabDetail4;
  if nama = 'detail5' then result := TabDetail5;
  if nama = 'detail6' then result := TabDetail6;
  if nama = 'detail7' then result := TabDetail7;
  if nama = 'detail8' then result := TabDetail8;
  if nama = 'detail9' then result := TabDetail9;
  if nama = 'detail10' then result := TabDetail10;
end;
function TFrmRMPP.getCxGridByName(nama:string) : TcxGrid;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := grid_master;
  if nama = 'detail1' then result := grid_detail1;
  if nama = 'detail2' then result := grid_detail2;
  if nama = 'detail3' then result := grid_detail3;
  if nama = 'detail4' then result := grid_detail4;
  if nama = 'detail5' then result := grid_detail5;
  if nama = 'detail6' then result := grid_detail6;
  if nama = 'detail7' then result := grid_detail7;
  if nama = 'detail8' then result := grid_detail8;
  if nama = 'detail9' then result := grid_detail9;
  if nama = 'detail10' then result := grid_detail10;
end;
function TFrmRMPP.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
  if nama = 'detail1' then result := detail1;
  if nama = 'detail2' then result := detail2;
  if nama = 'detail3' then result := detail3;
  if nama = 'detail4' then result := detail4;
  if nama = 'detail5' then result := detail5;
  if nama = 'detail6' then result := detail6;
  if nama = 'detail7' then result := detail7;
  if nama = 'detail8' then result := detail8;
  if nama = 'detail9' then result := detail9;
  if nama = 'detail10' then result := detail10;
end;
function TFrmRMPP.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
  if nama = 'detail1' then result := q_detail1;
  if nama = 'detail2' then result := q_detail2;
  if nama = 'detail3' then result := q_detail3;
  if nama = 'detail4' then result := q_detail4;
  if nama = 'detail5' then result := q_detail5;
  if nama = 'detail6' then result := q_detail6;
  if nama = 'detail7' then result := q_detail7;
  if nama = 'detail8' then result := q_detail8;
  if nama = 'detail9' then result := q_detail9;
  if nama = 'detail10' then result := q_detail10;
end;
procedure TFrmRMPP.actLookupExecute(Sender: TObject);
var
  Q : tzquery;
  s, sql : string;
  idk : integer;
begin
  exit;
  if getFocusColumn(getFocusGridView).Tag = 3 then
  begin
    s   := '';
    s   := InputBox('Search '+getFocusCaptionName(getfocusgridview), 'Search', s);
    idk := getIDKolom(getFocusTableName, getFocusFieldName(getFocusGridview));

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
procedure TFrmRMPP.actAddExecute(Sender: TObject);
begin
  //getQueryByName(getFocusGridView.Name)

  if cekValidasi('`insert`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Inserting = False then exit;
  getQueryByName(getFocusGridView.Name).Append;
end;
procedure TFrmRMPP.actcancelExecute(Sender: TObject);
begin
  getQueryByName(getFocusGridView.Name).Cancel;
end;
procedure TFrmRMPP.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Deleting = False then exit;
  if getQueryByName(getFocusGridView.Name).RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then getQueryByName(getFocusGridView.Name).Delete;
end;
procedure TFrmRMPP.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', getActiveModuleName ) = false then exit;
  if getFocusGridView.OptionsData.Editing = False then exit;
  getQueryByName(getFocusGridView.Name).Edit;
end;
procedure TFrmRMPP.actRefreshExecute(Sender: TObject);
begin
   //getQueryByName(getFocusGridView.Name).Refresh;
   q_master.Refresh;
end;
procedure TFrmRMPP.actSaveExecute(Sender: TObject);
begin
  if isnowedit[getQueryByName(getFocusGridView.Name).Tag]  then getQueryByName(getFocusGridView.Name).Post;
end;
procedure TFrmRMPP.actTabDetail1Execute(Sender: TObject);
begin
  exit;
  if PageDetail.Visible = true then
  begin
    PageDetail.SetFocus;
    if TabDetail1.Visible  then
    begin
      PageDetail.ActivePage := TabDetail1;
      tabdetail1.SetFocus;
      if GRID_DETAIL1.Visible = true then GRID_DETAIL1.SetFocus;
    end;
  end;
end;
procedure TFrmRMPP.actTabDetail2Execute(Sender: TObject);
begin
  exit;
  if PageDetail.Visible = true then
  begin
    PageDetail.SetFocus;
    if TabDetail2.Visible  then
    begin
      PageDetail.ActivePage := TabDetail2;
      tabdetail2.SetFocus;
      if GRID_DETAIL2.Visible = true then GRID_DETAIL2.SetFocus;
    end;
  end;end;

procedure TFrmRMPP.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmRMPP.ppExportClick(Sender: TObject);
begin
  if Confirm('Export Excel ?') = 'YES' then  ExportGrid('Excel', getCxGridByName(getfocusgridview.Name) );
end;
procedure TFrmRMPP.PopupMenuPopup(Sender: TObject);
var
  mn : string;
begin
  mn := getQValueString('select name from s_module where id_module='''+inttostr(getFocusQuery.Tag)+''' ');
  //ppAdd.Visible    := cekValidasi('`insert`', mn);
  ppAdd.Visible    := False;
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
procedure TFrmRMPP.ppFreezeClick(Sender: TObject);
var
  caption : string;
  x : integer;
begin
  caption := lowercase( Replace(ppFreeze.Caption,'&','') );
  if caption = 'show freeze column' then
  begin
    getFocusGridView.Bands[1].FixedKind := fkLeft;
    getFocusGridView.Bands[1].Visible := true;
    ppFreeze.Caption := '&Hide Freeze Column';
    ppFreeze.Hint    := 'Hide Freeze Column';
  end else
  begin
    for x := 0 to getFocusGridView.Bands[1].ColumnCount - 1 do
    begin
      getFocusGridView.Bands[1].Columns[0].Position.BandIndex := 0;
      getFocusGridView.Bands[0].Columns[getFocusGridView.Bands[0].columncount-1].Position.ColIndex := x;
    end;

    getFocusGridView.Bands[1].FixedKind := fkLeft;
    getFocusGridView.Bands[1].Visible   := false;
    ppFreeze.Caption          := '&Show Freeze Column';
    ppFreeze.Hint             := 'Show Freeze Column';
  end;
end;
procedure TFrmRMPP.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'default');
end;
procedure TFrmRMPP.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'month');
end;
procedure TFrmRMPP.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'year');
end;
procedure TFrmRMPP.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'relative');
end;
procedure TFrmRMPP.ppFindClick(Sender: TObject);
begin
  {dbg(getFocusGridView.Name);
  dbg(getQueryByName(getFocusGridView.Name).Name);
  dbg(getFocusGridView.Name);
  dbg(getFocusTableName);}
  FindClick(getQueryByName(getFocusGridView.Name), getFocusGridView, getFocusTableName );
end;
procedure TFrmRMPP.ppShowALLClick(Sender: TObject);
begin
  //dbg(getQueryByName(getFocusGridView.Name).Name);
  //dbg(SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
  ShowALLClick(getQueryByName(getFocusGridView.Name), SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
end;
//end popup menu

//isnowedit master
procedure TFrmRMPP.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmRMPP.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmRMPP.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmRMPP.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmRMPP.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmRMPP.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmRMPP.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmRMPP.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmRMPP.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
  if nama='detail1' then afterCancelTotal;
  if nama='detail2' then afterCancelTaken;
  {if nama='detail3' then afterCancelAsset;
  if nama='detail4' then afterCancelJob;
  if nama='detail5' then afterCancelTraining;
  if nama='detail6' then afterCancelEducation;
  if nama='detail7' then afterCancelSalary;
  if nama='detail8' then afterCancelReward;
  if nama='detail9' then afterCancelPunishment;
  if nama='detail10' then afterCancelHistory;}
end;
procedure TFrmRMPP.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
  if nama='detail1' then afterDeleteTotal;
  if nama='detail2' then afterDeleteTaken;
  {if nama='detail3' then afterDeleteAsset;
  if nama='detail4' then afterDeleteJob;
  if nama='detail5' then afterDeleteTraining;
  if nama='detail6' then afterDeleteEducation;
  if nama='detail7' then afterDeleteSalary;
  if nama='detail8' then afterDeleteReward;
  if nama='detail9' then afterDeletePunishment;
  if nama='detail10' then afterDeleteHistory;}
end;
procedure TFrmRMPP.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
  if nama='detail1' then afterPostTotal;
  if nama='detail2' then afterPostTaken;
  {if nama='detail3' then afterPostAsset;
  if nama='detail4' then afterPostJob;
  if nama='detail5' then afterPostTraining;
  if nama='detail6' then afterPostEducation;
  if nama='detail7' then afterPostSalary;
  if nama='detail8' then afterPostReward;
  if nama='detail9' then afterPostPunishment;
  if nama='detail10' then afterPostHistory;}
end;
procedure TFrmRMPP.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
  if nama='detail1' then beforeDeleteTotal;
  if nama='detail2' then beforeDeleteTaken;
  {if nama='detail3' then beforeDeleteAsset;
  if nama='detail4' then beforeDeleteJob;
  if nama='detail5' then beforeDeleteTraining;
  if nama='detail6' then beforeDeleteEducation;
  if nama='detail7' then beforeDeleteSalary;
  if nama='detail8' then beforeDeleteReward;
  if nama='detail9' then beforeDeletePunishment;
  if nama='detail10' then beforeDeleteHistory;}
end;
procedure TFrmRMPP.BeforeEditQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  isNowEdit[idm]    := True;
  isNewRecord[idm]  := False;
  if nama='master'  then beforeEditMaster;
  if nama='detail1' then beforeEditTotal;
  if nama='detail2' then beforeEditTaken;
  {if nama='detail3' then beforeEditAsset;
  if nama='detail4' then beforeEditJob;
  if nama='detail5' then beforeEditTraining;
  if nama='detail6' then beforeEditEducation;
  if nama='detail7' then beforeEditSalary;
  if nama='detail8' then beforeEditReward;
  if nama='detail9' then beforeEditPunishment;
  if nama='detail10' then beforeEditHistory;}
end;
procedure TFrmRMPP.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
  if nama='detail1' then beforePostTotal;
  if nama='detail2' then beforePostTaken;
  {if nama='detail3' then beforePostAsset;
  if nama='detail4' then beforePostJob;
  if nama='detail5' then beforePostTraining;
  if nama='detail6' then beforePostEducation;
  if nama='detail7' then beforePostSalary;
  if nama='detail8' then beforePostReward;
  if nama='detail9' then beforePostPunishment;
  if nama='detail10' then beforePostHistory;}
end;
procedure TFrmRMPP.NewRecordQ(idm : integer; nama:string);
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
  if nama='detail1' then newRecordTotal;
  if nama='detail2' then newRecordTaken;
  {if nama='detail3' then newRecordAsset;
  if nama='detail4' then newRecordJob;
  if nama='detail5' then newRecordTraining;
  if nama='detail6' then newRecordEducation;
  if nama='detail7' then newRecordSalary;
  if nama='detail8' then newRecordReward;
  if nama='detail9' then newRecordPunishment;
  if nama='detail10' then newRecordHistory;}
end;
//end procedure query

//master
procedure TFrmRMPP.newRecordMaster;
begin
  AutoRefreshQuery;
end;
procedure TFrmRMPP.beforePostMaster;
begin
  //
end;
procedure TFrmRMPP.afterPostMaster;
begin
  ExecuteSQL('update t_mpp a, ( '+es+
                    'select tmpp_id, count(*) as existing from t_mpp_detail '+es+
                    'where '+gets('tmpp_id', q_master)+' group by tmpp_id '+es+
                                ' ) b '+es+
                 'set a.existing = b.existing '+es+
                 'where a.tmpp_id = b.tmpp_id and a.tmpp_id = '''+q_master.getFieldString('tmpp_id')+''' ');
  ExecuteSQL('update t_mpp  '+es+
             'set gap = existing-ideal '+es+
             'where tmpp_id = '''+q_master.getFieldString('tmpp_id')+''' ');
  q_master.Refresh;
end;
procedure TFrmRMPP.beforeEditMaster;
begin
  //
end;
procedure TFrmRMPP.beforeDeleteMaster;
begin
    {cek mpp terbaru ada ga
  if payrollExist(q_master.getFieldString('employee_id'), q_master.getFieldDateTime('tdate')) then
  begin
    MsgError('Already Has Payroll for This Periode');
    abort;
    exit;
  end;}
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('tmpp_id'));
end;
procedure TFrmRMPP.afterDeleteMaster;
begin
  //
end;
procedure TFrmRMPP.afterCancelMaster;
begin
  //
end;
//end master

//mutation q_detail1
procedure TFrmRMPP.newRecordTotal;
begin
  //
end;
procedure TFrmRMPP.beforePostTotal;
begin
  //
end;
procedure TFrmRMPP.afterPostTotal;
begin
  //
end;
procedure TFrmRMPP.beforeEditTotal;
begin
  //
end;
procedure TFrmRMPP.beforeDeleteTotal;
begin
  //
end;
procedure TFrmRMPP.afterDeleteTotal;
begin
  //
end;
procedure TFrmRMPP.afterCancelTotal;
begin
  //
end;
//end mutation

//Relatives q_detail2
procedure TFrmRMPP.newRecordTaken;
begin
  //
end;
procedure TFrmRMPP.beforePostTaken;
begin
  //
end;
procedure TFrmRMPP.afterPostTaken;
begin
  //
end;
procedure TFrmRMPP.beforeEditTaken;
begin
  //
end;
procedure TFrmRMPP.beforeDeleteTaken;
var
  dt1, dt2, dt, sd, ed : tdatetime;
begin
  sd := BtnStartdate.Date;
  ed := BtnEnddate.Date;
  dt := ed;
  dt2:= addDays(Lastday(dt), 1);
  dt1:= addMonths(dt2, -1);

  if getQValueInteger('select count(*) from t_mpp where tdate >='''+date2sql(dt2)+''' ') > 0 then
  begin
    MsgError('Ada Report MPP Periode Terbaru');
    abort;
    exit;
  end;
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('tmpp_id'));
end;
procedure TFrmRMPP.afterDeleteTaken;
begin
  //
end;
procedure TFrmRMPP.afterCancelTaken;
begin
  //
end;
//end Relatives

//Asset q_detail3
//end Asset

//Job q_detail4
//end Job

//Training q_detail5
//end Training

//Education q_detail6
//end Education

//salary q_detail7
//end salary

//begin reward
//end reward

//begin punishment
//end punishment

//detail history
//end detail history

procedure TFrmRMPP.N1CreateReport1Click(Sender: TObject);
var
  dt1, dt2, dt, sd, ed : tdatetime;
  qd, qe, qm, qt : tzquery;
begin
  sd := BtnStartdate.Date;
  ed := BtnEnddate.Date;
  dt := ed;
  dt2:= addDays(Lastday(dt), 1);
  dt1:= addMonths(dt2, -1);

  if getQValueInteger('select count(*) from t_mpp where tdate >='''+date2sql(dt2)+''' ') > 0 then
  begin
    MsgError('Ada Report MPP Periode Terbaru');
    abort;
    exit;
  end;

  if confirm('Create Report Periode '+formatdatetime('dd MMM yyyy', sd)+' To '+formatdatetime('dd MMM yyyy', ed)+' ') <> 'YES' then exit;
  ShowProgressbar;
  ExecuteSQL('delete from t_mpp_detail where tmpp_id in (select tmpp_id from '+es+
                  't_mpp where month(tdate)=month('''+date2sql(dt1)+''') and '+es+
                  'year(tdate)=year('''+date2sql(dt1)+''') ) ');
  ExecuteSQL('delete from t_mpp where month(tdate)=month('''+date2sql(dt1)+''') and '+es+
                  'year(tdate)=year('''+date2sql(dt1)+''') ');
  qm := createquery;
  qt := createquery;
  qe := createquery;
  qd := createquery;

  qm.Query('select * from m_mpp order by workarea_id, _order');
  qm.First;
  while not qm.Eof do
  begin
    SetProgressbarDefault(qm);
    qt.Query('select * from t_mpp where month(tdate)=month('''+date2sql(dt1)+''') and '+es+
             'year(tdate)=year('''+date2sql(dt1)+''') and '+gets('mpp_id', qm)+' '+es+
             ' ');
    if qt.RecordCount > 0 then
    begin
      qt.Edit;
      isiKolomUser(False, qt);
    end else
    begin
      qt.Append;
      isiKolomUser(True, qt);
    end;
    qt.setField('tdate', dt);
    qt.setField('startdate', sd);
    qt.setField('enddate', ed);
    qt.SetMultiFieldQ('mpp_id,workarea_id,group1,group2,_order,position_id,name,ideal', qm);
    qt.Post;

    ExecuteSQL('delete from t_mpp_detail where '+gets('tmpp_id', qt)+' ');
    qd.Query('select * from t_mpp_detail where '+gets('tmpp_id', qt)+' ');
    qe.Query('select employee_id, nip, name, resigndate from m_employee '+es+
             'where '+gets('position_id', qt)+' and '+gets('workarea_id', qt)+' and joindate <= '''+date2sql(dt)+''' '+es+
             'and ( isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sd)+''' ) '+es+
             'order by nip ');
    qe.First;
    while not qe.Eof do
    begin
      qd.Append;
      qd.SetMultiFieldQ('tmpp_id', qt);
      qd.SetMultiFieldQ('employee_id,nip,name,resigndate', qe);
      isiKolomUser(true, qd);
      qd.Post;
      qe.Next;
    end;
    ExecuteSQL('update t_mpp a, ( '+es+
                  'select tmpp_id, count(*) as existing from t_mpp_detail '+es+
                  'where '+gets('tmpp_id', qt)+' group by tmpp_id '+es+
                              ' ) b '+es+
               'set a.existing = b.existing '+es+
               'where a.tmpp_id = b.tmpp_id and a.tmpp_id = '''+qt.getFieldString('tmpp_id')+''' ');
    ExecuteSQL('update t_mpp  '+es+
               'set gap = existing-ideal '+es+
               'where tmpp_id = '''+qt.getFieldString('tmpp_id')+''' ');
    qm.Next;
  end;

  qm.Free;
  qt.Free;
  qe.Free;
  qd.Free;
  ReloadClick;
  HideProgressbar;
end;

procedure TFrmRMPP.N1PrintReport1Click(Sender: TObject);
var
  s :string;
  x : integer;
  qh, qd, qt : tzquery;
begin
  ShowProgressbar;
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  q_laporan.Active  := False;
  ExecuteSQL('truncate tmp_mpp');
  qh := CreateQuery;
  qd := CreateQuery;
  qt := CreateQuery;
  qt.Query('select * from tmp_mpp');
  qh.Query('select * '+es+
           'from t_mpp  '+es+
           'where tdate >= '''+date2sql(startdate)+''' and '+es+
           'tdate <='''+date2sql(enddate)+'''  '+es+
           'order by workarea_id, _order '+es+
           '');
  qh.First;
  while not qh.eof do
  begin
    SetProgressbarDefault(qh);
    qd.Query('select p.tmpp_id, p.tdate, p.startdate, p.enddate, '+es+
             'p.mpp_id, p.workarea_id, w.name as workareaname, '+es+
             'p._order, p.group1, p.group2, p.position_id, '+es+
             'po.name as positionname, p.ideal, p.existing, p.gap, '+es+
             'pd.employee_id, pd.nip, pd.name as employeename, pd.resigndate, pd.note, '+es+
             '( select name from s_reportparam where reportname=''report mpp'' and paramname=''param1'' ) as managerhrd1, '+es+
             '( select value from s_reportparam where reportname=''report mpp'' and paramname=''param1'' ) as managerhrd2, '+es+
             '( select name from s_reportparam where reportname=''report mpp'' and paramname=''param2'' ) as managerdirektur1, '+es+
             '( select value from s_reportparam where reportname=''report mpp'' and paramname=''param2'' ) as managerdirektur2, '+es+
             '( select name from s_reportparam where reportname=''report mpp'' and paramname=''param3'' ) as seniorhrd1, '+es+
             '( select value from s_reportparam where reportname=''report mpp'' and paramname=''param3'' ) as seniorhrd2, '+es+
             '( select name from s_reportparam where reportname=''report mpp'' and paramname=''param4'' ) as manageroperasional1, '+es+
             '( select value from s_reportparam where reportname=''report mpp'' and paramname=''param4'' ) as manageroperasional2, '+es+
             'p.useradded, p.dateadded, p.useredited, p.dateedited '+es+
             'from t_mpp p '+es+
             'left join t_mpp_detail pd on p.tmpp_id = pd.tmpp_id '+es+
             'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
             'left join m_position po on p.position_id = po.position_id '+es+
             'where p.tmpp_id = '''+qh.getFieldString('tmpp_id')+''' '+es+
             'order by w.name, _order, pd.nip');
    qd.First;
    x := 1;
    while not qd.Eof do
    begin
      qt.Append;
      qt.SetMultiFieldQ('tmpp_id,tdate,startdate,enddate,mpp_id,workarea_id, '+es+
                        'workareaname,_order,group1,group2,position_id,'+es+
                        'positionname,ideal,existing,gap,employee_id,nip,'+es+
                        'employeename,resigndate,note,managerhrd1,managerhrd2, '+es+
                        'managerdirektur1,managerdirektur2,seniorhrd1,'+es+
                        'seniorhrd2,manageroperasional1,manageroperasional2,'+es+
                        'useradded,dateadded,useredited,dateedited', qd);
      qt.setField('name', qd.getFieldString('positionname') );
      if x >= 2 then
      begin
        qt.setField('positionname', '');
        qt.SetMultiField('ideal,existing,gap', null);
      end;
      qt.Post;
      x := x + 1;
      qd.Next;
    end;
    qh.Next;
  end;

  qh.Free;
  qd.Free;
  qt.Free;

  q_laporan.Query('select * from tmp_mpp order by workarea_id, _order, nip');

  HideProgressbar;
  if q_laporan.RecordCount > 0 then
  begin
    FR_Report.ShowReport;
  end else
  begin
    MsgError('No Data to Print');
  end;
end;


end.
