unit USetting;

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
  dxSkinWhiteprint, dxRibbonSkins, dxSkinsdxRibbonPainter;

type
  TFrmSetting = class(TForm)
    pnlCustomize: TPanel;
    Label1: TLabel;
    TxtBarcode: TcxTextEdit;
    btnClose: TcxButton;
    btnChange: TcxButton;
    procedure FormActivate(Sender: TObject);
    procedure BtnCloseClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure BtnChangeClick(Sender: TObject);
    procedure TxtBarcodeKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmSetting: TFrmSetting;

implementation

{$R *.dfm}
uses unit1, UMenuLogin;
procedure TFrmSetting.FormActivate(Sender: TObject);
begin
  Top  := (Screen.Height - 30 - Height) div 2;
  Left := (Screen.Width - Width) div 2;
  if TipeSetting = 'barcode' then
  begin
    label1.Caption := 'Start No Bundle';
    TxtBarcode.Text := getQValueString('select value from s_setting where name='''+TipeSetting+''' ');
  end else
  if TipeSetting = 'fontsize' then
  begin
    label1.Caption := 'Font Size';
    txtbarcode.Text:= ReadIniFile('visual', 'fontsize');
  end;

  TxtBarcode.SetFocus;
end;

procedure TFrmSetting.BtnCloseClick(Sender: TObject);
begin
  close;
end;

procedure TFrmSetting.FormCreate(Sender: TObject);
begin
{  RibbonColor(label1);
  RibbonColor(label2);
  RibbonColor(label3);}
end;

procedure TFrmSetting.BtnChangeClick(Sender: TObject);
begin
  //ExecuteSQL('update s_update set barcode='''+TxtBarcode.Text+''' ');
  //executeSQL('update s_setting set value='''+TxtBarcode.Text+''' where name='''+TipeSetting+''' ');
  if TipeSetting = 'fontsize' then SaveIniFIle('visual', 'fontsize', TxtBarcode.Text );
  MsgOK('Saved');
  close;
end;

procedure TFrmSetting.TxtBarcodeKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then
  begin
    BtnChangeClick(sender);
  end;
end;

end.
