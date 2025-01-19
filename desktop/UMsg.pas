unit UMsg;

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
  TFrmMsg = class(TForm)
    pnlCustomize: TPanel;
    btnClose: TcxButton;
    ZQuery1: TZQuery;
    DataSource1: TDataSource;
    Image1: TImage;
    Memo1: TMemo;
    ActionList1: TActionList;
    actCopy: TAction;
    Label1: TLabel;
    procedure FormActivate(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure btnCloseClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure actCopyExecute(Sender: TObject);
    procedure Memo1KeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmMsg: TFrmMsg;

implementation

{$R *.dfm}
uses unit1, UMenuLogin;
procedure TFrmMsg.actCopyExecute(Sender: TObject);
begin
  dbg('1');
  memo1.CopyToClipboard;
end;

procedure TFrmMsg.btnCloseClick(Sender: TObject);
begin
  close;
end;

procedure TFrmMsg.FormActivate(Sender: TObject);
begin
Top := (Screen.Height - 30 - Height) div 2;
Left := (Screen.Width - Width) div 2;
end;

procedure TFrmMsg.FormCreate(Sender: TObject);
begin
  memo1.Text := 'select * from biodata';
end;

procedure TFrmMsg.FormShow(Sender: TObject);
begin
  //
end;

procedure TFrmMsg.Memo1KeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then close;
  
end;

end.
