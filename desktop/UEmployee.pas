unit UEmployee;

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
  TFrmEmployee = class(TForm)
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
    TabDetail10: TcxTabSheet;
    GRID_DETAIL10: TcxGrid;
    DETAIL10: TcxGridDBBandedTableView;
    GRID_DETAIL10Level1: TcxGridLevel;
    Q_DETAIL10: TZQuery;
    DS_DETAIL10: TDataSource;
    cxGridPopupMenu11: TcxGridPopupMenu;
    DisableMutasi1: TMenuItem;
    Button1: TButton;
    Edit1: TEdit;
    N4IsiMasterCuti1: TMenuItem;
    ApplicationEvents1: TApplicationEvents;
    N5ActiveThisMonth1: TMenuItem;
    N6GajiBaru1: TMenuItem;
    N7ShowAll1: TMenuItem;
    N8ActiveLevel31: TMenuItem;
    N9ActiveThisWeek1: TMenuItem;
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
    procedure N1PrintEmployeeReport1Click(Sender: TObject);
    procedure N1SendPasswordtoEmail1Click(Sender: TObject);
    procedure N2ClearResigndate1Click(Sender: TObject);
    procedure isiTSM;
    function cekTSM : Boolean;
    procedure DisableMutasi1Click(Sender: TObject);
    procedure setEnddate(qm:tzquery);
    function getAutoNIP(jd:tdatetime) : string;
    procedure isiDataMenuPrint;
    procedure Button1Click(Sender: TObject);
    procedure N4IsiMasterCuti1Click(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N5ActiveThisMonth1Click(Sender: TObject);
    procedure te1Click(Sender: TObject);
    procedure N6GajiBaru1Click(Sender: TObject);
    procedure N7ShowAll1Click(Sender: TObject);
    procedure N8ActiveLevel31Click(Sender: TObject);
    procedure N9ActiveThisWeek1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmEmployee: TFrmEmployee;
  isDisMutasi, DisableEventEdit, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  grademt, pwd, eid : string;
  //divi, work, posi, grad, ests : integer;
  tsm : tstringlist;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmEmployee.VisibleALLGridDetail(tipe:boolean=False);
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
procedure TFrmEmployee.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmEmployee.cekAllEditModule(idm:integer);
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
procedure TFrmEmployee.isiALLTableKolom;
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
procedure TFrmEmployee.isiDataMenuPrint;
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
procedure TFrmEmployee.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  tsm.Free;
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  q_master.Active := false;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmEmployee.FormCreate(Sender: TObject);
begin
  isdebug := true;
  isDisMutasi := True;
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

  isDisMutasi := True;
  //dbg('1');
  SettingQuery;
  //dbg('2');
  ValidasiControl;
  //dbg('3');
  SettingFont;
  //dbg('4');
  ShowDateTemplate(False);
  tsm := tstringlist.Create;
  tsm.Clear;
  //dbg('5');
  isDisMutasi := True;
  DisableMutasi1.Visible := False;
  if CekMotherBoard then DisableMutasi1.Visible := True;
  //dbg('6');
end;
procedure TFrmEmployee.SettingQuery;
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
  SQLGrid[idm]      := getQuery(txtid.Text, False, startdate, enddate);
  s := SQLGrid[idm];
  //s := SQLGrid[idm] + ' and employee_id in (select employee_id from t_payroll where tdate >=''2017-03-01'' and tdate <=''2017-03-31'' ) order by nip';
  //dbg(s);
  q_master.Query(s);
  setColumnWidth(txtid.Text, q_master, master);
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
procedure TFrmEmployee.SettingGridDetail;
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
procedure TFrmEmployee.ReloadClick;
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
procedure TFrmEmployee.SettingFont;
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
procedure TFrmEmployee.ValidasiControl;
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
procedure TFrmEmployee.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
procedure TFrmEmployee.te1Click(Sender: TObject);
begin
  //GRID_DETAIL1.export
  //ExportGrid();
  //expo

end;

//end form close, form create

//atur stardate, enddate
procedure TFrmEmployee.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmEmployee.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmEmployee.Button1Click(Sender: TObject);
begin
  //pesan(getsecurity2(edit1.Text));
  //findstr(edit1.Text, 'limit');
  edit1.Text := Encrypt('bsmch2015');
end;

procedure TFrmEmployee.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmEmployee.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmEmployee.MenuItem1Click(Sender: TObject);
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
procedure TFrmEmployee.OneMonth1Click(Sender: TObject);
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

procedure TFrmEmployee.NextMonth1Click(Sender: TObject);
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
procedure TFrmEmployee.PrevMonth1Click(Sender: TObject);
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
procedure TFrmEmployee.OneYear1Click(Sender: TObject);
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
procedure TFrmEmployee.OneDay1Click(Sender: TObject);
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
procedure TFrmEmployee.oday1Click(Sender: TObject);
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
procedure TFrmEmployee.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmEmployee.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmEmployee.getFocusQuery : TZQuery;
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
function TFrmEmployee.getFocusTableName : String;
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
function TFrmEmployee.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmEmployee.getFocusGridView : TcxGridDBBandedTableView;
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
function TFrmEmployee.getActiveModuleName : string;
var
  id1 : string;
begin
  id1 := inttostr(getCxGridByName(getFocusGridView.Name).Tag);
  result := getQValueString('select name from s_module where id_module='''+id1+''' ');
end;
procedure TFrmEmployee.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmEmployee.AutoActiveQuery;
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
procedure TFrmEmployee.AutoRefreshQuery;
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
function TFrmEmployee.getTabByName(nama:string) : TcxTabSheet;
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
procedure TFrmEmployee.ImportFromExcel1Click(Sender: TObject);
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
function TFrmEmployee.getCxGridByName(nama:string) : TcxGrid;
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
function TFrmEmployee.getGridByName(nama:string) : TcxGridDBBandedTableView;
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
function TFrmEmployee.getQueryByName(nama:string) : TZQuery;
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
procedure TFrmEmployee.actLookupExecute(Sender: TObject);
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
procedure TFrmEmployee.actAddExecute(Sender: TObject);
begin
  //getQueryByName(getFocusGridView.Name)

  if cekValidasi('`insert`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Inserting = False then exit;
  getQueryByName(getFocusGridView.Name).Append;
end;
procedure TFrmEmployee.actcancelExecute(Sender: TObject);
begin
  getQueryByName(getFocusGridView.Name).Cancel;
end;
procedure TFrmEmployee.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Deleting = False then exit;
  if getQueryByName(getFocusGridView.Name).RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then getQueryByName(getFocusGridView.Name).Delete;
end;
procedure TFrmEmployee.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', getActiveModuleName ) = false then exit;
  if getFocusGridView.OptionsData.Editing = False then exit;
  getQueryByName(getFocusGridView.Name).Edit;
end;
procedure TFrmEmployee.actRefreshExecute(Sender: TObject);
begin
   //getQueryByName(getFocusGridView.Name).Refresh;
   q_master.Refresh;
end;
procedure TFrmEmployee.actSaveExecute(Sender: TObject);
begin
  if isnowedit[getQueryByName(getFocusGridView.Name).Tag]  then getQueryByName(getFocusGridView.Name).Post;
end;
procedure TFrmEmployee.actTabDetail1Execute(Sender: TObject);
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
procedure TFrmEmployee.actTabDetail2Execute(Sender: TObject);
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

procedure TFrmEmployee.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmEmployee.ppExportClick(Sender: TObject);
begin
  if Confirm('Export Excel ?') = 'YES' then  ExportGrid('Excel', getCxGridByName(getfocusgridview.Name) );
end;
procedure TFrmEmployee.PopupMenuPopup(Sender: TObject);
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
procedure TFrmEmployee.ppFreezeClick(Sender: TObject);
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
procedure TFrmEmployee.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'default');
end;
procedure TFrmEmployee.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'month');
end;
procedure TFrmEmployee.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'year');
end;
procedure TFrmEmployee.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'relative');
end;
procedure TFrmEmployee.ppFindClick(Sender: TObject);
begin
  {dbg(getFocusGridView.Name);
  dbg(getQueryByName(getFocusGridView.Name).Name);
  dbg(getFocusGridView.Name);
  dbg(getFocusTableName);}
  FindClick(getQueryByName(getFocusGridView.Name), getFocusGridView, getFocusTableName );
end;
procedure TFrmEmployee.ppShowALLClick(Sender: TObject);
begin
  //dbg(getQueryByName(getFocusGridView.Name).Name);
  //dbg(SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
  ShowALLClick(getQueryByName(getFocusGridView.Name), SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
end;
//end popup menu

//isnowedit master
procedure TFrmEmployee.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmEmployee.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmEmployee.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmEmployee.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmEmployee.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmEmployee.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmEmployee.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmEmployee.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmEmployee.AfterCancelQ(idm : integer; nama:string);
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
procedure TFrmEmployee.AfterDeleteQ(idm : integer; nama:string);
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
procedure TFrmEmployee.AfterPostQ(idm : integer; nama:string);
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
procedure TFrmEmployee.BeforeDeleteQ(idm : integer; nama:string);
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
  if nama='detail10' then beforeDeleteHistory;
end;
procedure TFrmEmployee.BeforeEditQ(idm : integer; nama:string);
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
  if nama='detail1' then
  begin
    if getQValueInteger('select count(*) from m_employee_mutation '+es+
                        'where employee_id = '''+q_detail1.getFieldString('employee_id')+''' '+es+
                        'and tdate > '''+q_detail1.date2sql('tdate')+''' ') > 0 then
    begin
      MsgError('Please Edit the Data with the latest Date First');
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
  if nama='detail10' then beforeEditHistory;
end;
procedure TFrmEmployee.BeforePostQ(idm : integer; nama:string);
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
procedure TFrmEmployee.NewRecordQ(idm : integer; nama:string);
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
  if nama='detail10' then newRecordHistory;
end;
//end procedure query

//master
procedure TFrmEmployee.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.SetMultiField('taxtype,taxirregular,taxfinal', 2 );
  q_master.setField('ptkp', 'TK0');
  q_master.setField('jamsostek_id', '4');
  q_master.setField('nip', 'NEW');
  pwd := '';
  //q_master.setField(
end;
function TFrmEmployee.cekTSM : Boolean;
var
  qk : tzquery;
  no, x : integer;
  kolom :string;
begin
  result := True;
  qk := createquery;
  qk.Query('show columns from m_employee_mutation');
  qk.First;
  x     := qk.RecordCount - 4;
  kolom := '';
  no := 0;
  while not qk.Eof do
  begin
    if ( (qk.RecNo >= 6) and (qk.RecNo <= x) ) then
    begin
      kolom := qk.getColumnString(0);
      //
      if tsm.Strings[no] <> q_master.getFieldString(kolom) then
      begin
        MsgError('Please Edit "'+getqvaluestring('select captionname from s_kolom '+es+
                                  'where tablename=''m_employee'' and '+es+
                                  'columnname='''+kolom+''' ')+'" at '+TabDetail1.Caption+' ');
        result := False;
        break;
      end;
      no := no + 1;
    end;
    qk.Next;
  end;
  qk.Free;
end;
procedure TFrmEmployee.DisableMutasi1Click(Sender: TObject);
begin
  if CekMotherBoard = False then exit;

  if isDisMutasi then
  begin
    isDisMutasi := False;
    DisableMutasi1.Caption := '&3 Disable Mutasi';
  end else
  begin
    isDisMutasi := True;
    DisableMutasi1.Caption := '&3 Enable Mutasi';
  end;
end;
procedure TFrmEmployee.setEnddate(qm:tzquery);
var
  esid, contract, probation : integer;
  qes : tzquery;
  ts0, ts1, ts2 : tstringlist;
  x, y, z : integer;
  kolom1, kolom2 : string;
begin
  exit;
  qes := createquery;
  qes.Query('select * from m_employeestatus where '+gets('employeestatus_id', qm)+' ');
  if qes.RecordCount = 0 then
  begin
    qes.Free;
    exit;
  end;

  if qes.getFieldString('kolomisi') = '' then
  begin
    qes.Free;
    exit;
  end;

  ts0 := tstringlist.Create;
  ts1 := tstringlist.Create;
  ts2 := tstringlist.Create;
  ts0.Clear;
  ts1.Clear;
  ts2.Clear;
  contract  := qes.getFieldInteger('contract');
  probation := qes.getFieldInteger('probation');
  esid      := qes.getFieldInteger('employeestatus_id');
  ts0.Clear;
  String2StringList(ts0, qes.getFieldString('kolomisi'), ';');
  for x := 0 to ts0.Count-1 do
  begin //ambil baris
    ts1.Clear;
    String2StringList(ts1, ts0.Strings[x], '=');
    if FindWord(ts1.Strings[1], '+') = False then
    begin
      if LeftStr(LowerCase(ts1.Strings[1]), 4)='auto' then
      begin
        if qm.isNotNull(replace(ts1.Strings[1], 'auto','')) then
        begin
          qm.setField(ts1.Strings[0], addMonths(
                       qm.getField(replace(ts1.Strings[1], 'auto','')), contract+probation) );
          qm.setField(ts1.Strings[0], qm.getField(ts1.Strings[0]) - 1 );
        end else
        begin
          //dbg(ts1.Strings[0]);
          qm.setField(ts1.Strings[0], null);
        end;
      end else
      begin
        qm.setField(ts1.Strings[0], qm.getField(ts1.Strings[1]) );
      end;
    end else
    begin
      ts2.Clear;
      String2StringList(ts2, ts1.Strings[1], '+');
      if qm.isNotNull(ts2.Strings[0]) then
      begin
        qm.setField(ts1.Strings[0], addDays(qm.getField(ts2.Strings[0]), strtoint(ts2.Strings[1])) );
      end else
      begin
        //dbg(ts1.Strings[0]);
        qm.setField(ts1.Strings[0], null);
      end;
    end;
  end;

  ts0.Free;
  ts1.Free;
  ts2.Free;
  qes.Free;
end;

procedure TFrmEmployee.beforePostMaster;
begin
  //dbg('1');
  q_master.setField('employeetype', '1');
  q_master.setField('employeetype', getQValueInteger('select employeetype '+es+
                      'from m_employeestatus where '+gets('employeestatus_id', q_master)+' ') );
  if q_master.isNull('resigndate') then q_master.setField('resigntype_id', '0');
  if lowercase(q_master.getFieldString('nip')) = 'new' then
  begin //jika isi nip masih NEW dan employeetype nya harus 1, ini selain parttime
    //if q_master.getFieldInteger('employeetype') = 1 then q_master.setField('nip', getAutoNIP(q_master.getFieldDateTime('joindate')));
  end;
  //dbg('2');
  if (q_master.getFieldString('nip') = 'NEW') or (q_master.getFieldString('nip') = '') then
  begin
    MsgError('Please Input NIP');
    abort;
    exit;
  end;
  //dbg('3');
  //setEnddate(q_master);
  if isNewRecord[q_master.Tag] then
  begin //data baru
    //q_master.setField('password', defaultPassword(q_master) );
    //dbg('4');
  end else
  begin
    //lagi diedit
    if isDisMutasi = False then
    begin
      if cekTSM = False then
      begin
        abort;
        exit;
      end;
    end;

    if q_master.getFieldString('password') <> '' then
    begin
      if pwd <> q_master.getFieldString('password') then
      begin
        //q_master.setField('password', Encrypt(q_master.getFieldString('password')) );
      end;
    end;

    //q_master.setField('workarea_id', getQValueInteger('select workarea_id from m_department where '+gets('department_id', q_master)+' '));
    //dbg('5');
    {if divi <> q_master.getFieldInteger('division_id') then begin MsgError('Please Edit "Division" at '+TabDetail1.Caption+' '); abort; exit; end;
    if work <> q_master.getFieldInteger('workarea_id') then begin MsgError('Please Edit "Workarea" at '+TabDetail1.Caption+' '); abort; exit; end;
    if posi <> q_master.getFieldInteger('position_id') then begin MsgError('Please Edit "Position" at '+TabDetail1.Caption+' '); abort; exit; end;
    if grad <> q_master.getFieldInteger('grade_id') then begin MsgError('Please Edit "Grade" at '+TabDetail1.Caption+' '); abort; exit; end;
    if ests <> q_master.getFieldInteger('employeestatus_id') then begin MsgError('Please Edit "EmployeeStatus" at '+TabDetail1.Caption+' '); abort; exit; end;}
  end;
  //dbg('6');
  //q_master.setField('showpassword', Decrypt(q_master.getFieldString('password')) );

  if q_master.isNotNull('resigndate') then
  begin
    if q_master.getFieldInteger('resigntype_id') <= 0 then
    begin
      MsgError('Please Fill Resign Type');
      abort;
      exit;
    end;
    //dbg('7');
    //q_master.setField('norefkerja', getRefKerja(q_master) );
    //dbg('8');
  end;
  //dbg('9');
end;
function TFrmEmployee.getAutoNIP(jd:tdatetime) : string;
var
  y,m,d : word;
  nip : string;
begin
  DecodeDate(jd, y,m,d);
  nip     := getQValueString('select nip from m_employee '+es+
              'where month(joindate)=month('''+date2sql(jd)+''') '+es+
              'and year(joindate)=year('''+date2sql(jd)+''') order by nip desc');
  nip     := MidStr(nip, 5,4);
  if trim(nip) = '' then nip := '0';
  d       := strtoint(nip) + 1;
  nip     := FormatFloat('0#', strtoint(MidStr(inttostr(y), 3,2)) ) +
             FormatFloat('0#', m) +
             FormatFloat('000#', d);
  result  := nip;
end;
procedure TFrmEmployee.afterPostMaster;
begin
  //dbg('10');
  q_master.Refresh;
  //dbg('11');
  isiUserEmployee(q_master);
  //dbg('12');
end;
procedure TFrmEmployee.isiTSM;
var
  qk : tzquery;
  x : integer;
  kolom :string;
begin
  qk := createquery;
  qk.Query('show columns from m_employee_mutation');
  qk.First;
  x     := qk.RecordCount - 4;
  kolom := '';
  tsm.Clear;
  while not qk.Eof do
  begin
    if (qk.RecNo >= 6) and (qk.RecNo <= x) then
    begin
      kolom := qk.getColumnString(0);
      tsm.Add(q_master.getFieldString(kolom));
    end;
    qk.Next;
  end;
  qk.Free;
end;
procedure TFrmEmployee.beforeEditMaster;
begin
  isiTSM;
  pwd := q_master.getFieldString('password');
  {divi:= q_master.getFieldInteger('division_id');
  work:= q_master.getFieldInteger('workarea_id');
  posi:= q_master.getFieldInteger('position_id');
  grad:= q_master.getFieldInteger('grade_id');
  ests:= q_master.getFieldInteger('employeestatus_id');}
end;
procedure TFrmEmployee.beforeDeleteMaster;
begin
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('employee_id'));
end;
procedure TFrmEmployee.afterDeleteMaster;
begin
  //
end;
procedure TFrmEmployee.afterCancelMaster;
begin
  //
end;
//end master

//mutation q_detail1
procedure TFrmEmployee.newRecordMutation;
begin

  q_detail1.setField('tdate', formatdatetime('yyyy-MM-21', addMonths(serverdate, -1)));
  Q_DETAIL1.copyData(q_master);
  //grademt := q_detail1.getFieldString('grade_id');
end;
procedure TFrmEmployee.beforePostMutation;
var
  contract, probation : integer;
begin
  CheckIsFirstMutation(q_detail1);

//  q_detail1.setField('employeetype', '1');
//  q_detail1.setField('employeetype', getQValueInteger('select employeetype '+es+
//                      'from m_employeestatus where '+gets('employeestatus_id', q_detail1)+' ') );
  setEnddate(q_detail1);
  if isNewRecord[q_detail1.Tag] then
  begin //data baru
    //q_detail1.setField('sknumber', getSKNumber(q_detail1) );
  end;

  {if grademt <> q_detail1.getFieldString('grade_id') then
  begin
    if Trim(q_detail1.getFieldString('sknumber')) = '' then
    begin
      MsgError('"SK Number" Must Be Filled');
      abort;
      exit;
    end;
  end;}

  if (q_master.getFieldInteger('employeestatus_id') = 1 ) and
     (q_detail1.getFieldInteger('employeestatus_id')= 5 ) then
  begin
    if q_detail1.isNotNull('startcontract1') then q_detail1.setField('nip', getAutoNIP(q_detail1.getFieldDateTime('startcontract1')));
  end;
  q_detail1.setField('workarea_id', getQValueInteger('select workarea_id from m_department where '+gets('department_id', q_detail1)+' '));

end;
procedure TFrmEmployee.afterPostMutation;
begin
  //harusnya kalo mau update harus sesuai tgl mutasi
  updateEmployeeFromMutation(q_detail1.getFieldString('employee_id'));
  //ExecuteSQL('call updateEmployeeMutation('+q_detail1.getFieldString('employee_id')+')');
  q_master.Refresh;
end;
procedure TFrmEmployee.beforeEditMutation;
begin
  //grademt := q_detail1.getFieldString('grade_id');
end;
procedure TFrmEmployee.beforeDeleteMutation;
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
end;
procedure TFrmEmployee.afterDeleteMutation;
var
  qt : tzquery;
begin
  updateEmployeeFromMutation(eid);
  qt := createquery;
  qt.Query('select * from m_employee_mutation '+es+
           ' where employee_id='''+eid+'''  ');
  if qt.RecordCount = 1 then qt.Delete;
  qt.Free;
  q_master.Refresh;
end;
procedure TFrmEmployee.afterCancelMutation;
begin
  //
end;
//end mutation

//Relatives q_detail2
procedure TFrmEmployee.newRecordRelatives;
begin
  q_detail2.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee.beforePostRelatives;
begin
  //
end;
procedure TFrmEmployee.afterPostRelatives;
begin
  q_detail2.Refresh;
end;
procedure TFrmEmployee.beforeEditRelatives;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteRelatives;
begin
  //
end;
procedure TFrmEmployee.afterDeleteRelatives;
begin
  //
end;
procedure TFrmEmployee.afterCancelRelatives;
begin
  //
end;
//end Relatives

//Asset q_detail3
procedure TFrmEmployee.newRecordAsset;
begin
  q_detail3.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee.beforePostAsset;
begin
  //
end;
procedure TFrmEmployee.afterPostAsset;
begin
  //
end;
procedure TFrmEmployee.beforeEditAsset;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteAsset;
begin
  //
end;
procedure TFrmEmployee.afterDeleteAsset;
begin
  //
end;
procedure TFrmEmployee.afterCancelAsset;
begin
  //
end;
//end Asset

//Job q_detail4
procedure TFrmEmployee.newRecordJob;
begin
  q_detail4.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee.beforePostJob;
begin
  //
end;
procedure TFrmEmployee.afterPostJob;
begin
  //
end;
procedure TFrmEmployee.beforeEditJob;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteJob;
begin
  //
end;
procedure TFrmEmployee.afterDeleteJob;
begin
  //
end;
procedure TFrmEmployee.afterCancelJob;
begin
  //
end;
//end Job

//Training q_detail5
procedure TFrmEmployee.newRecordTraining;
begin
  q_detail5.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee.beforePostTraining;
begin
  //
end;
procedure TFrmEmployee.afterPostTraining;
begin
  //
end;
procedure TFrmEmployee.beforeEditTraining;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteTraining;
begin
  //
end;
procedure TFrmEmployee.afterDeleteTraining;
begin
  //
end;
procedure TFrmEmployee.afterCancelTraining;
begin
  //
end;
//end Training

//Education q_detail6
procedure TFrmEmployee.newRecordEducation;
begin
  q_detail6.setmultifieldQ('nip', q_master);
end;
procedure TFrmEmployee.beforePostEducation;
begin
  //
end;
procedure TFrmEmployee.afterPostEducation;
begin
  //
end;
procedure TFrmEmployee.beforeEditEducation;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteEducation;
begin
  //
end;
procedure TFrmEmployee.afterDeleteEducation;
begin
  //
end;
procedure TFrmEmployee.afterCancelEducation;
begin
  //
end;
//end Education

//salary q_detail7
procedure TFrmEmployee.newRecordSalary;
begin
  q_detail7.setField('tdate', formatdatetime('yyyy-MM-01', addMonths(serverdate, 0)));
  q_detail7.setmultifieldQ('nip', q_master);
  q_detail7.setField('salary_id', '1');
  q_detail7.setField('amount', '3355750');
end;
procedure TFrmEmployee.beforePostSalary;
begin
  //
end;
procedure TFrmEmployee.afterPostSalary;
begin
  //
end;
procedure TFrmEmployee.beforeEditSalary;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteSalary;
begin
  //
end;
procedure TFrmEmployee.afterDeleteSalary;
begin
  //
end;
procedure TFrmEmployee.afterCancelSalary;
begin
  //
end;
//end salary

//begin reward
procedure TFrmEmployee.newRecordReward;
begin
  q_detail8.SetMultiField('tdate', serverdate);
end;
procedure TFrmEmployee.beforePostReward;
begin
  //
end;
procedure TFrmEmployee.afterPostReward;
begin
  //
end;
procedure TFrmEmployee.beforeEditReward;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteReward;
begin
  //
end;
procedure TFrmEmployee.afterDeleteReward;
begin
  //
end;
procedure TFrmEmployee.afterCancelReward;
begin
  //
end;
//end reward

//begin punishment
procedure TFrmEmployee.newRecordPunishment;
begin
  q_detail9.SetMultiField('tdate,validthrough', serverdate);
end;
procedure TFrmEmployee.beforePostPunishment;
begin
  if q_detail9.isNotNull('tdate') then
  begin
    q_detail9.Setfield('validthrough', addMonths( q_detail9.getField('tdate'),
      getQValueInteger('select _length from m_rewardpunishment where '+es+
        ' '+gets('rewardpunishment_id', q_detail9)+' ') ) - 1);
  end else
  begin
    q_detail9.Setfield('validthrough', null);
  end;
  if isNewRecord[q_detail9.Tag] then
  begin //data baru
    q_detail9.setField('sknumber', getSKNumber(q_detail9) );
  end;
end;
procedure TFrmEmployee.afterPostPunishment;
begin
  //
end;
procedure TFrmEmployee.beforeEditPunishment;
begin
  //
end;
procedure TFrmEmployee.beforeDeletePunishment;
begin
  //
end;
procedure TFrmEmployee.afterDeletePunishment;
begin
  //
end;
procedure TFrmEmployee.afterCancelPunishment;
begin
  //
end;
//end punishment

//detail history
procedure TFrmEmployee.newRecordHistory;
begin
  //
end;
procedure TFrmEmployee.beforePostHistory;
begin
  //
end;
procedure TFrmEmployee.afterPostHistory;
begin
  //
end;
procedure TFrmEmployee.beforeEditHistory;
begin
  //
end;
procedure TFrmEmployee.beforeDeleteHistory;
begin
  //
end;
procedure TFrmEmployee.afterDeleteHistory;
begin
  //
end;
procedure TFrmEmployee.afterCancelHistory;
begin
  //
end;
//end detail history
procedure TFrmEmployee.N1PrintEmployeeReport1Click(Sender: TObject);
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
  qe.Query('select '+kolom+' from m_employee where '+getsecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
           'order by name ' );
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
                  'd.name as divisionname, dp.name as departmentname, '+es+
                  'w.name as workareaname, '+es+
                  'po.name as positionname, '+es+
                  'l.name as levelname, '+es+
                  'es.name as employeestatusname, '+es+
                  'j.name as jamsostekname, t.name as taxname, '+es+
                  'b.name as bankname, o.name as overtimename '+es+
                  'from m_employee p '+es+
                  'left join m_company c on p.company_id = c.company_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_department dp on p.department_id = dp.department_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_level l on p.level_id=l.level_id '+es+
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


procedure TFrmEmployee.N1SendPasswordtoEmail1Click(Sender: TObject);
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
                'Username & Password HRIS ',
                body, '', smtpHost, smtpUser, smtpPass, smtpPort);
    end;
    q_master.Next;
  end;
  q_master.EnableControls;
  q_master.Refresh;
  q_master.First;
  HideProgressbar;
  MsgOK('Finished');
end;

procedure TFrmEmployee.N2ClearResigndate1Click(Sender: TObject);
begin
  if confirm('Are You Want to Clear Resigndate for "'+q_master.getFieldString('name')+'" ?') <> 'YES'  then exit;
  DisableEventEdit := False;
  q_master.Edit;
  q_master.setField('resigndate', null);
  q_master.setField('resigntype_id', '0');
  q_master.Post;
  q_master.Refresh;
  DisableEventEdit := True;
  msgok('Finished');
end;
procedure TFrmEmployee.N4IsiMasterCuti1Click(Sender: TObject);
var
  q : tzquery;
begin
  ShowProgressbar;
  q_master.DisableControls;
  q_master.First;
  q := createquery;
  while not q_master.Eof do
  begin
    SetProgressbarDefault(q_master);
    if lowercase(q_master.getFieldString('status'))='active' then isiMasterCuti(q_master);
    //isiMasterCuti(q_master);
    {q.Query('select * from m_employee where '+gets('employee_id', q_master)+' ');
    q.Edit;
    q.setField('password', defaultPassword(q));
    q.setField('showpassword', Decrypt(q.getFieldString('password')) );
    q.Post;}
    q_master.next;
  end;
  q_master.EnableControls;
  q_master.Refresh;
  q.Free;
  HideProgressbar;
end;

procedure TFrmEmployee.N5ActiveThisMonth1Click(Sender: TObject);
{
 and joindate <= '''+date2sql(payrolldate)+''' and '+es+
             ' ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sdate)+''' '+es+
             ' ) and '+levelID+' and idtype<>''xx'' '+es+
             'order by name'
}
var
  idm : integer;
  s : string;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  s                 := ' ( employee_id in (select employee_id from v_nonmanager ) ) ';
  SQLGrid[idm]      := getQuery(txtid.Text, False, startdate, enddate, s );
  pesan(SQLGrid[idm]);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
end;
procedure TFrmEmployee.N8ActiveLevel31Click(Sender: TObject);
var
  idm : integer;
  s : string;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  {s                 := ' ( joindate <='''+formatdatetime('yyyy-MM-20', now)+''' and '+es+
                       '    ( '+es+
                       '      isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate > '''+formatdatetime('yyyy-MM-20', addMonths(now,-1))+''' '+es+
                       '    ) and idtype<>''xx'' '+es+
                       ' and ( employee_id in (select employee_id from m_mgr) or '+es+
                       '       level_id in (select level_id from m_level where name in (''IIIA'', ''IIIB'', ''IIIC'') ) '+es+
                       '     ) '+es+
                       ' )';}
  s                 := ' ( employee_id in (select employee_id from v_manager ) ) ';
  SQLGrid[idm]      := getQuery(txtid.Text, False, startdate, enddate, s );
  pesan(SQLGrid[idm]);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
end;
procedure TFrmEmployee.N9ActiveThisWeek1Click(Sender: TObject);
var
  idm : integer;
  s : string;
  //jd, rd : string;
  //qq : tzquery;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  s                 := ' ( employee_id in (select employee_id from v_operational ) ) ';
  {jd := formatdatetime('yyyy-MM-20', now);
  rd := formatdatetime('yyyy-MM-20', addMonths(now,-1));
  qq := createquery;
  qq.Query('select * from t_dateharian order by enddate desc limit 1');
  if qq.RecordCount > 0 then
  begin
    jd := qq.getFieldString('joindate');
    rd := qq.getFieldString('resigndate');
  end;
  qq.Free;
  s                 := ' ( joindate <='''+jd+''' and '+es+
                       '    ( '+es+
                       '      isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate > '''+rd+''' '+es+
                       '    ) and idtype<>''xx'' '+es+
                       '   and division_id=3 and employee_id not in (select employee_id from m_mgr) and '+es+
                       '   level_id in (select level_id from m_level where level=''Non Manager'' ) '+es+
                       ' '+es+
                       ' )';}
  SQLGrid[idm]      := getQuery(txtid.Text, False, startdate, enddate, s );
  pesan(SQLGrid[idm]);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
end;
procedure TFrmEmployee.N7ShowAll1Click(Sender: TObject);
var
  idm : integer;
begin
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, False, startdate, enddate );
  pesan(SQLGrid[idm]);
  q_master.Query(SQLGrid[idm]);
  q_master.Refresh;
end;
procedure TFrmEmployee.N6GajiBaru1Click(Sender: TObject);
var
  q : tzquery;
begin
  ExecuteSQL('update m_employee_salary set active=0 where '+gets('employee_id', q_master)+' ');
  q:=createquery;
  q.Query('select * from m_employee_salary limit 1');

  //gaji pokok
  q.Append;
  q.SetMultiFieldQ('employee_id,nip', q_master);
  q.setField('tdate', formatdatetime('yyyy-MM-01', addMonths(serverdate, 0)) );
  q.setField('salary_id', '1' );
  q.setField('amount', '3355750');
  q.setField('active', '1');
  isiKolomUser(true, q);
  q.Post;

  //t. jabatan
  q.Append;
  q.SetMultiFieldQ('employee_id,nip', q_master);
  q.setField('tdate', formatdatetime('yyyy-MM-01', addMonths(serverdate, 0)) );
  q.setField('salary_id', '3' );
  q.setField('amount', '200000');
  q.setField('active', '1');
  isiKolomUser(true, q);
  q.Post;

  //t. kehadiran
  q.Append;
  q.SetMultiFieldQ('employee_id,nip', q_master);
  q.setField('tdate', formatdatetime('yyyy-MM-01', addMonths(serverdate, 0)) );
  q.setField('salary_id', '5' );
  q.setField('amount', '200000');
  q.setField('active', '1');
  isiKolomUser(true, q);
  q.Post;

  //t. makan
  q.Append;
  q.SetMultiFieldQ('employee_id,nip', q_master);
  q.setField('tdate', formatdatetime('yyyy-MM-01', addMonths(serverdate, 0)) );
  q.setField('salary_id', '6' );
  q.setField('amount', '250000');
  q.setField('active', '1');
  isiKolomUser(true, q);
  q.Post;

  q.free;
  q_master.Refresh;
  msgok('Finished');
end;





end.
