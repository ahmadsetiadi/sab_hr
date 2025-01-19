unit ULoan;

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
  TFrmLoan = class(TForm)
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
    MASTERColumn1: TcxGridDBBandedColumn;
    DS_Employee: TDataSource;
    Q_Employee: TZQuery;
    N1IsiLoanDetail1: TMenuItem;
    N2IsiLoanDetailMingguan1: TMenuItem;
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
    procedure isiLoanDetail(loan_id:String; tipe:string='bulanan');
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
    procedure N1PrintEmployeeReport1Click(Sender: TObject);
    procedure N1SendPasswordtoEmail1Click(Sender: TObject);
    procedure N2ClearResigndate1Click(Sender: TObject);
    procedure isiDataMenuPrint;
    procedure Button1Click(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure MASTERColumn1PropertiesEditValueChanged(Sender: TObject);
    procedure N1IsiLoanDetail1Click(Sender: TObject);
    procedure N2IsiLoanDetailMingguan1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmLoan: TFrmLoan;
  isDisMutasi, DisableEventEdit, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  //grademt, pwd, eid : string;
  //divi, work, posi, grad, ests : integer;
  tsm : tstringlist;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport;
//form close, form create
procedure TFrmLoan.VisibleALLGridDetail(tipe:boolean=False);
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
procedure TFrmLoan.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmLoan.cekAllEditModule(idm:integer);
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
procedure TFrmLoan.isiALLTableKolom;
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
procedure TFrmLoan.isiDataMenuPrint;
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
procedure TFrmLoan.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  tsm.Free;
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  q_master.Active := false;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmLoan.FormCreate(Sender: TObject);
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
  ShowDateTemplate(False);
  tsm := tstringlist.Create;
  tsm.Clear;
  //dbg('5');
  isDisMutasi := True;
  DisableMutasi1.Visible := False;
  if CekMotherBoard then DisableMutasi1.Visible := True;

  SetInsertTable(detail1, false);
  SetEditTable(detail1, true);
  SetDeleteTable(detail1, false);

  //ReadOnlyDataset(DETAIL1);
  //dbg('6');
end;
procedure TFrmLoan.SettingQuery;
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
procedure TFrmLoan.SettingGridDetail;
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
procedure TFrmLoan.ReloadClick;
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
procedure TFrmLoan.SettingFont;
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
procedure TFrmLoan.ValidasiControl;
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
procedure TFrmLoan.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmLoan.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmLoan.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmLoan.Button1Click(Sender: TObject);
begin
  //pesan(getsecurity2(edit1.Text));
  //findstr(edit1.Text, 'limit');
  //edit1.Text := Encrypt('bsmch2015');
end;

procedure TFrmLoan.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmLoan.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmLoan.MASTERColumn1PropertiesEditValueChanged(Sender: TObject);
var
  Q : TZQuery;
  s : String;
begin
  s := getValueLookup(Sender);
  Q := createquery;
  Q.Query('select employee_id, nip, company_id, division_id, department_id, workarea_id, position_id, level_id, employeestatus_id from m_employee where employee_id='''+s+''' ');
  if Q.RecordCount > 0 then
  begin
    q_master.SetMultiFieldQ('employee_id,nip,company_id,division_id,department_id,workarea_id,position_id,level_id,employeestatus_id', q);
  end;
  Q.free;
end;

procedure TFrmLoan.MenuItem1Click(Sender: TObject);
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
procedure TFrmLoan.OneMonth1Click(Sender: TObject);
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

procedure TFrmLoan.NextMonth1Click(Sender: TObject);
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
procedure TFrmLoan.PrevMonth1Click(Sender: TObject);
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
procedure TFrmLoan.OneYear1Click(Sender: TObject);
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
procedure TFrmLoan.OneDay1Click(Sender: TObject);
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
procedure TFrmLoan.oday1Click(Sender: TObject);
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
procedure TFrmLoan.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmLoan.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmLoan.getFocusQuery : TZQuery;
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
function TFrmLoan.getFocusTableName : String;
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
function TFrmLoan.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmLoan.getFocusGridView : TcxGridDBBandedTableView;
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
function TFrmLoan.getActiveModuleName : string;
var
  id1 : string;
begin
  id1 := inttostr(getCxGridByName(getFocusGridView.Name).Tag);
  result := getQValueString('select name from s_module where id_module='''+id1+''' ');
end;
procedure TFrmLoan.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmLoan.AutoActiveQuery;
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
procedure TFrmLoan.AutoRefreshQuery;
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
function TFrmLoan.getTabByName(nama:string) : TcxTabSheet;
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
procedure TFrmLoan.ImportFromExcel1Click(Sender: TObject);
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
function TFrmLoan.getCxGridByName(nama:string) : TcxGrid;
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
function TFrmLoan.getGridByName(nama:string) : TcxGridDBBandedTableView;
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
function TFrmLoan.getQueryByName(nama:string) : TZQuery;
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
procedure TFrmLoan.actLookupExecute(Sender: TObject);
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
procedure TFrmLoan.actAddExecute(Sender: TObject);
begin
  //getQueryByName(getFocusGridView.Name)

  if cekValidasi('`insert`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Inserting = False then exit;
  getQueryByName(getFocusGridView.Name).Append;
end;
procedure TFrmLoan.actcancelExecute(Sender: TObject);
begin
  getQueryByName(getFocusGridView.Name).Cancel;
end;
procedure TFrmLoan.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', getActiveModuleName) = false then exit;
  if getFocusGridView.OptionsData.Deleting = False then exit;
  if getQueryByName(getFocusGridView.Name).RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then getQueryByName(getFocusGridView.Name).Delete;
end;
procedure TFrmLoan.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', getActiveModuleName ) = false then exit;
  if getFocusGridView.OptionsData.Editing = False then exit;
  getQueryByName(getFocusGridView.Name).Edit;
end;
procedure TFrmLoan.actRefreshExecute(Sender: TObject);
begin
   //getQueryByName(getFocusGridView.Name).Refresh;
   q_master.Refresh;
end;
procedure TFrmLoan.actSaveExecute(Sender: TObject);
begin
  if isnowedit[getQueryByName(getFocusGridView.Name).Tag]  then getQueryByName(getFocusGridView.Name).Post;
end;
procedure TFrmLoan.actTabDetail1Execute(Sender: TObject);
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
procedure TFrmLoan.actTabDetail2Execute(Sender: TObject);
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

procedure TFrmLoan.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmLoan.ppExportClick(Sender: TObject);
begin
  if Confirm('Export Excel ?') = 'YES' then  ExportGrid('Excel', getCxGridByName(getfocusgridview.Name) );
end;
procedure TFrmLoan.PopupMenuPopup(Sender: TObject);
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
procedure TFrmLoan.ppFreezeClick(Sender: TObject);
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
procedure TFrmLoan.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'default');
end;
procedure TFrmLoan.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'month');
end;
procedure TFrmLoan.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'year');
end;
procedure TFrmLoan.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'relative');
end;
procedure TFrmLoan.ppFindClick(Sender: TObject);
begin
  {dbg(getFocusGridView.Name);
  dbg(getQueryByName(getFocusGridView.Name).Name);
  dbg(getFocusGridView.Name);
  dbg(getFocusTableName);}
  FindClick(getQueryByName(getFocusGridView.Name), getFocusGridView, getFocusTableName );
end;
procedure TFrmLoan.ppShowALLClick(Sender: TObject);
begin
  //dbg(getQueryByName(getFocusGridView.Name).Name);
  //dbg(SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
  ShowALLClick(getQueryByName(getFocusGridView.Name), SQLGrid[getGridByName(getfocusgridview.Name).Tag]);
end;
//end popup menu

//isnowedit master
procedure TFrmLoan.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmLoan.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmLoan.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmLoan.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmLoan.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmLoan.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmLoan.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmLoan.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmLoan.AfterCancelQ(idm : integer; nama:string);
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
procedure TFrmLoan.AfterDeleteQ(idm : integer; nama:string);
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
procedure TFrmLoan.AfterPostQ(idm : integer; nama:string);
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
procedure TFrmLoan.BeforeDeleteQ(idm : integer; nama:string);
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
procedure TFrmLoan.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmLoan.BeforePostQ(idm : integer; nama:string);
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
procedure TFrmLoan.NewRecordQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  ValidasiInsert(md);
  cekAllEditModule(strtoint(txtid.Text));
  {if nama <> 'master' then
  begin
    if lowercase(q_master.getFieldString('status')) = 'non active' then
    begin
      MsgError('Can''t Add Data For Non Active Employee');
      abort;
      exit;
    end;
  end;}
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
procedure TFrmLoan.newRecordMaster;
begin
  AutoRefreshQuery;
  //q_master.setField('taxtype', 1 );
  q_master.setField('tipe', 'Koperasi');
  //pwd := '';
  //q_master.setField(
end;
{function TFrmLoan.cekTSM : Boolean;
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
end;}
procedure tfrmloan.beforePostMaster;
begin
  //q_master.setField('tipe', 'Pinjaman');
end;
procedure TFrmLoan.afterPostMaster;
begin
  if isNewRecord[strtoint(txtid.Text)] then
  begin
    isiLoanDetail(q_master.getFieldString('loan_id'));
  end;
  q_master.Refresh;
end;
procedure TFrmLoan.beforeEditMaster;
begin
  exit;
  if AllreadyPaid(q_master.getFieldString('loan_id')) then
  begin
    isNowEdit[strtoint(txtid.Text)]    := false;
    //isNewRecord[idm]  := False;
    MsgError('Can''t Edit Loan, Because Already Paid');
    abort;
    exit;
  end;
end;
procedure TFrmLoan.beforeDeleteMaster;
begin
  if AllreadyPaid(q_master.getFieldString('loan_id')) then
  begin
    isNowEdit[strtoint(txtid.Text)]    := false;
    MsgError('Can''t Delete Loan, Because Already Paid');
    abort;
    exit;
  end;
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('loan_id'));
end;
procedure TFrmLoan.afterDeleteMaster;
begin
  //
end;
procedure TFrmLoan.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmLoan.isiLoanDetail(loan_id:String; tipe:string='bulanan');
var
  dt : tdatetime;
  qh, qd :tzquery;
  x : integer;
begin
  qh := createquery;
  qd := createquery;
  qh.Query('select * from t_loan where loan_id='''+loan_id+''' ');
  if qh.RecordCount = 0 then
  begin
    qh.Free; qd.Free;
    exit;
  end;

  dt := qh.getFieldDateTime('startdate');
  for x := 1 to qh.getFieldInteger('bulan') do
  begin
    qd.Query('select * from t_loan_detail where loan_id='''+loan_id+''' and tdate='''+date2sql(dt)+''' ');
    if qd.RecordCount = 0 then qd.Append else qd.Edit;
    qd.setField('loan_id', loan_id);
    qd.setField('tdate', dt);
    if x = qh.getFieldInteger('bulan') then
    begin
      qd.setField('amount', q_master.getFieldDouble('total')-
                            ( (q_master.getFieldDouble('bulan')-1)*
                               q_master.getFieldDouble('amount')
                            )
                  );
    end else
    begin
      qd.setField('amount', q_master.getFieldString('amount'));
    end;

    if qd.isNull('payrolldate') then
    begin
      qd.Post;
    end else
    begin
      qd.Cancel;
    end;

    if tipe='mingguan' then
    begin
      dt := addDays(dt, 7);
    end else
    begin
      dt := addMonths(dt, 1);
    end;

  end;
  qd.Free;
  qh.Free;
end;
function TFrmLoan.AllreadyPaid(loan_id:string) : boolean;
var
  q : tzquery;
begin
  q := createquery;
  q.Query('select * from t_loan_detail where '+gets('loan_id', q_master)+' and isnull(payrolldate)<>true limit 1');
  result := false;
  if q.RecordCount > 0  then
  begin
    result := true;
  end;
  q.Free;
end;
//mutation q_detail1
procedure TFrmLoan.newRecordMutation;
begin
  //
end;
procedure TFrmLoan.beforePostMutation;
begin
  //
end;
procedure TFrmLoan.afterPostMutation;
begin
  q_master.Refresh;
end;
procedure TFrmLoan.beforeEditMutation;
begin
  //
end;
procedure TFrmLoan.beforeDeleteMutation;
begin
  //
end;
procedure TFrmLoan.afterDeleteMutation;
begin
  q_master.Refresh;
end;
procedure TFrmLoan.afterCancelMutation;
begin
  //
end;
//end mutation

//Relatives q_detail2
procedure TFrmLoan.newRecordRelatives;
begin
  //
end;
procedure TFrmLoan.beforePostRelatives;
begin
  //
end;
procedure TFrmLoan.afterPostRelatives;
begin
  q_detail2.Refresh;
end;
procedure TFrmLoan.beforeEditRelatives;
begin
  //
end;
procedure TFrmLoan.beforeDeleteRelatives;
begin
  //
end;
procedure TFrmLoan.afterDeleteRelatives;
begin
  //
end;
procedure TFrmLoan.afterCancelRelatives;
begin
  //
end;
//end Relatives

//Asset q_detail3
procedure TFrmLoan.newRecordAsset;
begin
  //
end;
procedure TFrmLoan.beforePostAsset;
begin
  //
end;
procedure TFrmLoan.afterPostAsset;
begin
  //
end;
procedure TFrmLoan.beforeEditAsset;
begin
  //
end;
procedure TFrmLoan.beforeDeleteAsset;
begin
  //
end;
procedure TFrmLoan.afterDeleteAsset;
begin
  //
end;
procedure TFrmLoan.afterCancelAsset;
begin
  //
end;
//end Asset

//Job q_detail4
procedure TFrmLoan.newRecordJob;
begin
  //
end;
procedure TFrmLoan.beforePostJob;
begin
  //
end;
procedure TFrmLoan.afterPostJob;
begin
  //
end;
procedure TFrmLoan.beforeEditJob;
begin
  //
end;
procedure TFrmLoan.beforeDeleteJob;
begin
  //
end;
procedure TFrmLoan.afterDeleteJob;
begin
  //
end;
procedure TFrmLoan.afterCancelJob;
begin
  //
end;
//end Job

//Training q_detail5
procedure TFrmLoan.newRecordTraining;
begin
  //
end;
procedure TFrmLoan.beforePostTraining;
begin
  //
end;
procedure TFrmLoan.afterPostTraining;
begin
  //
end;
procedure TFrmLoan.beforeEditTraining;
begin
  //
end;
procedure TFrmLoan.beforeDeleteTraining;
begin
  //
end;
procedure TFrmLoan.afterDeleteTraining;
begin
  //
end;
procedure TFrmLoan.afterCancelTraining;
begin
  //
end;
//end Training

//Education q_detail6
procedure TFrmLoan.newRecordEducation;
begin
  //
end;
procedure TFrmLoan.beforePostEducation;
begin
  //
end;
procedure TFrmLoan.afterPostEducation;
begin
  //
end;
procedure TFrmLoan.beforeEditEducation;
begin
  //
end;
procedure TFrmLoan.beforeDeleteEducation;
begin
  //
end;
procedure TFrmLoan.afterDeleteEducation;
begin
  //
end;
procedure TFrmLoan.afterCancelEducation;
begin
  //
end;
//end Education

//salary q_detail7
procedure TFrmLoan.newRecordSalary;
begin
  //
end;
procedure TFrmLoan.beforePostSalary;
begin
  //
end;
procedure TFrmLoan.afterPostSalary;
begin
  //
end;
procedure TFrmLoan.beforeEditSalary;
begin
  //
end;
procedure TFrmLoan.beforeDeleteSalary;
begin
  //
end;
procedure TFrmLoan.afterDeleteSalary;
begin
  //
end;
procedure TFrmLoan.afterCancelSalary;
begin
  //
end;
//end salary

//begin reward
procedure TFrmLoan.newRecordReward;
begin
  //
end;
procedure TFrmLoan.beforePostReward;
begin
  //
end;
procedure TFrmLoan.afterPostReward;
begin
  //
end;
procedure TFrmLoan.beforeEditReward;
begin
  //
end;
procedure TFrmLoan.beforeDeleteReward;
begin
  //
end;
procedure TFrmLoan.afterDeleteReward;
begin
  //
end;
procedure TFrmLoan.afterCancelReward;
begin
  //
end;
//end reward

//begin punishment
procedure TFrmLoan.newRecordPunishment;
begin
  //
end;
procedure TFrmLoan.beforePostPunishment;
begin
  //
end;
procedure TFrmLoan.afterPostPunishment;
begin
  //
end;
procedure TFrmLoan.beforeEditPunishment;
begin
  //
end;
procedure TFrmLoan.beforeDeletePunishment;
begin
  //
end;
procedure TFrmLoan.afterDeletePunishment;
begin
  //
end;
procedure TFrmLoan.afterCancelPunishment;
begin
  //
end;
//end punishment

//detail history
procedure TFrmLoan.newRecordHistory;
begin
  //
end;
procedure TFrmLoan.beforePostHistory;
begin
  //
end;
procedure TFrmLoan.afterPostHistory;
begin
  //
end;
procedure TFrmLoan.beforeEditHistory;
begin
  //
end;
procedure TFrmLoan.beforeDeleteHistory;
begin
  //
end;
procedure TFrmLoan.afterDeleteHistory;
begin
  //
end;
procedure TFrmLoan.afterCancelHistory;
begin
  //
end;
//end detail history
procedure TFrmLoan.N1PrintEmployeeReport1Click(Sender: TObject);
begin
  //
end;


procedure TFrmLoan.N1SendPasswordtoEmail1Click(Sender: TObject);
begin
  //
end;

procedure TFrmLoan.N2ClearResigndate1Click(Sender: TObject);
begin
  //
end;

procedure TFrmLoan.N1IsiLoanDetail1Click(Sender: TObject);
begin
  ShowProgressbar;
  q_master.DisableControls;
  q_master.First;
  while not q_master.Eof do
  begin
    SetProgressbarDefault(q_master);
    isiLoanDetail(q_master.getFieldString('loan_id'), 'bulanan');
    q_master.next;
  end;
  q_master.EnableControls;
  q_master.Refresh;
  HideProgressbar;
end;

procedure TFrmLoan.N2IsiLoanDetailMingguan1Click(Sender: TObject);
begin
  ShowProgressbar;
  q_master.DisableControls;
  q_master.First;
  while not q_master.Eof do
  begin
    SetProgressbarDefault(q_master);
    isiLoanDetail(q_master.getFieldString('loan_id'), 'mingguan');
    q_master.next;
  end;
  q_master.EnableControls;
  q_master.Refresh;
  HideProgressbar;
end;

end.
