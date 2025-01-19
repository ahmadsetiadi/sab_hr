unit UTunjangan2;

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
  TFrmTunjangan2 = class(TForm)
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
    frxDSLaporan: TfrxDBDataset;
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
    TabDetail10: TcxTabSheet;
    GRID_DETAIL10: TcxGrid;
    DETAIL10: TcxGridDBBandedTableView;
    GRID_DETAIL10Level1: TcxGridLevel;
    Q_DETAIL10: TZQuery;
    DS_DETAIL10: TDataSource;
    cxGridPopupMenu11: TcxGridPopupMenu;
    Button1: TButton;
    Edit1: TEdit;
    ApplicationEvents1: TApplicationEvents;
    DS_Employee: TDataSource;
    Q_Employee: TZQuery;
    N1ProsesTunjangan1: TMenuItem;
    N1PrintSlipTunjangan1: TMenuItem;
    frxReport1: TfrxReport;
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

    function AllreadyPaid(loan_id:string) : boolean;

    procedure beforePostMaster;
    procedure newRecordMaster;
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

    procedure newRecordHistory;
    procedure beforePostHistory;
    procedure afterPostHistory;
    procedure beforeEditHistory;
    procedure beforeDeleteHistory;
    procedure afterDeleteHistory;
    procedure afterCancelHistory;

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure actTabDetail2Execute(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure isiDataMenuPrint;
    procedure Button1Click(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N1ProsesTunjangan1Click(Sender: TObject);

    procedure QDBeforeEdit(DataSet: TDataSet);
    procedure QDAfterPost(DataSet: TDataSet);
    procedure createTunjangan(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
    procedure createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
    procedure processPayroll;
    procedure N1PrintSlipTunjangan1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmTunjangan2: TFrmTunjangan2;
  isDisMutasi, DisableEventEdit, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  isNowEditDate : boolean;
  //grademt, pwd, eid : string;
  //divi, work, posi, grad, ests : integer;
  tsm : tstringlist;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmTunjangan2.VisibleALLGridDetail(tipe:boolean=False);
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
procedure TFrmTunjangan2.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmTunjangan2.cekAllEditModule(idm:integer);
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
procedure TFrmTunjangan2.isiALLTableKolom;
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
procedure TFrmTunjangan2.isiDataMenuPrint;
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
procedure TFrmTunjangan2.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  tsm.Free;
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  q_master.Active := false;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmTunjangan2.FormCreate(Sender: TObject);
begin
  isdebug := true;
  isDisMutasi := True;
  //ExecuteSQL('call autoupdateemployee(curdate());');
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

  isDisMutasi := True;
  //dbg('1');
  SettingQuery;
  //dbg('2');
  ValidasiControl;
  //dbg('3');
  SettingFont;
  //dbg('4');
  ShowDateTemplate(true);
  tsm := tstringlist.Create;
  tsm.Clear;
  //dbg('5');
  isDisMutasi := True;

  SetInsertTable(master, false);
  SetEditTable(master, false);
  SetDeleteTable(master, true);

  ReadOnlyDataset(DETAIL1);
  ReadOnlyALLColumn(Master);
  ReadOnlyALLColumn(DETAIL1);
  //dbg('6');
end;
procedure TFrmTunjangan2.SettingQuery;
var
  x, idd, idm : integer;
  qd  : tzquery;
  namagrid, s : string;
begin
  idm               := strtoint(txtid.Text);

  master.Tag        := strtoint(txtid.Text);
  GRID_MASTER.Tag   := strtoint(txtid.Text);
  q_master.Tag      := strtoint(txtid.Text);
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, true, startdate, enddate);
  s := SQLGrid[idm];
  //s := SQLGrid[idm] + ' and employee_id in (select employee_id from t_payroll where tdate >=''2017-03-01'' and tdate <=''2017-03-31'' ) order by nip';
  //dbg(s);
  q_master.Query(s);
  setColumnWidth(txtid.Text, q_master, master, true);
  StyleGridReadOnly(master);
  //dbg('a');
  if (lowercase(getgrouplogin) = 'administrator') or (lowercase(getuserlogin)='ismu') then
  begin
    for x := 0 to master.ColumnCount - 1 do
    begin
      if lowercase(master.Columns[x].DataBinding.FieldName) = 'email' then
      begin
        master.Columns[x].Options.Editing:= True;
        //master.Columns[x].Styles.Content := '';
        master.Columns[x].Styles.ResetStyles;
      end;
    end;
  end;
  //dbg('b');
  SettingGridDetail;
  //dbg('c');
  AutoActiveQuery;
  //dbg('d');
  q_master.Refresh;
  //dbg('e');
end;
procedure TFrmTunjangan2.SettingGridDetail;
var
  idd, idm : integer;
  qd  : tzquery;
  namagrid : string;
begin
  //dbg('x');
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
  //dbg('y');
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
    //pesan(SQLGrid[idd]);
    getQueryByName(namagrid).Query(SQLGrid[idd]);
    setColumnWidth(inttostr(idd), getQueryByName(namagrid), getGridByName(namagrid));
    StyleGridReadOnly(getGridByName(namagrid));
    qd.Next;
  end;
  //dbg('z');
  qd.Free;
end;
procedure TFrmTunjangan2.ReloadClick;
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, true, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
end;
procedure TFrmTunjangan2.SettingFont;
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
procedure TFrmTunjangan2.ValidasiControl;
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
  SetInsertTable(detail1, cekValidasi('`insert`', mn));
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
  ReadOnlyDataset(detail10);
end;
procedure TFrmTunjangan2.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmTunjangan2.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTunjangan2.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmTunjangan2.Button1Click(Sender: TObject);
begin
  //pesan(getsecurity2(edit1.Text));
  //findstr(edit1.Text, 'limit');
  //edit1.Text := Encrypt('bsmch2015');
end;

procedure TFrmTunjangan2.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmTunjangan2.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmTunjangan2.MenuItem1Click(Sender: TObject);
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

procedure TFrmTunjangan2.OneMonth1Click(Sender: TObject);
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

procedure TFrmTunjangan2.NextMonth1Click(Sender: TObject);
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
procedure TFrmTunjangan2.PrevMonth1Click(Sender: TObject);
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
procedure TFrmTunjangan2.OneYear1Click(Sender: TObject);
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
procedure TFrmTunjangan2.OneDay1Click(Sender: TObject);
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
procedure TFrmTunjangan2.oday1Click(Sender: TObject);
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
procedure TFrmTunjangan2.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmTunjangan2.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmTunjangan2.getFocusQuery : TZQuery;
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
function TFrmTunjangan2.getFocusTableName : String;
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
function TFrmTunjangan2.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmTunjangan2.getFocusGridView : TcxGridDBBandedTableView;
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
function TFrmTunjangan2.getActiveModuleName : string;
var
  id1 : string;
begin
  id1 := inttostr(getCxGridByName(getFocusGridView.Name).Tag);
  result := getQValueString('select name from s_module where id_module='''+id1+''' ');
end;
procedure TFrmTunjangan2.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmTunjangan2.AutoActiveQuery;
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
procedure TFrmTunjangan2.AutoRefreshQuery;
var
  x : integer;
  qk : TZquery;
begin
  //dbg('p');
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
  //dbg('k');
  qk := createquery;
  qk.Query('select kolom_id, columnname from s_kolom where tablename='''+TableName[strtoint(txtid.Text)]+''' and tipekolom=''lookup'' order by no');
  qk.First;
  while not qk.Eof do
  begin
    //dbg(qk.getFieldString('columnname'));
    if qlq[qk.getFieldInteger('kolom_id')].Active then qlq[qk.getFieldInteger('kolom_id')].Refresh;
    qk.Next;
  end;
  //dbg('l');
  qk.Free;
end;
function TFrmTunjangan2.getTabByName(nama:string) : TcxTabSheet;
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
procedure TFrmTunjangan2.ImportFromExcel1Click(Sender: TObject);
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
function TFrmTunjangan2.getCxGridByName(nama:string) : TcxGrid;
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
function TFrmTunjangan2.getGridByName(nama:string) : TcxGridDBBandedTableView;
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
function TFrmTunjangan2.getQueryByName(nama:string) : TZQuery;
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
procedure TFrmTunjangan2.actLookupExecute(Sender: TObject);
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
procedure TFrmTunjangan2.actAddExecute(Sender: TObject);
begin
  //getQueryByName(getFocusGridView.Name)

  if cekValidasi('`insert`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Inserting = False then exit;
  getQueryByName(getFocusGridView.Name).Append;
end;
procedure TFrmTunjangan2.actcancelExecute(Sender: TObject);
begin
  getQueryByName(getFocusGridView.Name).Cancel;
end;
procedure TFrmTunjangan2.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Deleting = False then exit;
  if getQueryByName(getFocusGridView.Name).RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then getQueryByName(getFocusGridView.Name).Delete;
end;
procedure TFrmTunjangan2.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', getActiveModuleName ) = false then exit;
  if getFocusGridView.OptionsData.Editing = False then exit;
  getQueryByName(getFocusGridView.Name).Edit;
end;
procedure TFrmTunjangan2.actRefreshExecute(Sender: TObject);
begin
   //getQueryByName(getFocusGridView.Name).Refresh;
   q_master.Refresh;
end;
procedure TFrmTunjangan2.actSaveExecute(Sender: TObject);
begin
  if isnowedit[getQueryByName(getFocusGridView.Name).Tag]  then getQueryByName(getFocusGridView.Name).Post;
end;
procedure TFrmTunjangan2.actTabDetail1Execute(Sender: TObject);
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
procedure TFrmTunjangan2.actTabDetail2Execute(Sender: TObject);
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

procedure TFrmTunjangan2.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmTunjangan2.ppExportClick(Sender: TObject);
begin
  if Confirm('Export Excel ?') = 'YES' then  ExportGrid('Excel', getCxGridByName(getfocusgridview.Name) );
end;
procedure TFrmTunjangan2.PopupMenuPopup(Sender: TObject);
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
procedure TFrmTunjangan2.ppFreezeClick(Sender: TObject);
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
procedure TFrmTunjangan2.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'default');
end;
procedure TFrmTunjangan2.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'month');
end;
procedure TFrmTunjangan2.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'year');
end;
procedure TFrmTunjangan2.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'relative');
end;
procedure TFrmTunjangan2.ppFindClick(Sender: TObject);
begin
  {dbg(getFocusGridView.Name);
  dbg(getQueryByName(getFocusGridView.Name).Name);
  dbg(getFocusGridView.Name);
  dbg(getFocusTableName);}
  FindClick(getQueryByName(getFocusGridView.Name), getFocusGridView, getFocusTableName );
end;
procedure TFrmTunjangan2.ppShowALLClick(Sender: TObject);
begin
  //dbg(getQueryByName(getFocusGridView.Name).Name);
  //dbg(SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
  ShowALLClick(getQueryByName(getFocusGridView.Name), SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
end;
//end popup menu

//isnowedit master
procedure TFrmTunjangan2.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTunjangan2.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmTunjangan2.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmTunjangan2.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTunjangan2.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmTunjangan2.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmTunjangan2.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmTunjangan2.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmTunjangan2.AfterCancelQ(idm : integer; nama:string);
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
  if nama='detail10' then afterCancelHistory;
end;
procedure TFrmTunjangan2.AfterDeleteQ(idm : integer; nama:string);
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
  if nama='detail10' then afterDeleteHistory;
end;
procedure TFrmTunjangan2.AfterPostQ(idm : integer; nama:string);
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
  if nama='detail10' then afterPostHistory;
end;
procedure TFrmTunjangan2.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  {if lowercase(q_master.getFieldString('status')) = 'non active' then
  begin
    MsgError('Can''t Delete Non Active Employee');
    abort;
    exit;
  end;}
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
  if nama='detail10' then beforeDeleteHistory;
end;
procedure TFrmTunjangan2.BeforeEditQ(idm : integer; nama:string);
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
    {if lowercase(q_master.getFieldString('status')) = 'non active' then
    begin
      MsgError('Can''t Edit Non Active Employee');
      abort;
      exit;
    end;}
  end;

  {if nama='detail1' then
  begin
    if getQValueInteger('select count(*) from m_employee_mutation '+es+
                        'where employee_id = '''+q_detail1.getFieldString('employee_id')+''' '+es+
                        'and tdate > '''+q_detail1.date2sql('tdate')+''' ') > 0 then
    begin
      MsgError('Please Edit the Data with the latest Date First');
      abort;
      exit;
    end;
  end;}
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
  if nama='detail10' then beforeEditHistory;
end;
procedure TFrmTunjangan2.BeforePostQ(idm : integer; nama:string);
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
  if nama='detail10' then beforePostHistory;
end;
procedure TFrmTunjangan2.NewRecordQ(idm : integer; nama:string);
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
  if nama='detail1' then newRecordMutation;
  if nama='detail2' then newRecordRelatives;
  if nama='detail3' then newRecordAsset;
  if nama='detail4' then newRecordJob;
  if nama='detail5' then newRecordTraining;
  if nama='detail6' then newRecordEducation;
  if nama='detail7' then newRecordSalary;
  if nama='detail8' then newRecordReward;
  if nama='detail9' then newRecordPunishment;
  if nama='detail10' then newRecordHistory;
end;
//end procedure query

//master
procedure TFrmTunjangan2.newRecordMaster;
begin
  AutoRefreshQuery;
end;
procedure tFrmTunjangan2.beforePostMaster;
begin
  //
end;
procedure TFrmTunjangan2.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmTunjangan2.beforeEditMaster;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteMaster;
begin
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('tun_id'));
end;
procedure TFrmTunjangan2.afterDeleteMaster;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelMaster;
begin
  //
end;
//end master

function TFrmTunjangan2.AllreadyPaid(loan_id:string) : boolean;
begin
end;
//mutation q_detail1
procedure TFrmTunjangan2.newRecordMutation;
begin
  //
end;
procedure TFrmTunjangan2.beforePostMutation;
begin
  //
end;
procedure TFrmTunjangan2.afterPostMutation;
begin
  q_master.Refresh;
end;
procedure TFrmTunjangan2.beforeEditMutation;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteMutation;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteMutation;
begin
  q_master.Refresh;
end;
procedure TFrmTunjangan2.afterCancelMutation;
begin
  //
end;
//end mutation

//Relatives q_detail2
procedure TFrmTunjangan2.newRecordRelatives;
begin
  //
end;
procedure TFrmTunjangan2.beforePostRelatives;
begin
  //
end;
procedure TFrmTunjangan2.afterPostRelatives;
begin
  q_detail2.Refresh;
end;
procedure TFrmTunjangan2.beforeEditRelatives;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteRelatives;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteRelatives;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelRelatives;
begin
  //
end;
//end Relatives

//Asset q_detail3
procedure TFrmTunjangan2.newRecordAsset;
begin
  //
end;
procedure TFrmTunjangan2.beforePostAsset;
begin
  //
end;
procedure TFrmTunjangan2.afterPostAsset;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditAsset;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteAsset;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteAsset;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelAsset;
begin
  //
end;
//end Asset

//Job q_detail4
procedure TFrmTunjangan2.newRecordJob;
begin
  //
end;
procedure TFrmTunjangan2.beforePostJob;
begin
  //
end;
procedure TFrmTunjangan2.afterPostJob;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditJob;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteJob;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteJob;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelJob;
begin
  //
end;
//end Job

//Training q_detail5
procedure TFrmTunjangan2.newRecordTraining;
begin
  //
end;
procedure TFrmTunjangan2.beforePostTraining;
begin
  //
end;
procedure TFrmTunjangan2.afterPostTraining;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditTraining;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteTraining;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteTraining;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelTraining;
begin
  //
end;
//end Training

//Education q_detail6
procedure TFrmTunjangan2.newRecordEducation;
begin
  //
end;
procedure TFrmTunjangan2.beforePostEducation;
begin
  //
end;
procedure TFrmTunjangan2.afterPostEducation;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditEducation;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteEducation;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteEducation;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelEducation;
begin
  //
end;
//end Education

//salary q_detail7
procedure TFrmTunjangan2.newRecordSalary;
begin
  //
end;
procedure TFrmTunjangan2.beforePostSalary;
begin
  //
end;
procedure TFrmTunjangan2.afterPostSalary;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditSalary;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteSalary;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteSalary;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelSalary;
begin
  //
end;
//end salary

//begin reward
procedure TFrmTunjangan2.newRecordReward;
begin
  //
end;
procedure TFrmTunjangan2.beforePostReward;
begin
  //
end;
procedure TFrmTunjangan2.afterPostReward;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditReward;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteReward;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteReward;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelReward;
begin
  //
end;
//end reward

//begin punishment
procedure TFrmTunjangan2.newRecordPunishment;
begin
  //
end;
procedure TFrmTunjangan2.beforePostPunishment;
begin
  //
end;
procedure TFrmTunjangan2.afterPostPunishment;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditPunishment;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeletePunishment;
begin
  //
end;
procedure TFrmTunjangan2.afterDeletePunishment;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelPunishment;
begin
  //
end;
//end punishment

//detail history
procedure TFrmTunjangan2.newRecordHistory;
begin
  //
end;
procedure TFrmTunjangan2.beforePostHistory;
begin
  //
end;
procedure TFrmTunjangan2.afterPostHistory;
begin
  //
end;
procedure TFrmTunjangan2.beforeEditHistory;
begin
  //
end;
procedure TFrmTunjangan2.beforeDeleteHistory;
begin
  //
end;
procedure TFrmTunjangan2.afterDeleteHistory;
begin
  //
end;
procedure TFrmTunjangan2.afterCancelHistory;
begin
  //
end;
//end detail history

procedure TFrmTunjangan2.QDAfterPost(DataSet: TDataSet);
begin
  isNowEditDate := False;
end;
procedure TFrmTunjangan2.QDBeforeEdit(DataSet: TDataSet);
begin
  isNowEditDate := True;
end;

procedure TFrmTunjangan2.N1ProsesTunjangan1Click(Sender: TObject);
begin
  processPayroll;
end;

procedure TFrmTunjangan2.processPayroll;
var
  emp, qd, ql: tzQuery;
  sdate, edate, payrolldate, dt2, dt : tdatetime;
  kolom, syarat, s, f, levelID : string;
  //idtype, mg : string;
  y,m,d: word;
  total: integer;
begin
  ql    := createquery;
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

  qd.Refresh;
  if LookupQuery('Setting Tgl Tunjangan', qd, 800, true, 'comp_month,comp_date,payrollfield', '', True, True) = false then
  begin
    qd.Free;
    ql.Free;
    MsgError('CANCEL');
    exit;
  end;
  //dbg('2');
  if isNowEditDate then qd.Post;

  s := '';
  if InputQuery('Cari Nama Karyawan', 'Search', s) = False then
  begin
    qd.Free;
    ql.Free;
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

  total := getQValueInteger('select count(*) as total from t_tunjangan '+es+
              'where enddate> '''+formatdatetime('yyyy-MM-dd',edate)+''' ');
  if total > 0 then
  begin
    MsgError('Sudah ada data tunjangan sebelumnya');
    exit;
  end;

  ExecuteSQL('call autoupdateemployee(''' + date2sql(payrolldate) + ''');');



  if confirm('Pilih Data ?') = 'YES' then
  begin
    ql.Query('select p.employee_id, p.nip, p.name, p.harikerja, '+es+
             'p.employeestatus_id, p.department_id, p.position_id, p.bankaccountnumber, p.bankaccountname '+es+
             'from m_employee p '+es+
             'where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             ' '+es+
             'and joindate <= '''+date2sql(payrolldate)+''' and '+es+
             ' ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sdate)+''' '+es+
             ' )  '+es+
             'order by nip');
    if LookupQuery('Pilih Karyawan', ql, 800, True, '', 'm_employee') =False then
    begin
      //dbg('4');
      emp.free;
      qd.Free;
      ql.Free;
      MsgError('CANCEL');
      exit;
    end;

    f := getColumnFromFilter(ql, 'employee_id');
    f := 'employee_id in '+f+'';
  end else
  begin
    f := '(0=0)';
  end;

  ShowProgressbar;
  f := 'select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             ' '+es+
             'and joindate <= '''+date2sql(payrolldate)+''' and '+es+
             ' ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sdate)+''' '+es+
             ' ) and '+f+' '+es+
             'order by nip';
  //pesan(f);
  emp.Query(f);

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
  ql.free;

  ReloadClick;
  HideProgressbar;
  msgok('Finished');
end;

procedure TFrmTunjangan2.createTunjangan(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
var
  sh, eh: tdatetime;
  sd, ed : tdatetime;
  sdsql, edsql, sql : string;
  shsql, ehsql, tunID, ctp : string;
  qh, qd, qa: tzquery;
  hdr : double;
  c : integer;
  nomor: integer;
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
  qh.SetMultiFieldQ('bankaccountnumber,bankaccountname,employee_id,nip,name,joindate,resigndate,married,harikerja,employeestatus_id,department_id,ctp', q_emp);
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

  nomor := 1;
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
    qd.setField('nomor', nomor);
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
             'statusattendance_id in (SELECT `value` FROM `s_setting` where name=''statusekm'') and '+es+
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
    qd.setField('takehomepay', qd.getFieldDouble('total') );

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
             'statusattendance_id in (SELECT statusattendance_id FROM m_statusattendance where ekm=1) '+es+
             'and nip='''+qh.getfieldstring('nip')+''' '+es+
             'and lateminutes=0 and permitminutes=0 and earlyoutminutes=0 ');
    c := qa.RecordCount;
    c := qh.getFieldInteger('harikerja');
    if qa.RecordCount >= qh.getFieldInteger('harikerja') then
    begin
      qd.setField('ekm', hdr);
    end;

    qd.Post;

    sd := adddays(ed, 1);
    nomor := nomor + 1;
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
    if( qh.getFieldInteger('employeestatus_id')=1) or (qh.getFieldInteger('employeestatus_id')=4 ) then
    begin
      qh.setField('trumah', qa.getFieldDouble('amount'));
      qa.Query('select * from m_employee_salary where '+gets('employee_id', qh)+' and salary_id=3 and amount=248000 and active=1 ');
      if qa.RecordCount>0 then qh.setField('trumah', 0);
    end;
  end;

  //set total & takehomepay
  qh.setField('total', qh.getFieldDouble('lembur')+qh.getFieldDouble('ekm')+
                       qh.getFieldDouble('ttransport')+qh.getFieldDouble('tshift')+qh.getFieldDouble('trumah'));
  qh.setField('takehomepay', qh.getField('total'));

//  lembur1, upm1, insentif1, ekm1, ttransport1, tshift1
//
  qa.Query('select tun_id, nomor, sum(lembur) as lembur1, sum(upm) as upm1, sum(insentif) as insentif1, '+es+
           'sum(ekm) as ekm1, sum(ttransport) as ttransport1, sum(tshift) as tshift1 '+es+
           'from t_tunjangan_detail where '+gets('tun_id', qh)+' and nomor=1 group by tun_id, nomor  ');
  if qa.RecordCount > 0 then
  begin
    qh.SetMultiFieldQ('lembur1,upm1,insentif1,ekm1,ttransport1,tshift1', qa);
  end;

  qa.Query('select tun_id, nomor, sum(lembur) as lembur2, sum(upm) as upm2, sum(insentif) as insentif2, '+es+
           'sum(ekm) as ekm2, sum(ttransport) as ttransport2, sum(tshift) as tshift2 '+es+
           'from t_tunjangan_detail where '+gets('tun_id', qh)+' and nomor=2 group by tun_id, nomor  ');
  if qa.RecordCount > 0 then
  begin
    qh.SetMultiFieldQ('lembur2,upm2,insentif2,ekm2,ttransport2,tshift2', qa);
  end;

  qa.Query('select tun_id, nomor, sum(lembur) as lembur3, sum(upm) as upm3, sum(insentif) as insentif3, '+es+
           'sum(ekm) as ekm3, sum(ttransport) as ttransport3, sum(tshift) as tshift3 '+es+
           'from t_tunjangan_detail where '+gets('tun_id', qh)+' and nomor=3 group by tun_id, nomor  ');
  if qa.RecordCount > 0 then
  begin
    qh.SetMultiFieldQ('lembur3,upm3,insentif3,ekm3,ttransport3,tshift3', qa);
  end;


  qa.Query('select tun_id, nomor, sum(lembur) as lembur4, sum(upm) as upm4, sum(insentif) as insentif4, '+es+
           'sum(ekm) as ekm4, sum(ttransport) as ttransport4, sum(tshift) as tshift4 '+es+
           'from t_tunjangan_detail where '+gets('tun_id', qh)+' and nomor=4 group by tun_id, nomor  ');
  if qa.RecordCount > 0 then
  begin
    qh.SetMultiFieldQ('lembur4,upm4,insentif4,ekm4,ttransport4,tshift4', qa);
  end;

  qa.Query('select tun_id, nomor, sum(lembur) as lembur5, sum(upm) as upm5, sum(insentif) as insentif5, '+es+
           'sum(ekm) as ekm5, sum(ttransport) as ttransport5, sum(tshift) as tshift5 '+es+
           'from t_tunjangan_detail where '+gets('tun_id', qh)+' and nomor=5 group by tun_id, nomor  ');
  if qa.RecordCount > 0 then
  begin
    qh.SetMultiFieldQ('lembur5,upm5,insentif5,ekm5,ttransport5,tshift5', qa);
  end;

  qh.setField('total1', qh.getFieldDouble('lembur1')+qh.getFieldDouble('upm1')+qh.getFieldDouble('insentif1')+
                        qh.getFieldDouble('ekm1')+qh.getFieldDouble('ttransport1')+qh.getFieldDouble('tshift1') );
  qh.setField('total2', qh.getFieldDouble('lembur2')+qh.getFieldDouble('upm2')+qh.getFieldDouble('insentif2')+
                        qh.getFieldDouble('ekm2')+qh.getFieldDouble('ttransport2')+qh.getFieldDouble('tshift2') );
  qh.setField('total3', qh.getFieldDouble('lembur3')+qh.getFieldDouble('upm3')+qh.getFieldDouble('insentif3')+
                        qh.getFieldDouble('ekm3')+qh.getFieldDouble('ttransport3')+qh.getFieldDouble('tshift3') );
  qh.setField('total4', qh.getFieldDouble('lembur4')+qh.getFieldDouble('upm4')+qh.getFieldDouble('insentif4')+
                        qh.getFieldDouble('ekm4')+qh.getFieldDouble('ttransport4')+qh.getFieldDouble('tshift4') );
  qh.setField('total5', qh.getFieldDouble('lembur5')+qh.getFieldDouble('upm5')+qh.getFieldDouble('insentif5')+
                        qh.getFieldDouble('ekm5')+qh.getFieldDouble('ttransport5')+qh.getFieldDouble('tshift5') );
  qh.Post;

  qh.Free;
  qd.Free;
  qa.Free;
end;

procedure TFrmTunjangan2.createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
//var
//  j, k, c : integer;
//  qx, qh_payroll : tzquery;
//  dt1, dt2 : tdatetime;
//  hdr, a, b : double;
begin
  //
//  qx := createquery;
//  qh_payroll := createQuery;
//  qh_payroll.query('select * from t_tunjangan limit 0 ');
//
//  HapusPayrollExist(q_emp.getFieldString('employee_id'), payrolldate);
//
//  qh_payroll.Append;
//  q_date.first;
//  while not q_date.eof do
//  begin
//    if qh_payroll.isfieldexist(q_date.getField('payrollfield')) = true then
//    begin
//      qh_payroll.setField(q_date.getField('payrollfield'), q_date.getField('tdate'));
//    end;
//    q_date.next;
//  end;
//  //dbg('set payrolldate');
//
//  //dbg('hapus payroll exist');
//  for k := 0 to q_emp.fieldcount - 1 do
//  begin
//    if qh_payroll.isfieldexist(q_emp.fieldname(k)) = true then
//    begin
//      qh_payroll.setField(q_emp.fieldname(k), q_emp.getField(q_emp.fieldname(k)));
//    end;
//  end;
//
//  qh_payroll.setField('takehomepay', qh_payroll.getFieldDouble('lembur') +
//    qh_payroll.getFieldDouble('upm') + qh_payroll.getFieldDouble('produksi') + qh_payroll.getFieldDouble('shift') +
//    qh_payroll.getFieldDouble('transport') + qh_payroll.getFieldDouble('kehadiran') + qh_payroll.getFieldDouble('perumahan')
//  );
//  qh_payroll.Post;
//
//  qh_payroll.Edit;
//  SetSalaryNonAT(payrolldate,q_date,q_emp, qh_payroll);
//
//  qx.Query('select * from m_perumahan where married='''+qh_payroll.getFieldString('married')+''' '+es+
//           'and harikerja='''+qh_payroll.getFieldString('harikerja')+''' ');
//  if qx.RecordCount > 0 then
//  begin
//    qh_payroll.setField('perumahan', qh_payroll.getFieldDouble('perumahan') + qx.getFieldDouble('amount'));
//  end;
//
//  if (qh_payroll.date2sql('startdate')>='2023-12-29') and (qh_payroll.date2sql('startdate')<='2024-01-04') then
//  begin
//
//  end else
//  begin
//    qh_payroll.setField('perumahan', 0);
//  end;
//
//  hdr := 50000;
//  qx.Query('select round( 1 * coalesce(sum(m_employee_salary.amount ),0), 0)  as amount '+es+
//           'from m_employee_salary '+es+
//           'where employee_id = '+qh_payroll.getFieldString('employee_id')+' and '+es+
//           'tdate <= '''+qh_payroll.date2sql('enddate')+''' and active = 1 and salary_id = 405 group by employee_id');
//  if qx.RecordCount>0 then
//  begin
//    hdr := qx.getFieldDouble('amount');
//  end;
//
//  dt1 := qh_payroll.getField('startdate');
//  dt2 := dt1;
//  if date2sql(dt2)>=qh_payroll.date2sql('enddate') then dt2 := qh_payroll.getField('enddate');
//
//  while date2sql(dt2)<>qh_payroll.date2sql('enddate') do
//  begin
//    dt2 := addDays(dt1, 7);
//    if date2sql(dt2)>=qh_payroll.date2sql('enddate') then dt2 := qh_payroll.getField('enddate');
//
//
//    qx.Query('select attendance_id, statusattendance_id from t_attendance '+es+
//             'where tdate>='''+date2sql(dt1)+''' and tdate<='''+date2sql(dt2)+''' and '+es+
//             'statusattendance_id in (SELECT `value` FROM `s_setting` where name=''statusekm'') and nip='''+qh_payroll.getfieldstring('nip')+''' ');
//    c := qx.RecordCount;
//    c := qh_payroll.getFieldInteger('harikerja');
//    if qx.RecordCount >= qh_payroll.getFieldInteger('harikerja') then
//    begin
//      a := qh_payroll.getFieldDouble('kehadiran');
//      b := hdr;
//      qh_payroll.setField('kehadiran', qh_payroll.getFieldDouble('kehadiran') + hdr);
//    end;
//    dt1 := addDays(dt2, 1);
//  end;
//
//  qh_payroll.setField('takehomepay', qh_payroll.getFieldDouble('lembur') +
//    qh_payroll.getFieldDouble('upm') + qh_payroll.getFieldDouble('produksi') + qh_payroll.getFieldDouble('shift') +
//    qh_payroll.getFieldDouble('transport') + qh_payroll.getFieldDouble('kehadiran') + qh_payroll.getFieldDouble('perumahan')
//  );
//  qh_payroll.Post;
//
//  qh_payroll.Free;
//  qx.Free;
end;

procedure TFrmTunjangan2.N1PrintSlipTunjangan1Click(Sender: TObject);
var
  s, sql :string;
  qm : tzquery;
begin

  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  qm := createquery;
  qm.Query('select p.tun_id, p.nip, e.name, p.startdate, p.enddate, p.harikerja, '+es+
          'p.employeestatus_id, p.department_id, e.position_id '+es+
          'from t_tunjangan p '+es+
          'left join m_employee e on p.employee_id=e.employee_id '+es+
          'where '+es+
          'p.tdate>='''+date2sql(startdate)+''' and p.tdate<='''+date2sql(enddate)+''' '+es+
          'order by p.nip, p.startdate');

  if LookupQuery('Choose Data', qm, 800, True, '', 't_tunjangan' ) = false then exit;

  ShowProgressbar;
  s := getColumnFromFilter(qm, 'tun_id');
  sql := 'select t.*,'+es+
          'dp.name as departmentname,'+es+
          'es.name as employeestatusname,'+es+
          'td.tund_id, td.tdate as tdate_d, td.startdate as startdate_d,'+es+
          'td.enddate as enddate_ed, td.lembur as lembur_d,'+es+
          'td.ekm as ekm_d, td.ttransport as ttransport_d, td.tshift as tshift_d,'+es+
          'td.total as total_d, td.takehomepay as takehomepay_d,'+es+
          'td.trumah as trumah_d, td.day1, td.day2, td.day3, td.day4,'+es+
          'td.day5, td.day6, td.day7, td.day8,'+es+
          'td.overtimehour1, td.overtimehour2, td.overtimehour3, td.overtimehour4,'+es+
          'td.overtimehour5, td.overtimehour6, td.overtimehour7, td.overtimehour8 '+es+
          'from t_tunjangan t '+es+
          'left join t_tunjangan_detail td on t.tun_id=td.tun_id '+es+
          'left join m_employee e on t.employee_id = e.employee_id '+es+
          'left join m_department dp on t.department_id=dp.department_id '+es+
          'left join m_employeestatus es on t.employeestatus_id = es.employeestatus_id '+es+
          'where t.tun_id in '+s+' '+es+
          'order by t.tdate, t.nip, td.nip, td.startdate';
  q_laporan.Query(sql);
  HideProgressbar;
  if q_laporan.RecordCount > 0 then
  begin
    FR_Report.ShowReport;
  end else
  begin
    MsgError('No Data to Print');
  end;
  qm.Free;
end;


end.
