unit UError;

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
  dxRibbonForm, cxContainer, cxTextEdit, cxMaskEdit, cxDropDownEdit,
  cxCalendar, cxDBEdit, dxSkinBlueprint, dxSkinDevExpressDarkStyle,
  dxSkinDevExpressStyle, dxSkinHighContrast, dxSkinOffice2013White,
  dxSkinSevenClassic, dxSkinSharpPlus, dxSkinTheAsphaltWorld, dxSkinVS2010,
  dxSkinWhiteprint, dxRibbonSkins, dxSkinsdxRibbonPainter, Vcl.ComCtrls, dxCore,
  cxDateUtils, dxGDIPlusClasses, System.Actions, Vcl.ActnList;

type
  TFrmError = class(TForm)
    pnlCustomize: TPanel;
    btnClose: TcxButton;
    ZQuery1: TZQuery;
    DataSource1: TDataSource;
    Image1: TImage;
    Memo1: TMemo;
    ActionList1: TActionList;
    actCopy: TAction;
    Label1: TLabel;
    BtnSave: TcxButton;
    procedure FormActivate(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure btnCloseClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure actCopyExecute(Sender: TObject);
    procedure Memo1KeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure BtnSaveClick(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmError: TFrmError;

implementation

{$R *.dfm}
uses unit1, UMenuLogin;
procedure TFrmError.actCopyExecute(Sender: TObject);
begin
  dbg('1');
  memo1.CopyToClipboard;
end;

procedure TFrmError.btnCloseClick(Sender: TObject);
begin
  close;
end;

procedure TFrmError.BtnSaveClick(Sender: TObject);
var
  fn : string;
begin
  fn := FileSaveDialog('Text Files (*.txt)|*.txt');
  fn := trim(fn);
  if fn = '' then exit;
  fn := fn + '.txt';
  Memo1.Lines.SaveToFile(fn);
  MsgOK('Finished');
end;

procedure TFrmError.FormActivate(Sender: TObject);
begin
Top := (Screen.Height - 30 - Height) div 2;
Left := (Screen.Width - Width) div 2;
end;

procedure TFrmError.FormCreate(Sender: TObject);
begin
  memo1.Text := 'select * from biodata';
end;

procedure TFrmError.FormShow(Sender: TObject);
begin
  //
end;

procedure TFrmError.Memo1KeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then close;
  
end;

end.
