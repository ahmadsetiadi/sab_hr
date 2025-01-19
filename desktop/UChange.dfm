object FrmChange: TFrmChange
  Left = 526
  Top = 359
  BorderIcons = [biSystemMenu]
  Caption = 'Change Password'
  ClientHeight = 145
  ClientWidth = 488
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  FormStyle = fsStayOnTop
  OldCreateOrder = False
  Position = poMainFormCenter
  OnActivate = FormActivate
  OnCreate = FormCreate
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 11
    Top = 13
    Width = 110
    Height = 20
    Caption = 'Old Password'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label2: TLabel
    Left = 11
    Top = 41
    Width = 117
    Height = 20
    Caption = 'New Password'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label3: TLabel
    Left = 11
    Top = 69
    Width = 145
    Height = 20
    Caption = 'Confirm Password'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object pnlCustomize: TPanel
    Left = 0
    Top = 105
    Width = 488
    Height = 40
    Align = alBottom
    Color = 15451300
    TabOrder = 3
    object BtnChange: TcxButton
      Left = 312
      Top = 8
      Width = 75
      Height = 25
      Caption = '&Change'
      LookAndFeel.NativeStyle = False
      LookAndFeel.SkinName = 'UserSkin'
      TabOrder = 0
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'Comic Sans MS'
      Font.Style = [fsBold]
      ParentFont = False
      OnClick = BtnChangeClick
    end
    object BtnClose: TcxButton
      Left = 400
      Top = 8
      Width = 75
      Height = 25
      Caption = 'C&lose'
      LookAndFeel.NativeStyle = False
      LookAndFeel.SkinName = 'UserSkin'
      TabOrder = 1
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'Comic Sans MS'
      Font.Style = [fsBold]
      ParentFont = False
      OnClick = BtnCloseClick
    end
  end
  object txtOld: TcxTextEdit
    Left = 167
    Top = 10
    AutoSize = False
    ParentFont = False
    Properties.EchoMode = eemPassword
    Properties.PasswordChar = '.'
    Style.Font.Charset = ANSI_CHARSET
    Style.Font.Color = clWindowText
    Style.Font.Height = -21
    Style.Font.Name = 'Cooper Black'
    Style.Font.Style = [fsBold]
    Style.IsFontAssigned = True
    TabOrder = 0
    OnKeyDown = txtOldKeyDown
    Height = 24
    Width = 313
  end
  object txtNew: TcxTextEdit
    Left = 167
    Top = 38
    AutoSize = False
    ParentFont = False
    Properties.EchoMode = eemPassword
    Properties.PasswordChar = '.'
    Style.Font.Charset = ANSI_CHARSET
    Style.Font.Color = clWindowText
    Style.Font.Height = -21
    Style.Font.Name = 'Cooper Black'
    Style.Font.Style = [fsBold]
    Style.IsFontAssigned = True
    TabOrder = 1
    OnKeyDown = txtNewKeyDown
    Height = 24
    Width = 313
  end
  object txtConfirm: TcxTextEdit
    Left = 167
    Top = 66
    AutoSize = False
    ParentFont = False
    Properties.EchoMode = eemPassword
    Properties.PasswordChar = '.'
    Style.Font.Charset = ANSI_CHARSET
    Style.Font.Color = clWindowText
    Style.Font.Height = -21
    Style.Font.Name = 'Cooper Black'
    Style.Font.Style = [fsBold]
    Style.IsFontAssigned = True
    TabOrder = 2
    OnKeyDown = txtConfirmKeyDown
    Height = 24
    Width = 313
  end
end
