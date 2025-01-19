unit USetSkin;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  StdCtrls, MMSystem, cxGraphics, cxControls, cxLookAndFeels,
  cxLookAndFeelPainters, dxSkinsCore, dxSkinCaramel, dxSkinscxPCPainter,
  Menus, cxContainer, cxEdit, dxLayoutcxEditAdapters, dxLayoutContainer,
  cxTextEdit, cxMaskEdit, cxDropDownEdit, cxFontNameComboBox, cxButtons,
  dxLayoutControl, dxSkinsDefaultPainters, iniFiles,
  dxLayoutControlAdapters, cxSpinEdit, dxSkinBlack, dxSkinBlue,
  dxSkinBlueprint, dxSkinCoffee, dxSkinDarkRoom, dxSkinDarkSide,
  dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinValentine, dxSkinVS2010, dxSkinWhiteprint,
  dxSkinXmas2008Blue, cxStyles, cxCustomData, cxFilter, cxData, cxDataStorage,
  cxNavigator, Data.DB, cxDBData, cxDBLookupComboBox, cxGridLevel,
  cxGridCustomTableView, cxGridTableView, cxGridBandedTableView,
  cxGridDBBandedTableView, cxClasses, cxGridCustomView, cxGrid;

type
  TFrmSetSkin = class(TForm)
    dxLayoutControl1Group_Root: TdxLayoutGroup;
    dxLayoutControl1: TdxLayoutControl;
    dxLayoutControl1Group1: TdxLayoutGroup;
    cxComboBoxSkin: TcxComboBox;
    dxLayoutControl1Item1: TdxLayoutItem;
    dxLayoutControl1Group4: TdxLayoutGroup;
    BtnOk: TcxButton;
    dxLayoutControl1Item4: TdxLayoutItem;
    BtnAnnulla: TcxButton;
    dxLayoutControl1Item5: TdxLayoutItem;
    dxLayoutControl1Group5: TdxLayoutGroup;
    procedure BtnOkClick(Sender: TObject);
    procedure BtnAnnullaClick(Sender: TObject);
    procedure cxFontNameComboBoxPropertiesChange(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure cxComboBoxSkinPropertiesChange(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmSetSkin: TFrmSetSkin;
  ini:tinifile;
implementation


{$R *.dfm}
uses unit1, UMenuLogin;
procedure TFrmSetSkin.BtnOkClick(Sender: TObject);
begin
  SaveIniFIle('visual','skin', cxComboBoxSkin.Text);
  {Ini := TIniFile.Create(ExtractFilePath(Application.ExeName)+'Impostazioni.ini');
  try
    ini.WriteString('Visualizzazione','FontName',cxFontNameComboBox.FontName);
    ini.WriteInteger('Visualizzazione','FontSize',cxSpinEditFontSize.EditValue);
    ini.WriteString('Visualizzazione','Tema',cxComboBoxSkin.Text);
    ini.WriteBool('Visualizzazione','StileNativo',DataModule2.dxSkinController.NativeStyle);
  finally
    ini.Free;
  end;}

  ModalResult:=mrOk;
end;

procedure TFrmSetSkin.BtnAnnullaClick(Sender: TObject);
begin
  ModalResult:=mrNo;
end;

procedure TFrmSetSkin.cxFontNameComboBoxPropertiesChange(Sender: TObject);
begin
// ????????????????????
// ????????????????????
end;

procedure TFrmSetSkin.FormShow(Sender: TObject);
begin
  dbg('setskin');
  dxSkinsUserSkinPopulateSkinNames('AllSkins.skinres', cxComboBoxSkin.Properties.Items);
  cxComboBoxSkin.ItemIndex      := cxComboBoxSkin.Properties.Items.IndexOf(ReadIniFile('visual', 'skin'));
  cxComboBoxSkin.Text           := ReadIniFile('visual', 'skin');
end;

procedure TFrmSetSkin.cxComboBoxSkinPropertiesChange(Sender: TObject);
begin
    if dxSkinsUserSkinLoadFromFile('AllSkins.skinres', TcxComboBox(Sender).EditText) then
    begin
      MenuLogin.dxSkinController1.NativeStyle := false;
      MenuLogin.dxSkinController1.SkinName := 'UserSkin';
    end;
    SaveIniFIle('visual','skin', TcxComboBox(Sender).EditText);
end;

procedure TFrmSetSkin.FormClose(Sender: TObject; var Action: TCloseAction);
begin
   {Ini := TIniFile.Create(ExtractFilePath(Application.ExeName)+'Impostazioni.ini');
   try
     ini.WriteInteger('FrmSetSkin','Height',self.Height);
     ini.WriteInteger('FrmSetSkin','Width',self.Width);
   finally
     ini.Free;
   end;}
end;

end.
