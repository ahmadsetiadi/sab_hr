unit UEmployee2;

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
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, cxSplitter;

type
  TFrmEmployee2 = class(TForm)
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
    Q_Mutation: TZQuery;
    DS_Mutation: TDataSource;
    frxDBDataset2: TfrxDBDataset;
    DS_Relatives: TDataSource;
    frxDBDataset3: TfrxDBDataset;
    Q_Relatives: TZQuery;
    DS_Asset: TDataSource;
    frxDBDataset4: TfrxDBDataset;
    Q_Asset: TZQuery;
    DS_Job: TDataSource;
    frxDBDataset5: TfrxDBDataset;
    Q_Job: TZQuery;
    Q_Education: TZQuery;
    frxDBDataset6: TfrxDBDataset;
    DS_Education: TDataSource;
    Q_Training: TZQuery;
    DS_Training: TDataSource;
    frxDBDataset7: TfrxDBDataset;
    N1PrintEmployeeReport1: TMenuItem;
    TabDetail8: TcxTabSheet;
    TabDetail9: TcxTabSheet;
    GRID_DETAIL8: TcxGrid;
    DETAIL8: TcxGridDBBandedTableView;
    GRID_DETAIL8Level1: TcxGridLevel;
    GRID_DETAIL9: TcxGrid;
    DETAIL9: TcxGridDBBandedTableView;
    GRID_DETAIL9Level1: TcxGridLevel;
    Q_Reward: TZQuery;
    DS_Reward: TDataSource;
    frxDBDataset8: TfrxDBDataset;
    Q_Punishment: TZQuery;
    DS_Punishment: TDataSource;
    frxDBDataset9: TfrxDBDataset;
    Q_DETAIL8: TZQuery;
    DS_DETAIL8: TDataSource;
    cxGridPopupMenu9: TcxGridPopupMenu;
    Q_DETAIL9: TZQuery;
    DS_DETAIL9: TDataSource;
    cxGridPopupMenu10: TcxGridPopupMenu;
    N1SendPasswordtoEmail1: TMenuItem;
    N2ClearResigndate1: TMenuItem;
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

    procedure newRecordMutation;
    procedure beforePostMutation;
    procedure afterPostMutation;
    procedure beforeEditMutation;
    procedure beforeDeleteMutation;
    procedure afterDeleteMutation;
    procedure afterCancelMutation;

    procedure newRecordRelatives;
    procedure beforePostRelatives;
    procedure afterPostRelatives;
    procedure beforeEditRelatives;
    procedure beforeDeleteRelatives;
    procedure afterDeleteRelatives;
    procedure afterCancelRelatives;

    procedure newRecordAsset;
    procedure beforePostAsset;
    procedure afterPostAsset;
    procedure beforeEditAsset;
    procedure beforeDeleteAsset;
    procedure afterDeleteAsset;
    procedure afterCancelAsset;

    procedure newRecordJob;
    procedure beforePostJob;
    procedure afterPostJob;
    procedure beforeEditJob;
    procedure beforeDeleteJob;
    procedure afterDeleteJob;
    procedure afterCancelJob;

    procedure newRecordTraining;
    procedure beforePostTraining;
    procedure afterPostTraining;
    procedure beforeEditTraining;
    procedure beforeDeleteTraining;
    procedure afterDeleteTraining;
    procedure afterCancelTraining;

    procedure newRecordEducation;
    procedure beforePostEducation;
    procedure afterPostEducation;
    procedure beforeEditEducation;
    procedure beforeDeleteEducation;
    procedure afterDeleteEducation;
    procedure afterCancelEducation;

    procedure newRecordSalary;
    procedure beforePostSalary;
    procedure afterPostSalary;
    procedure beforeEditSalary;
    procedure beforeDeleteSalary;
    procedure afterDeleteSalary;
    procedure afterCancelSalary;

    procedure newRecordReward;
    procedure beforePostReward;
    procedure afterPostReward;
    procedure beforeEditReward;
    procedure beforeDeleteReward;
    procedure afterDeleteReward;
    procedure afterCancelReward;

    procedure newRecordPunishment;
    procedure beforePostPunishment;
    procedure afterPostPunishment;
    procedure beforeEditPunishment;
    procedure beforeDeletePunishment;
    procedure afterDeletePunishment;
    procedure afterCancelPunishment;

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure actTabDetail2Execute(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure N1PrintEmployeeReport1Click(Sender: TObject);
    procedure N1SendPasswordtoEmail1Click(Sender: TObject);
    procedure N2ClearResigndate1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmEmployee2: TFrmEmployee2;
  DisableEventEdit, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  pwd, eid : string;
  divi, work, posi, grad, ests : integer;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmEmployee2.VisibleALLGridDetail(tipe:boolean=False);
begin
  PageDetail.Visible    := False;
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
end;
procedure TFrmEmployee2.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmEmployee2.cekAllEditModule(idm:integer);
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
procedure TFrmEmployee2.isiALLTableKolom;
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
procedure TFrmEmployee2.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  q_master.Active := false;
  //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmEmployee2.FormCreate(Sender: TObject);
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
  ShowDateTemplate(False);
end;
procedure TFrmEmployee2.SettingQuery;
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
  SQLGrid[idm]      := getQuery(txtid.Text, False, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  setColumnWidth(txtid.Text, q_master, master);
  StyleGridReadOnly(master);
  SettingGridDetail;

  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmEmployee2.SettingGridDetail;
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
    StyleGridReadOnly(getGridByName(namagrid));
    qd.Next;
  end;
  qd.Free;
end;
procedure TFrmEmployee2.ReloadClick;
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, False, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
end;
procedure TFrmEmployee2.SettingFont;
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
procedure TFrmEmployee2.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, cekValidasi('`insert`', mn));
  SetEditTable(master, cekValidasi('`edit`', mn));
  SetDeleteTable(master, cekValidasi('`delete`', mn));

  ppAdd.Visible    := cekValidasi('`insert`', mn);
  ppEdit.Visible   := cekValidasi('`edit`', mn);
  ppDelete.Visible := cekValidasi('`delete`', mn);

  ppExport.Visible := cekValidasi('`export`', mn);
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );

end;
procedure TFrmEmployee2.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmEmployee2.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmEmployee2.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmEmployee2.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmEmployee2.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmEmployee2.MenuItem1Click(Sender: TObject);
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
procedure TFrmEmployee2.OneMonth1Click(Sender: TObject);
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

procedure TFrmEmployee2.NextMonth1Click(Sender: TObject);
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
procedure TFrmEmployee2.PrevMonth1Click(Sender: TObject);
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
procedure TFrmEmployee2.OneYear1Click(Sender: TObject);
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
procedure TFrmEmployee2.OneDay1Click(Sender: TObject);
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
procedure TFrmEmployee2.oday1Click(Sender: TObject);
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
procedure TFrmEmployee2.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmEmployee2.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmEmployee2.getFocusQuery : TZQuery;
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
end;
function TFrmEmployee2.getFocusTableName : String;
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
function TFrmEmployee2.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmEmployee2.getFocusGridView : TcxGridDBBandedTableView;
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
    end;
  end;
end;
function TFrmEmployee2.getActiveModuleName : string;
var
  id1 : string;
begin
  id1 := inttostr(getCxGridByName(getFocusGridView.Name).Tag);
  result := getQValueString('select name from s_module where id_module='''+id1+''' ');
end;
procedure TFrmEmployee2.AutoActiveQuery;
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
procedure TFrmEmployee2.AutoRefreshQuery;
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
  qk.Query('select kolom_id from s_kolom where tablename='''+TableName[strtoint(txtid.Text)]+''' and tipekolom=''lookup'' order by no');
  qk.First;
  while not qk.Eof do
  begin
    if qlq[qk.getFieldInteger('kolom_id')].Active then qlq[qk.getFieldInteger('kolom_id')].Refresh;
    qk.Next;
  end;
  qk.Free;
end;
function TFrmEmployee2.getTabByName(nama:string) : TcxTabSheet;
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
end;
procedure TFrmEmployee2.ImportFromExcel1Click(Sender: TObject);
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
  {FrmImport.Q_MASTER.Query('select * from s_kolom where id_module='''+inttostr(idm)+''' and '+es+
                           '`tablename`='''+tn+''' and `_visible`=1 and '+es+
                           '( isnull(tipekolom) or tipekolom not in (''blob'', ''photo'') ) '+es+
                           'order by tablename, no');}
  FrmImport.q_master.Active := false;
  FrmImport.Q_Module.Active := True;
  frmimport.Show;
end;
function TFrmEmployee2.getCxGridByName(nama:string) : TcxGrid;
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
end;
function TFrmEmployee2.getGridByName(nama:string) : TcxGridDBBandedTableView;
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
end;
function TFrmEmployee2.getQueryByName(nama:string) : TZQuery;
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
end;
procedure TFrmEmployee2.actLookupExecute(Sender: TObject);
var
  Q : tzquery;
  s, sql : string;
  idk : integer;
begin
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
procedure TFrmEmployee2.actAddExecute(Sender: TObject);
begin
  //getQueryByName(getFocusGridView.Name)

  if cekValidasi('`insert`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Inserting = False then exit;
  getQueryByName(getFocusGridView.Name).Append;
end;
procedure TFrmEmployee2.actcancelExecute(Sender: TObject);
begin
  getQueryByName(getFocusGridView.Name).Cancel;
end;
procedure TFrmEmployee2.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Deleting = False then exit;
  if getQueryByName(getFocusGridView.Name).RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then getQueryByName(getFocusGridView.Name).Delete;
end;
procedure TFrmEmployee2.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', getActiveModuleName ) = false then exit;
  if getFocusGridView.OptionsData.Editing = False then exit;
  getQueryByName(getFocusGridView.Name).Edit;
end;
procedure TFrmEmployee2.actRefreshExecute(Sender: TObject);
begin
   //getQueryByName(getFocusGridView.Name).Refresh;
   q_master.Refresh;
end;
procedure TFrmEmployee2.actSaveExecute(Sender: TObject);
begin
  if isnowedit[getQueryByName(getFocusGridView.Name).Tag]  then getQueryByName(getFocusGridView.Name).Post;
end;
procedure TFrmEmployee2.actTabDetail1Execute(Sender: TObject);
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
procedure TFrmEmployee2.actTabDetail2Execute(Sender: TObject);
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

procedure TFrmEmployee2.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmEmployee2.ppExportClick(Sender: TObject);
begin
  if Confirm('Export Excel ?') = 'YES' then  ExportGrid('Excel', getCxGridByName(getfocusgridview.Name) );
end;
procedure TFrmEmployee2.PopupMenuPopup(Sender: TObject);
begin
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
procedure TFrmEmployee2.ppFreezeClick(Sender: TObject);
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
procedure TFrmEmployee2.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'default');
end;
procedure TFrmEmployee2.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'month');
end;
procedure TFrmEmployee2.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'year');
end;
procedure TFrmEmployee2.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'relative');
end;
procedure TFrmEmployee2.ppFindClick(Sender: TObject);
begin
  {dbg(getFocusGridView.Name);
  dbg(getQueryByName(getFocusGridView.Name).Name);
  dbg(getFocusGridView.Name);
  dbg(getFocusTableName);}
  FindClick(getQueryByName(getFocusGridView.Name), getFocusGridView, getFocusTableName );
end;
procedure TFrmEmployee2.ppShowALLClick(Sender: TObject);
begin
  //dbg(getQueryByName(getFocusGridView.Name).Name);
  //dbg(SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
  ShowALLClick(getQueryByName(getFocusGridView.Name), SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
end;
//end popup menu

//isnowedit master
procedure TFrmEmployee2.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmEmployee2.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmEmployee2.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmEmployee2.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmEmployee2.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmEmployee2.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmEmployee2.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmEmployee2.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmEmployee2.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
  if nama='detail1' then afterCancelMutation;
  if nama='detail2' then afterCancelRelatives;
  if nama='detail3' then afterCancelAsset;
  if nama='detail4' then afterCancelJob;
  if nama='detail5' then afterCancelTraining;
  if nama='detail6' then afterCancelEducation;
  if nama='detail7' then afterCancelSalary;
  if nama='detail8' then afterCancelReward;
  if nama='detail9' then afterCancelPunishment;
end;
procedure TFrmEmployee2.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
  if nama='detail1' then afterDeleteMutation;
  if nama='detail2' then afterDeleteRelatives;
  if nama='detail3' then afterDeleteAsset;
  if nama='detail4' then afterDeleteJob;
  if nama='detail5' then afterDeleteTraining;
  if nama='detail6' then afterDeleteEducation;
  if nama='detail7' then afterDeleteSalary;
  if nama='detail8' then afterDeleteReward;
  if nama='detail9' then afterDeletePunishment;
end;
procedure TFrmEmployee2.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
  if nama='detail1' then afterPostMutation;
  if nama='detail2' then afterPostRelatives;
  if nama='detail3' then afterPostAsset;
  if nama='detail4' then afterPostJob;
  if nama='detail5' then afterPostTraining;
  if nama='detail6' then afterPostEducation;
  if nama='detail7' then afterPostSalary;
  if nama='detail8' then afterPostReward;
  if nama='detail9' then afterPostPunishment;
end;
procedure TFrmEmployee2.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if lowercase(q_master.getFieldString('status')) = 'non active' then
  begin
    MsgError('Can''t Delete Non Active Employee');
    abort;
    exit;
  end;
  if nama='master'  then beforeDeleteMaster;
  if nama='detail1' then beforeDeleteMutation;
  if nama='detail2' then beforeDeleteRelatives;
  if nama='detail3' then beforeDeleteAsset;
  if nama='detail4' then beforeDeleteJob;
  if nama='detail5' then beforeDeleteTraining;
  if nama='detail6' then beforeDeleteEducation;
  if nama='detail7' then beforeDeleteSalary;
  if nama='detail8' then beforeDeleteReward;
  if nama='detail9' then beforeDeletePunishment;
end;
procedure TFrmEmployee2.BeforeEditQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  if DisableEventEdit then
  begin
    ValidasiEdit(md);
    cekAllEditModule(strtoint(txtid.Text));
    if lowercase(q_master.getFieldString('status')) = 'non active' then
    begin
      MsgError('Can''t Edit Non Active Employee');
      abort;
      exit;
    end;
  end;
  isNowEdit[idm]    := True;
  isNewRecord[idm]  := False;
  if nama='master'  then beforeEditMaster;
  if nama='detail1' then beforeEditMutation;
  if nama='detail2' then beforeEditRelatives;
  if nama='detail3' then beforeEditAsset;
  if nama='detail4' then beforeEditJob;
  if nama='detail5' then beforeEditTraining;
  if nama='detail6' then beforeEditEducation;
  if nama='detail7' then beforeEditSalary;
  if nama='detail8' then beforeEditReward;
  if nama='detail9' then beforeEditPunishment;
end;
procedure TFrmEmployee2.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
  if nama='detail1' then beforePostMutation;
  if nama='detail2' then beforePostRelatives;
  if nama='detail3' then beforePostAsset;
  if nama='detail4' then beforePostJob;
  if nama='detail5' then beforePostTraining;
  if nama='detail6' then beforePostEducation;
  if nama='detail7' then beforePostSalary;
  if nama='detail8' then beforePostReward;
  if nama='detail9' then beforePostPunishment;
end;
procedure TFrmEmployee2.NewRecordQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  ValidasiInsert(md);
  cekAllEditModule(strtoint(txtid.Text));
  if nama <> 'master' then
  begin
    if lowercase(q_master.getFieldString('status')) = 'non active' then
    begin
      MsgError('Can''t Add Data For Non Active Employee');
      abort;
      exit;
    end;
  end;
  isNowEdit[idm]    := True;
  isNewRecord[idm]  := True;
  isiDefaultNewRecord( getQueryByName(nama) , TableName[idm]);
  if nama='master'  then newRecordMaster;
  if nama='detail1' then newRecordMutation;
  if nama='detail2' then newRecordRelatives;
  if nama='detail3' then newRecordAsset;
  if nama='detail4' then newRecordJob;
  if nama='detail5' then newRecordTraining;
  if nama='detail6' then newRecordEducation;
  if nama='detail7' then newRecordSalary;
  if nama='detail8' then newRecordReward;
  if nama='detail9' then newRecordPunishment;
end;
//end procedure query

//master
procedure TFrmEmployee2.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('taxtype', 1 );
  pwd := '';
  //q_master.setField(
end;
procedure TFrmEmployee2.beforePostMaster;
begin
  if isNewRecord[q_master.Tag] then
  begin
    q_master.setField('password', defaultPassword(q_master) );
  end else
  begin
    if q_master.getFieldString('password') <> '' then
    begin
      if pwd <> q_master.getFieldString('password') then
      begin
        q_master.setField('password', Encrypt(q_master.getFieldString('password')) );
      end;
    end;
    if divi <> q_master.getFieldInteger('division_id') then begin MsgError('Please Edit Division at Employee Mutation'); abort; exit; end;
    if work <> q_master.getFieldInteger('workarea_id') then begin MsgError('Please Edit Workarea at Employee Mutation'); abort; exit; end;
    if posi <> q_master.getFieldInteger('position_id') then begin MsgError('Please Edit Position at Employee Mutation'); abort; exit; end;
    if grad <> q_master.getFieldInteger('grade_id') then begin MsgError('Please Edit Grade at Employee Mutation'); abort; exit; end;
    if ests <> q_master.getFieldInteger('employeestatus_id') then begin MsgError('Please Edit EmployeeStatus at Employee Mutation'); abort; exit; end;
  end;
  q_master.setField('showpassword', Decrypt(q_master.getFieldString('password')) );
  q_master.setField('employeetype', '2');
end;
procedure TFrmEmployee2.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmEmployee2.beforeEditMaster;
begin
  pwd := q_master.getFieldString('password');
  divi:= q_master.getFieldInteger('division_id');
  work:= q_master.getFieldInteger('workarea_id');
  posi:= q_master.getFieldInteger('position_id');
  grad:= q_master.getFieldInteger('grade_id');
  ests:= q_master.getFieldInteger('employeestatus_id');
end;
procedure TFrmEmployee2.beforeDeleteMaster;
begin
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmEmployee2.afterDeleteMaster;
begin
  //
end;
procedure TFrmEmployee2.afterCancelMaster;
begin
  //
end;
//end master

//mutation q_detail1
procedure TFrmEmployee2.newRecordMutation;
begin
  q_detail1.setField('tdate', ServerDate);
  q_detail1.SetMultiFieldQ('nip,company_id,division_id,workarea_id,'+
                            'position_id,grade_id,employeestatus_id', q_master);
end;
procedure TFrmEmployee2.beforePostMutation;
begin
  CheckIsFirstMutation(q_detail1);
end;
procedure TFrmEmployee2.afterPostMutation;
begin
  updateEmployeeFromMutation(q_detail1.getFieldString('employee_id'));
  //ExecuteSQL('call updateEmployeeMutation('+q_detail1.getFieldString('employee_id')+')');
  q_master.Refresh;
end;
procedure TFrmEmployee2.beforeEditMutation;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteMutation;
var
  qt, qe : tzquery;
begin
  if getQValueInteger('select count(*) from m_employee_mutation '+es+
                      'where employee_id = '''+q_detail1.getFieldString('employee_id')+''' '+es+
                      'and tdate > '''+q_detail1.date2sql('tdate')+''' ') > 0 then
  begin
    MsgError('Please Delete the Data with the latest Date First');
    abort;
    exit;
  end;
  eid:= q_detail1.getFieldString('employee_id');
  qt := createquery;
  qe := createquery;
  qt.Query('select * from m_employee_mutation '+es+
           ' where employee_id='''+eid+''' ');
  if qt.RecordCount <= 1 then
  begin
    if qe.Query('select * from m_employee '+es+
                'where employee_id='''+eid+''' ') > 0 then
    begin
      qe.Edit;
      qe.SetMultiFieldQ('company_id,division_id,position_id,'+
                        'department_id,unit_id,workarea_id,grade_id,'+
                        'employeestatus_id', qt);
      isiKolomUser(False, qe);
      qe.Post;
    end;
  end;
  qt.Free;
  qe.Free;
end;
procedure TFrmEmployee2.afterDeleteMutation;
var
  qt : tzquery;
begin
  updateEmployeeFromMutation(eid);
  qt := createquery;
  qt.Query('select * from m_employee_mutation '+es+
           ' where employee_id='''+eid+'''  ');
  if qt.RecordCount > 1 then
  begin
    qt.Query('select * from m_employee_mutation '+es+
                      ' where employee_id='''+eid+''' order by tdate desc limit 1 ');
    if qt.RecordCount > 0 then
    begin
      ExecuteSQL('delete from m_employee_mutation where employee_id='''+eid+''' '+es+
                 ' and tdate='''+qt.date2sql('tdate')+''' ' );
    end;
  end;
  qt.Free;
  q_master.Refresh;
end;
procedure TFrmEmployee2.afterCancelMutation;
begin
  //
end;
//end mutation

//Relatives q_detail2
procedure TFrmEmployee2.newRecordRelatives;
begin
  q_detail2.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee2.beforePostRelatives;
begin
  //
end;
procedure TFrmEmployee2.afterPostRelatives;
begin
  q_detail2.Refresh;
end;
procedure TFrmEmployee2.beforeEditRelatives;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteRelatives;
begin
  //
end;
procedure TFrmEmployee2.afterDeleteRelatives;
begin
  //
end;
procedure TFrmEmployee2.afterCancelRelatives;
begin
  //
end;
//end Relatives

//Asset q_detail3
procedure TFrmEmployee2.newRecordAsset;
begin
  q_detail3.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee2.beforePostAsset;
begin
  //
end;
procedure TFrmEmployee2.afterPostAsset;
begin
  //
end;
procedure TFrmEmployee2.beforeEditAsset;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteAsset;
begin
  //
end;
procedure TFrmEmployee2.afterDeleteAsset;
begin
  //
end;
procedure TFrmEmployee2.afterCancelAsset;
begin
  //
end;
//end Asset

//Job q_detail4
procedure TFrmEmployee2.newRecordJob;
begin
  q_detail4.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee2.beforePostJob;
begin
  //
end;
procedure TFrmEmployee2.afterPostJob;
begin
  //
end;
procedure TFrmEmployee2.beforeEditJob;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteJob;
begin
  //
end;
procedure TFrmEmployee2.afterDeleteJob;
begin
  //
end;
procedure TFrmEmployee2.afterCancelJob;
begin
  //
end;
//end Job

//Training q_detail5
procedure TFrmEmployee2.newRecordTraining;
begin
  q_detail5.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee2.beforePostTraining;
begin
  //
end;
procedure TFrmEmployee2.afterPostTraining;
begin
  //
end;
procedure TFrmEmployee2.beforeEditTraining;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteTraining;
begin
  //
end;
procedure TFrmEmployee2.afterDeleteTraining;
begin
  //
end;
procedure TFrmEmployee2.afterCancelTraining;
begin
  //
end;
//end Training

//Education q_detail6
procedure TFrmEmployee2.newRecordEducation;
begin
  q_detail6.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee2.beforePostEducation;
begin
  //
end;
procedure TFrmEmployee2.afterPostEducation;
begin
  //
end;
procedure TFrmEmployee2.beforeEditEducation;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteEducation;
begin
  //
end;
procedure TFrmEmployee2.afterDeleteEducation;
begin
  //
end;
procedure TFrmEmployee2.afterCancelEducation;
begin
  //
end;
//end Education

//salary q_detail7
procedure TFrmEmployee2.newRecordSalary;
begin
  q_detail7.setField('tdate', ServerDate);
  q_detail7.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee2.beforePostSalary;
begin
  //
end;
procedure TFrmEmployee2.afterPostSalary;
begin
  //
end;
procedure TFrmEmployee2.beforeEditSalary;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteSalary;
begin
  //
end;
procedure TFrmEmployee2.afterDeleteSalary;
begin
  //
end;
procedure TFrmEmployee2.afterCancelSalary;
begin
  //
end;
//end salary

//begin reward
procedure TFrmEmployee2.newRecordReward;
begin
  q_detail8.SetMultiField('tdate', serverdate);
end;
procedure TFrmEmployee2.beforePostReward;
begin
  //
end;
procedure TFrmEmployee2.afterPostReward;
begin
  //
end;
procedure TFrmEmployee2.beforeEditReward;
begin
  //
end;
procedure TFrmEmployee2.beforeDeleteReward;
begin
  //
end;
procedure TFrmEmployee2.afterDeleteReward;
begin
  //
end;
procedure TFrmEmployee2.afterCancelReward;
begin
  //
end;
//end reward

//begin punishment
procedure TFrmEmployee2.newRecordPunishment;
begin
  q_detail9.SetMultiField('tdate,validthrough', serverdate);
end;
procedure TFrmEmployee2.beforePostPunishment;
begin
  //
end;
procedure TFrmEmployee2.afterPostPunishment;
begin
  //
end;
procedure TFrmEmployee2.beforeEditPunishment;
begin
  //
end;
procedure TFrmEmployee2.beforeDeletePunishment;
begin
  //
end;
procedure TFrmEmployee2.afterDeletePunishment;
begin
  //
end;
procedure TFrmEmployee2.afterCancelPunishment;
begin
  //
end;
//end punishment

procedure TFrmEmployee2.N1PrintEmployeeReport1Click(Sender: TObject);
var
  qe : TZQuery;
  kolom, syarat, s : String;
begin
  q_laporan.active := false;
  s := '';
  s := InputBox('Cari Nama Employee', 'Search', s);
  qe := createquery;
  kolom := '*';
  syarat:= ' (0=0) ';
  qe.Query('select * from s_lookup where tablename=''m_employee'' and columnname=''employee_id'' ');
  if qe.RecordCount > 0 then
  begin
    kolom := qe.getFieldString('kolom');
    syarat:= qe.getFieldString('syarat');
  end;

  qe.Query('select '+kolom+' from m_employee where name like ''%'+s+'%'' and '+es+
           ''+getsecurity(txtid.Text)+' '+es+
          'order by name ');
  if LookupQuery('Pilih Employee', qe, 800, True, '', 'm_employee') =False then
  begin
    qe.Free;
    exit;
  end;
  s := getColumnFromFilter(qe, 'employee_id');
  q_laporan.active      := false;
  q_mutation.active     := false;
  Q_Relatives.active    := false;
  Q_Asset.Active        := false;
  Q_Job.Active          := false;
  Q_Training.Active     := false;
  Q_Education.Active    := false;
  Q_Reward.Active       := false;
  Q_Punishment.Active   := false;
  q_laporan.Query('select p.*, '+es+
                  'c.name as companyname, '+es+
                  'd.name as divisionname, '+es+
                  'w.name as workareaname, '+es+
                  'po.name as positionname, '+es+
                  'g.name as gradename, '+es+
                  'es.name as employeestatusname, '+es+
                  'j.name as jamsostekname, t.name as taxname, '+es+
                  'b.name as bankname, o.name as overtimename '+es+
                  'from m_employee p '+es+
                  'left join m_company c on p.company_id = c.company_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_grade g on p.grade_id = g.grade_id '+es+
                  'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                  'left join m_jamsostek j on p.jamsostek_id = j.jamsostek_id '+es+
                  'left join m_tax t on p.taxtype = t.tax_id '+es+
                  'left join m_bank b on p.bank_id = b.bank_id '+es+
                  'left join m_overtime o on p.overtime_id = o.overtime_id '+es+
                  'where p.employee_id in '+s+' '+es+
                  'order by p.nip');
  q_mutation.active     := True;
  Q_Relatives.active    := True;
  Q_Asset.Active        := True;
  Q_Job.Active          := True;
  Q_Training.Active     := True;
  Q_Education.Active    := True;
  Q_Reward.Active       := True;
  Q_Punishment.Active   := True;
  qe.Free;
  FR_Report.ShowReport;
end;


procedure TFrmEmployee2.N1SendPasswordtoEmail1Click(Sender: TObject);
var
  s : string;
  body, smtpPass, smtpUser, smtpHost : string;
  smtpPort :Integer;
begin
  if LookupQuery('Choose Employee', q_master, 800, True, '', 'm_employee' ) = false then exit;
  ShowProgressbar;
  smtpHost := getQValueString('select value from s_setting where name=''smtphost'' ');
  smtpPort := getQValueInteger('select value from s_setting where name=''smtpport'' ');
  smtpUser := getQValueString('select value from s_setting where name=''smtpusername'' ');
  smtpPass := getQValueString('select value from s_setting where name=''smtppassword'' ');
  s := getColumnFromFilter(q_master, 'employee_id');
  q_master.DisableControls;
  q_master.First;
  while not q_master.Eof do
  begin
    SetProgressbarDefault(q_master);
    body := 'Dear '+q_master.getFieldString('name')+es+
            'Berikut ini adalah informasi yang dapat Anda gunakan untuk Login ke HRIS : '+es+
            ''+es+
            'Username : '+q_master.getFieldString('nip')+es+
            'Password : '+Decrypt(q_master.getFieldString('password'))+es+
            ''+es+
            'Password Payroll Slip : '+Decrypt(q_master.getFieldString('password'))+
            '';
    if q_master.getFieldString('email') <> '' then
    begin
      SendEmail(q_master.getFieldString('email'),
                'Username & Password HRIS '+
                  uppercase(q_laporan.getFieldString('companyname')),
                body, '', smtpHost, smtpUser, smtpPass, smtpPort);
    end;
    q_master.Next;
  end;
  q_master.EnableControls;
  q_master.Refresh;
  q_master.First;
  HideProgressbar;
end;

procedure TFrmEmployee2.N2ClearResigndate1Click(Sender: TObject);
begin
  if confirm('Are You Want to Clear Resigndate for "'+q_master.getFieldString('name')+'" ?') <> 'YES'  then exit;
  DisableEventEdit := False;
  q_master.Edit;
  q_master.setField('resigndate', null);
  q_master.Post;
  q_master.Refresh;
  DisableEventEdit := True;
  msgok('Finished');
end;

end.
