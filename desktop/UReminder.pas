unit UReminder;

interface

uses
  Windows, Messages, StrUtils, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, cxGraphics, cxLookAndFeels, cxLookAndFeelPainters, Menus,
  cxControls, cxStyles, dxSkinsCore, dxSkinBlack, dxSkinBlue,
  dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom, dxSkinDarkSide, dxSkinFoggy,
  dxSkinGlassOceans, dxSkiniMaginary, dxSkinLilian, dxSkinLiquidSky,
  dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinPumpkin, dxSkinSeven,
  dxSkinSharp, dxSkinSilver, dxSkinSpringTime, dxSkinStardust,
  dxSkinSummer2008, dxSkinsDefaultPainters, dxSkinValentine,
  dxSkinXmas2008Blue, dxSkinscxPCPainter, cxCustomData, cxFilter, cxData,
  cxDataStorage, cxEdit, DB, cxDBData, cxGridLevel, cxClasses,
  cxGridCustomView, cxGridCustomTableView, cxGridTableView,
  cxGridDBTableView, cxGrid, ZAbstractRODataset, ZAbstractDataset,
  ZDataset, StdCtrls, cxButtons, ExtCtrls, cxDBEditRepository, dxRibbon,
  dxRibbonForm, cxSplitter, cxGridBandedTableView, cxGridDBBandedTableView,
  cxPC, cxGridCustomPopupMenu, cxGridPopupMenu, dxSkinBlueprint,
  dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinHighContrast,
  dxSkinOffice2013White, dxSkinSevenClassic, dxSkinSharpPlus,
  dxSkinTheAsphaltWorld, dxSkinVS2010, dxSkinWhiteprint, cxPCdxBarPopupMenu,
  cxNavigator, cxDBLookupComboBox, cxgridexportlink;

type
  TFrmReminder = class(TForm)
    pnlCustomize: TPanel;
    BtnExport: TcxButton;
    BtnClose: TcxButton;
    Q_MASTER: TZQuery;
    DS_MASTER: TDataSource;
    cxGridPopupMenu1: TcxGridPopupMenu;
    Panel2: TPanel;
    LblJudul: TLabel;
    PageHeader: TcxPageControl;
    TabMaster: TcxTabSheet;
    GRID_MASTER: TcxGrid;
    MASTER: TcxGridDBBandedTableView;
    GRID_MASTERLevel1: TcxGridLevel;
    BtnSendEmail: TcxButton;
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure BtnExportClick(Sender: TObject);
    procedure BtnExportKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure BtnCloseKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure MASTERKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure BtnCloseClick(Sender: TObject);
    procedure SettingFont;
    procedure FormShow(Sender: TObject);
    procedure VIEW_MASTERKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure BtnSendEmailClick(Sender: TObject);
    procedure BtnSendEmailKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure isiTMPReminder;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmReminder: TFrmReminder;

implementation

{$R *.dfm}
uses unit1, ULookup, UMenuLogin;
procedure TFrmReminder.SettingFont;
var
  fs : integer;
begin
  fs := strtoint(ReadIniFile('visual','fontsize'));
  PageHeader.Font.Name             := 'Tahoma';
  PageHeader.Font.Size             := fs - 1;
  GRID_MASTER.Font.Name            := 'Tahoma';
  GRID_MASTER.Font.Size            := fs;
end;
procedure TFrmReminder.VIEW_MASTERKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    close;
  end else
  if (Key = VK_RETURN) then
  begin
    close;
  end;
end;

procedure TFrmReminder.FormClose(Sender: TObject;
  var Action: TCloseAction);
begin
  isiTableKolom('tmp_reminder', MASTER );
  q_master.Active  := false;
  menulogin.TreeView.SetFocus;
end;
procedure TFrmReminder.FormShow(Sender: TObject);
begin
  SettingFont;
  isiTMPReminder;
  q_master.Query('select * from tmp_reminder order by tipe, nip');
  setColumnWidth('59', q_master, master);
  BtnClose.SetFocus;
end;
procedure TFrmReminder.isiTMPReminder;
var
  qs, qt : tzquery;
begin
  executesql('truncate tmp_reminder');
  qs := createquery;
  qs.Query('select * from s_reminder where active=1');
  qs.First;
  while not qs.Eof do
  begin
    ExecuteSQL('insert into tmp_reminder ( '+qs.getFieldString('_sql')+' ) ');
    qs.Next;
  end;
  qs.Free;
end;
procedure TFrmReminder.MASTERKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    close;
  end else
  if (Key = VK_RETURN) then
  begin
    close;
  end;
end;

procedure TFrmReminder.BtnExportClick(Sender: TObject);
begin
  ExportGrid('Excel', GRID_MASTER);
end;

procedure TFrmReminder.BtnExportKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    close;
  end;
end;
procedure TFrmReminder.BtnSendEmailClick(Sender: TObject);
var
  smtpHost, smtpUser, smtpPass, body, fn : string;
  smtpPort : integer;
  qe : tzquery;

begin
  ShowProgressbar;
  fn := '';
  fn := Extractfilepath(Application.exename)+'\';
  fn := fn + 'Reminder_From_Payroll_Software';
  fn := fn + '.xls';
  ExportGridToExcel(fn, GRID_MASTER);
  qe := createquery;
  qe.Query('select * from m_emailreminder order by name');
  qe.First;
  smtpHost := getQValueString('select value from s_setting where name=''smtphost'' ');
  smtpPort := getQValueInteger('select value from s_setting where name=''smtpport'' ');
  smtpUser := getQValueString('select value from s_setting where name=''smtpusername'' ');
  smtpPass := getQValueString('select value from s_setting where name=''smtppassword'' ');
  {body     := 'Berikut Kami kirimkan Reminder Payroll Software. '+es+
              ''+es+
              'Terlampir.';}
  body := getQValueString('select value from s_setting where setting_id=''12'' ');
  while not qe.Eof do
  begin
    SetProgressbarDefault(qe);
    SendEmail(qe.getFieldString('name'),'Reminder From Payroll Software',body, fn,
              smtpHost, smtpUser, smtpPass, smtpPort);
    qe.Next;
  end;
  DeleteFile(fn);
  qe.Free;
  HideProgressbar;
end;
procedure TFrmReminder.BtnSendEmailKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    close;
  end;
end;

procedure TFrmReminder.BtnCloseKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    close;
  end;
end;
procedure TFrmReminder.BtnCloseClick(Sender: TObject);
begin
  close;
end;



end.
