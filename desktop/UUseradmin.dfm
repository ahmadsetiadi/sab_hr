object FrmUseradmin: TFrmUseradmin
  Left = 0
  Top = 0
  Caption = 'User Admin'
  ClientHeight = 527
  ClientWidth = 849
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  FormStyle = fsMDIChild
  OldCreateOrder = False
  Visible = True
  WindowState = wsMaximized
  OnClose = FormClose
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Ribbon: TdxRibbon
    Left = 0
    Top = 0
    Width = 849
    Height = 125
    ApplicationButton.Visible = False
    BarManager = BarManager
    Style = rs2013
    ColorSchemeAccent = rcsaBlue
    ColorSchemeName = 'UserSkin'
    Fonts.AssignedFonts = [afTabHeader]
    Fonts.TabHeader.Charset = DEFAULT_CHARSET
    Fonts.TabHeader.Color = clWindowText
    Fonts.TabHeader.Height = -12
    Fonts.TabHeader.Name = 'Segoe UI'
    Fonts.TabHeader.Style = []
    PopupMenuItems = [rpmiItems, rpmiQATPosition, rpmiQATAddRemoveItem, rpmiMinimizeRibbon]
    SupportNonClientDrawing = True
    Contexts = <
      item
        Caption = 'Selection Tools'
        Color = 13468115
      end>
    TabOrder = 0
    TabStop = False
    object tabToolbar: TdxRibbonTab
      Active = True
      Caption = 'Toolbar'
      Groups = <
        item
          ToolbarName = 'dxbFile'
        end
        item
          ToolbarName = 'GroupDate'
        end>
      KeyTip = 'T'
      Index = 0
    end
    object rtSelection: TdxRibbonTab
      Caption = 'Selection'
      Groups = <>
      Index = 1
      ContextIndex = 0
    end
  end
  object PageControl: TcxPageControl
    Left = 0
    Top = 125
    Width = 849
    Height = 252
    Align = alTop
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 3
    Properties.ActivePage = TabMaster
    Properties.AllowDisabledTabAccess = True
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 246
    ClientRectLeft = 3
    ClientRectRight = 843
    ClientRectTop = 26
    object TabMaster: TcxTabSheet
      Caption = 'User Admin'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -11
      Font.Name = 'Tahoma'
      Font.Style = []
      ImageIndex = 1
      ParentFont = False
      object GRID_MASTER: TcxGrid
        Left = 0
        Top = 0
        Width = 840
        Height = 220
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object MASTER: TcxGridDBBandedTableView
          Navigator.Buttons.CustomButtons = <>
          Navigator.Buttons.SaveBookmark.Visible = False
          Navigator.Buttons.GotoBookmark.Visible = False
          Navigator.InfoPanel.Visible = True
          Navigator.Visible = True
          DataController.DataSource = DS_MASTER
          DataController.Filter.AutoDataSetFilter = True
          DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
          DataController.Summary.DefaultGroupSummaryItems = <>
          DataController.Summary.FooterSummaryItems = <>
          DataController.Summary.SummaryGroups = <>
          OptionsBehavior.FocusCellOnTab = True
          OptionsBehavior.FocusFirstCellOnNewRecord = True
          OptionsBehavior.GoToNextCellOnEnter = True
          OptionsBehavior.IncSearch = True
          OptionsBehavior.NavigatorHints = True
          OptionsCustomize.ColumnsQuickCustomization = True
          OptionsCustomize.BandMoving = False
          OptionsCustomize.BandsQuickCustomization = True
          OptionsData.Appending = True
          OptionsSelection.InvertSelect = False
          OptionsSelection.MultiSelect = True
          OptionsSelection.CellMultiSelect = True
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.BandHeaders = False
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
          object MASTERid_user: TcxGridDBBandedColumn
            DataBinding.FieldName = 'id_user'
            Visible = False
            VisibleForCustomization = False
            Position.BandIndex = 0
            Position.ColIndex = 0
            Position.RowIndex = 0
          end
          object MASTERname: TcxGridDBBandedColumn
            Caption = 'Full Name'
            DataBinding.FieldName = 'name'
            Width = 166
            Position.BandIndex = 0
            Position.ColIndex = 3
            Position.RowIndex = 0
          end
          object MASTERtempatlahir: TcxGridDBBandedColumn
            Caption = 'Place of Birth'
            DataBinding.FieldName = 'tempatlahir'
            Width = 101
            Position.BandIndex = 0
            Position.ColIndex = 4
            Position.RowIndex = 0
          end
          object MASTERtanggallahir: TcxGridDBBandedColumn
            Caption = 'Date of Birth'
            DataBinding.FieldName = 'tanggallahir'
            RepositoryItem = MenuLogin.RepDate
            Width = 133
            Position.BandIndex = 0
            Position.ColIndex = 5
            Position.RowIndex = 0
          end
          object MASTERperusahaan_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'perusahaan_id'
            Visible = False
            VisibleForCustomization = False
            Position.BandIndex = 0
            Position.ColIndex = 6
            Position.RowIndex = 0
          end
          object MASTERnamaperusahaan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'namaperusahaan'
            Visible = False
            VisibleForCustomization = False
            Position.BandIndex = 0
            Position.ColIndex = 7
            Position.RowIndex = 0
          end
          object MASTERusername: TcxGridDBBandedColumn
            Caption = 'Username'
            DataBinding.FieldName = 'username'
            Width = 200
            Position.BandIndex = 0
            Position.ColIndex = 1
            Position.RowIndex = 0
          end
          object MASTERpassword: TcxGridDBBandedColumn
            Caption = 'Password'
            DataBinding.FieldName = 'password'
            Width = 254
            Position.BandIndex = 0
            Position.ColIndex = 2
            Position.RowIndex = 0
          end
          object MASTERpertanyaan: TcxGridDBBandedColumn
            Caption = 'Sequrity Question'
            DataBinding.FieldName = 'pertanyaan'
            Width = 200
            Position.BandIndex = 0
            Position.ColIndex = 8
            Position.RowIndex = 0
          end
          object MASTERjawaban: TcxGridDBBandedColumn
            Caption = 'Answer'
            DataBinding.FieldName = 'jawaban'
            Width = 200
            Position.BandIndex = 0
            Position.ColIndex = 9
            Position.RowIndex = 0
          end
          object MASTERactive: TcxGridDBBandedColumn
            Caption = 'Active'
            DataBinding.FieldName = 'active'
            RepositoryItem = MenuLogin.RepCheckbox
            Width = 130
            Position.BandIndex = 0
            Position.ColIndex = 10
            Position.RowIndex = 0
          end
        end
        object GRID_MASTERLevel1: TcxGridLevel
          GridView = MASTER
        end
      end
    end
  end
  object statusBar: TdxStatusBar
    Left = 0
    Top = 497
    Width = 849
    Height = 30
    Panels = <
      item
        PanelStyleClassName = 'TdxStatusBarTextPanelStyle'
        PanelStyle.Alignment = taCenter
        Text = 'New Data ( Ctrl+N )'
        Width = 130
      end
      item
        PanelStyleClassName = 'TdxStatusBarTextPanelStyle'
        PanelStyle.Alignment = taCenter
        Text = 'Edit Data ( Ctrl+E )'
        Width = 130
      end
      item
        PanelStyleClassName = 'TdxStatusBarTextPanelStyle'
        PanelStyle.Alignment = taCenter
        Text = 'Delete Data ( Delete )'
        Width = 140
      end
      item
        PanelStyleClassName = 'TdxStatusBarTextPanelStyle'
        PanelStyle.Alignment = taCenter
        Text = 'Save Data ( Ctrl+S )'
        Width = 140
      end
      item
        PanelStyleClassName = 'TdxStatusBarTextPanelStyle'
        PanelStyle.Alignment = taCenter
        Text = 'Cancel (Esc)'
        Width = 130
      end
      item
        PanelStyleClassName = 'TdxStatusBarTextPanelStyle'
        PanelStyle.Alignment = taCenter
        Text = 'Refresh Data (F5)'
        Width = 130
      end
      item
        PanelStyleClassName = 'TdxStatusBarTextPanelStyle'
      end>
    PaintStyle = stpsUseLookAndFeel
    LookAndFeel.Kind = lfUltraFlat
    LookAndFeel.NativeStyle = False
    LookAndFeel.SkinName = 'Office2010Black'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    Visible = False
  end
  object cxSplitter1: TcxSplitter
    Left = 0
    Top = 377
    Width = 849
    Height = 4
    HotZoneClassName = 'TcxMediaPlayer9Style'
    AlignSplitter = salTop
    Control = PageControl
  end
  object PageDetail: TcxPageControl
    Left = 0
    Top = 381
    Width = 849
    Height = 116
    Align = alClient
    TabOrder = 4
    Properties.ActivePage = TabDetail
    Properties.AllowDisabledTabAccess = True
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 110
    ClientRectLeft = 3
    ClientRectRight = 843
    ClientRectTop = 26
    object TabDetail: TcxTabSheet
      Caption = 'User Admin Detail'
      ImageIndex = 1
      object GRID_DETAIL1: TcxGrid
        Left = 0
        Top = 0
        Width = 840
        Height = 84
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DETAIL1: TcxGridDBBandedTableView
          Navigator.Buttons.CustomButtons = <>
          Navigator.Buttons.SaveBookmark.Visible = False
          Navigator.Buttons.GotoBookmark.Visible = False
          Navigator.InfoPanel.Visible = True
          Navigator.Visible = True
          DataController.DataSource = DS_DETAIL1
          DataController.Filter.AutoDataSetFilter = True
          DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
          DataController.Summary.DefaultGroupSummaryItems = <>
          DataController.Summary.FooterSummaryItems = <>
          DataController.Summary.SummaryGroups = <>
          OptionsBehavior.FocusCellOnTab = True
          OptionsBehavior.FocusFirstCellOnNewRecord = True
          OptionsBehavior.GoToNextCellOnEnter = True
          OptionsBehavior.IncSearch = True
          OptionsBehavior.NavigatorHints = True
          OptionsCustomize.ColumnsQuickCustomization = True
          OptionsCustomize.BandMoving = False
          OptionsCustomize.BandsQuickCustomization = True
          OptionsData.Appending = True
          OptionsSelection.InvertSelect = False
          OptionsSelection.MultiSelect = True
          OptionsSelection.CellMultiSelect = True
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.BandHeaders = False
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
          object DETAIL1id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'id'
            Visible = False
            VisibleForCustomization = False
            Position.BandIndex = 0
            Position.ColIndex = 0
            Position.RowIndex = 0
          end
          object DETAIL1id_user: TcxGridDBBandedColumn
            DataBinding.FieldName = 'id_user'
            Visible = False
            VisibleForCustomization = False
            Width = 160
            Position.BandIndex = 0
            Position.ColIndex = 1
            Position.RowIndex = 0
          end
          object DETAIL1id_module: TcxGridDBBandedColumn
            Caption = 'Module Name'
            DataBinding.FieldName = 'id_module'
            PropertiesClassName = 'TcxLookupComboBoxProperties'
            Properties.KeyFieldNames = 'id_module'
            Properties.ListColumns = <
              item
                FieldName = 'name'
              end>
            Properties.ListSource = DS_MODULE
            Properties.OnPopup = DETAIL1id_modulePropertiesPopup
            Width = 160
            Position.BandIndex = 0
            Position.ColIndex = 2
            Position.RowIndex = 0
          end
          object DETAIL1insert: TcxGridDBBandedColumn
            Caption = 'Insert'
            DataBinding.FieldName = 'insert'
            RepositoryItem = MenuLogin.RepCheckbox
            Position.BandIndex = 0
            Position.ColIndex = 3
            Position.RowIndex = 0
          end
          object DETAIL1edit: TcxGridDBBandedColumn
            Caption = 'Edit'
            DataBinding.FieldName = 'edit'
            RepositoryItem = MenuLogin.RepCheckbox
            Position.BandIndex = 0
            Position.ColIndex = 4
            Position.RowIndex = 0
          end
          object DETAIL1delete: TcxGridDBBandedColumn
            Caption = 'Delete'
            DataBinding.FieldName = 'delete'
            RepositoryItem = MenuLogin.RepCheckbox
            Position.BandIndex = 0
            Position.ColIndex = 5
            Position.RowIndex = 0
          end
          object DETAIL1export: TcxGridDBBandedColumn
            Caption = 'Export'
            DataBinding.FieldName = 'export'
            RepositoryItem = MenuLogin.RepCheckbox
            Position.BandIndex = 0
            Position.ColIndex = 6
            Position.RowIndex = 0
          end
          object DETAIL1menu: TcxGridDBBandedColumn
            Caption = 'Menu'
            DataBinding.FieldName = 'menu'
            RepositoryItem = MenuLogin.RepCheckbox
            Position.BandIndex = 0
            Position.ColIndex = 7
            Position.RowIndex = 0
          end
          object DETAIL1print: TcxGridDBBandedColumn
            Caption = 'Print'
            DataBinding.FieldName = 'print'
            RepositoryItem = MenuLogin.RepCheckbox
            Position.BandIndex = 0
            Position.ColIndex = 8
            Position.RowIndex = 0
          end
          object DETAIL1disable_menu: TcxGridDBBandedColumn
            Caption = 'Disable Menu'
            DataBinding.FieldName = 'disable_menu'
            RepositoryItem = MenuLogin.RepMemo2
            Width = 200
            Position.BandIndex = 0
            Position.ColIndex = 9
            Position.RowIndex = 0
          end
          object DETAIL1disable_print: TcxGridDBBandedColumn
            Caption = 'Disable Print'
            DataBinding.FieldName = 'disable_print'
            RepositoryItem = MenuLogin.RepMemo2
            Width = 200
            Position.BandIndex = 0
            Position.ColIndex = 10
            Position.RowIndex = 0
          end
          object DETAIL1disable_detail: TcxGridDBBandedColumn
            Caption = 'Disable Detail'
            DataBinding.FieldName = 'disable_detail'
            RepositoryItem = MenuLogin.RepMemo2
            Visible = False
            VisibleForCustomization = False
            Width = 200
            Position.BandIndex = 0
            Position.ColIndex = 11
            Position.RowIndex = 0
          end
        end
        object GRID_DETAIL1Level1: TcxGridLevel
          GridView = DETAIL1
        end
      end
    end
  end
  object txtID: TEdit
    Left = 352
    Top = 8
    Width = 121
    Height = 21
    TabOrder = 5
    Text = 'txtID'
    Visible = False
  end
  object txtModuleName: TEdit
    Left = 496
    Top = 2
    Width = 121
    Height = 21
    TabOrder = 10
    Text = 'Edit1'
    Visible = False
  end
  object BarManager: TdxBarManager
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -12
    Font.Name = 'Segoe UI'
    Font.Style = []
    Categories.Strings = (
      'Default')
    Categories.ItemsVisibles = (
      2)
    Categories.Visibles = (
      True)
    ImageOptions.LargeImages = MenuLogin.ImgRibbon
    ImageOptions.LargeIcons = True
    ImageOptions.StretchGlyphs = False
    LookAndFeel.NativeStyle = False
    LookAndFeel.SkinName = 'Office2013White'
    MenuAnimations = maFade
    PopupMenuLinks = <>
    Style = bmsUseLookAndFeel
    UseSystemFont = False
    Left = 444
    Top = 8
    DockControlHeights = (
      0
      0
      0
      0)
    object dxbFile: TdxBar
      Caption = 'Custom'
      CaptionButtons = <>
      DockedLeft = 0
      DockedTop = 0
      FloatLeft = 935
      FloatTop = 8
      FloatClientWidth = 51
      FloatClientHeight = 168
      Glyph.Data = {
        36040000424D3604000000000000360000002800000010000000100000000100
        2000000000000004000000000000000000000000000000000000000000020000
        000C000000160000001A0000001B0000001C0000001D0000001E0000001F0000
        00210000002200000023000000240000002100000013000000040000000A8D6A
        44C9B46F38FFB26C34FF242424FF1F1F1FFF1C1C1CFF181818FF141414FF1212
        12FF0F0F0FFF0C0C0CFFA0541AFF9F5218FF805328D20000001300000011BB77
        40FFEEC08EFFEFCA9EFF333333FF2E2E2EFF2A2A2AFF272727FF222222FF1F1F
        1FFFE7BD8FFF171717FFE5BC8CFFDDA96EFFA05319FF0000002000000011BF7D
        47FFF1C593FFF1CDA4FF444444FF3F3F3FFF3B3B3BFF363636FF323232FF2D2D
        2DFFE9BF91FF262626FFE6BC8EFFDFAD70FFA2561BFF000000220000000FC482
        4DFFF3CA99FFF3D1A7FF575757FF525252FF4D4D4DFF484848FF434343FF3E3E
        3EFFE9C192FF353535FFE8BE90FFE1AD73FFA4591FFF000000200000000EC987
        52FFF5CEA0FFF5D5ADFF6A6A6AFF656565FF606060FF5B5B5BFF565656FF5151
        51FF4C4C4CFF474747FFE9C191FFE3AF76FFA75D24FF0000001E0000000CCE8C
        58FFF8D4A7FFF8D8B2FFF5D5ACFFF4D0A5FFF1CDA0FFEFCA9CFFEEC89AFFEDC8
        99FFEDC497FFECC395FFEAC394FFE4B277FFA96027FF0000001C0000000BD291
        5DFFFBD7ADFFF8D1A6FFF6CE9DFFF3C996FFF0C38FFFEEBF89FFECBC83FFEBBA
        82FFE9B980FFE9B77FFFE8B57CFFE7B47BFFAD652CFF0000001B00000009D796
        63FFFDDCB3FFDBA26BFFDAA16AFFD9A069FFD99F68FFD89D66FFD69C65FFD69B
        64FFD59962FFD49861FFD3965FFFE8B67DFFB06931FF0000001900000008DA9B
        68FFFFDFBAFFD99E67FFFBFBFBFFFAFAFAFFF8F8F8FFF7F7F7FFF5F5F5FFF4F4
        F4FFF2F2F2FFF1F1F1FFD0925BFFE9B980FFB46E37FF0000001700000006DE9F
        6DFFFFE5C0FFD69A64FFFDFDFDFF8D8D8DFF8A8A8AFF898989FF868686FF8383
        83FF818181FFF5F5F5FFCD8E57FFEBBB82FFB8733CFF0000001500000005E1A3
        70FFFFE7C7FFD3965FFFFFFFFFFFFFFFFFFFFEFEFEFFFDFDFDFFFCFCFCFFFBFB
        FBFFFAFAFAFFF8F8F8FFCA8A54FFEEBC85FFBC7842FF0000001400000004E3A5
        73FFFFEACDFFD1915CFFFFFFFFFFACACACFFAAAAAAFFA8A8A8FFA6A6A6FFA4A4
        A4FFA2A2A2FFFBFBFBFFC88650FFEFBF88FFC17D47FF0000001200000002E5A7
        75FFFFF0D2FFCE8D58FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        FFFFFFFFFFFFFEFEFEFFC5834DFFF1C18AFFC5824DFF0000000E00000001AA93
        75C0E5A775FFCB8A55FFABABABFFABABABFFABABABFFABABABFFABABABFFABAB
        ABFFABABABFFABABABFFC3804BFFCD8B57FF94754EC500000007000000000000
        0001000000020000000300000003000000040000000500000005000000060000
        000700000008000000090000000A0000000A0000000600000001}
      ItemLinks = <
        item
          Visible = True
          ItemName = 'btnMenu'
        end
        item
          Visible = True
          ItemName = 'btnPrint'
        end
        item
          Visible = True
          ItemName = 'btnForm'
        end
        item
          Visible = True
          ItemName = 'btnExport'
        end
        item
          Visible = True
          ItemName = 'btnShowFixedBand'
        end
        item
          Visible = True
          ItemName = 'btnGroupDate'
        end
        item
          Visible = True
          ItemName = 'btnClose'
        end>
      OneOnRow = True
      Row = 0
      UseOwnFont = False
      Visible = True
      WholeRow = False
    end
    object GroupDate: TdxBar
      Caption = 'Date Template'
      CaptionButtons = <>
      DockedDockingStyle = dsTop
      DockedLeft = 527
      DockedTop = 0
      FloatLeft = 935
      FloatTop = 8
      FloatClientWidth = 60
      FloatClientHeight = 84
      Glyph.Data = {
        36040000424D3604000000000000360000002800000010000000100000000100
        2000000000000004000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000B97B49FFB77946FFB677
        44FFB47542FFB37340FFB1713EFFB1703DFFAF6D3AFFAE6D39FF000000050000
        000C0000001100000014000000170000001A0000001DBD814EFFFFF4E9FFFEF3
        E8FFFEF3E6FFFEF2E6FFFEF1E5FFFEF1E3FFFDF0E1FFB1713DFF03263F7B054B
        7BE505548BFF045189FF054F87FF044E85FF044D84FFC18655FFFFF5EBFFCB8D
        5EFFC88B5BFFC58858FFC38555FFC08352FFFDF0E2FFB57642FF065080E3198D
        BDFF17B8E6FF15B2E2FF13AEDEFF12AADBFF1297C4FFC58C5CFFFFF7EDFFFFF6
        ECFFFFF6ECFFFFF5EBFFFFF5EAFFFEF2E5FFFCEEE0FFB87A48FF065F96FF37CA
        EFFF1DBDE9FF1AB8E6FF16B4E2FF14B0DFFF139FCDFFCB9262FFFFF7EFFFE0A4
        77FFDDA274FFDA9F71FFD89C6EFFD5996BFFFAEADBFFBD7F4DFF07649BFF48D1
        F3FF23C2EDFF1FBEEAFF1DBAE7FF1AB7E5FF18A9D5FFCF9869FFFFF9F1FFFFF8
        F1FFFFF8F0FFFEF5ECFFFCF0E5FFFAECDEFFF7E6D6FFC08553FF08699FFF59D8
        F6FF29C9F1FF27C4EEFF23C1ECFF22BFEAFF1EB4DFFFD39E70FFFFFAF4FFFFF9
        F2FFFEF5EEFFFCF1E7FFFAEDDFFFF6E5D4FFF4DFCBFFC58B5AFF096FA5FF72E0
        F9FF3AD0F5FF34CDF2FF2EC9F0FF29C5EEFF26BDE6FFD7A477FFFFFAF5FFFEF7
        EFFFFCF2EAFFFAEDE2FFF7E9DAFFCE9667FFCB9363FFC99160FF0A75ABFF8DE8
        FCFF4ED9F9FF48D6F7FF41D2F5FF39CFF3FF30C9EEFFDBAA7EFFFEF8F1FFFCF3
        EBFFFAEEE4FFF7E9DBFFF5E4D4FFD19C6EFFFFF9F3FFD5D0CAD50B7BB1FFA6EE
        FDFF63E0FCFF5EDDFBFF55DAF9FF4CD7F8FF43CFF2FFDFB085FFDEAE81FFDCAC
        7FFFDAA97DFFD9A77AFFD7A476FFD6A274FFD5D1CCD5171716170C83B6FFBBF3
        FEFF7BE7FEFF74E5FDFF69DCF5FF59C2DDFF4FB3D0FF48B6D3FF40BDDDFF38C4
        E6FF34CBEEFF085C92FF000000150000000000000000000000000E8ABDFFCFF7
        FFFF91ECFFFF77C8DBFF61A7BCFF5BA3B8FF58AAC2FF53B4CEFF4CBCD9FF43C5
        E4FF3BCDEFFF096196FF000000110000000000000000000000001091C3FFDFFA
        FFFFC0854AFFBD8045FFBB7C3FFFB8783AFFB57535FFB37132FFB16F2FFFAF6C
        2DFF43D1F1FF09669CFF0000000E0000000000000000000000001199CBFFEAFB
        FFFFE9C08FFFE6B986FFE2B37DFFDFAD74FFDCA76CFFD9A166FFD69D5FFFB979
        3CFF4DDFFEFF086CA1FF0000000B000000000000000000000000118DB8E083CD
        E7FFEEFCFFFFEAFAFDFFF0D5AFFFEFCB9DFFECC494FFE5C193FFA8EFFDFF94ED
        FEFF45AFD5FF096593E300000007000000000000000000000000094A5F701190
        BBE013A1D1FF129BCDFF7BBBC8FFFCE5C1FFF0DBB8FF7DA3A3FF0E85B9FF0D81
        B5FF0B6E9BE106364C7500000003000000000000000000000000}
      ItemLinks = <
        item
          Visible = True
          ItemName = 'btnDateTemplate'
        end
        item
          Visible = True
          ItemName = 'btnStartdate'
        end
        item
          Visible = True
          ItemName = 'btnEnddate'
        end
        item
          Visible = True
          ItemName = 'btnReload'
        end>
      OneOnRow = False
      Row = 0
      UseOwnFont = False
      Visible = False
      WholeRow = False
    end
    object btnMenu: TdxBarSubItem
      Caption = '&Menu'
      Category = 0
      KeyTip = 'M'
      Visible = ivNever
      LargeImageIndex = 39
      ItemLinks = <>
    end
    object btnExport: TdxBarLargeButton
      Caption = '&Export to Excel'
      Category = 0
      Hint = 'Export to Excel'
      KeyTip = 'E'
      Visible = ivAlways
      LargeImageIndex = 29
      OnClick = btnExportClick
    end
    object btnPrint: TdxBarSubItem
      Caption = '&Print'
      Category = 0
      KeyTip = 'P'
      Visible = ivNever
      LargeImageIndex = 28
      ItemLinks = <>
    end
    object btnGroupDate: TdxBarSubItem
      Caption = '&Group Date Format'
      Category = 0
      KeyTip = 'G'
      Visible = ivAlways
      LargeImageIndex = 30
      ItemLinks = <
        item
          Visible = True
          ItemName = 'btnGroupDateDefault'
        end
        item
          Visible = True
          ItemName = 'btnGroupDateMonth'
        end
        item
          Visible = True
          ItemName = 'btnGroupDateYear'
        end
        item
          Visible = True
          ItemName = 'btnGroupDateRelativeToday'
        end>
    end
    object btnGroupDateDefault: TdxBarButton
      Caption = '&1 Default'
      Category = 0
      Hint = '1 Default'
      Visible = ivAlways
      OnClick = btnGroupDateDefaultClick
    end
    object btnGroupDateRelativeToday: TdxBarButton
      Caption = '&4 Relative Today'
      Category = 0
      Hint = '4 Relative Today'
      Visible = ivAlways
      OnClick = btnGroupDateRelativeTodayClick
    end
    object btnGroupDateMonth: TdxBarButton
      Caption = '&2 Month'
      Category = 0
      Hint = '2 Month'
      Visible = ivAlways
      OnClick = btnGroupDateMonthClick
    end
    object btnGroupDateYear: TdxBarButton
      Caption = '&3 Year'
      Category = 0
      Hint = '3 Year'
      Visible = ivAlways
      OnClick = btnGroupDateYearClick
    end
    object btnShowFixedBand: TdxBarLargeButton
      Caption = '&Show Fixed Band'
      Category = 0
      Hint = 'Show Fixed Band'
      KeyTip = 'S'
      Visible = ivAlways
      LargeImageIndex = 31
      OnClick = btnShowFixedBandClick
    end
    object btnClose: TdxBarLargeButton
      Caption = 'C&lose'
      Category = 0
      Hint = 'Close'
      KeyTip = 'C'
      Visible = ivAlways
      LargeImageIndex = 4
      OnClick = btnCloseClick
    end
    object btnDateTemplate: TdxBarSubItem
      Caption = '&Date Template'
      Category = 0
      KeyTip = 'D'
      Visible = ivAlways
      LargeImageIndex = 33
      ItemLinks = <
        item
          Visible = True
          ItemName = 'btnFirstdate'
        end
        item
          Visible = True
          ItemName = 'btnOneMonth'
        end
        item
          Visible = True
          ItemName = 'btnNextMonth'
        end
        item
          Visible = True
          ItemName = 'btnPrevMonth'
        end
        item
          Visible = True
          ItemName = 'btnOneYear'
        end
        item
          Visible = True
          ItemName = 'btnOneDay'
        end
        item
          Visible = True
          ItemName = 'btnToday'
        end>
    end
    object btnFirstdate: TdxBarButton
      Caption = '&1 First Date of Year to Now'
      Category = 0
      Hint = '1 First Date of Year to Now'
      Visible = ivAlways
      ShortCut = 16433
      OnClick = btnFirstdateClick
    end
    object btnToday: TdxBarButton
      Caption = '&7 Today'
      Category = 0
      Hint = '7 Today'
      Visible = ivAlways
      ShortCut = 16439
      OnClick = btnTodayClick
    end
    object btnOneMonth: TdxBarButton
      Caption = '&2 One Month'
      Category = 0
      Hint = '2 One Month'
      Visible = ivAlways
      ShortCut = 16434
      OnClick = btnOneMonthClick
    end
    object btnNextMonth: TdxBarButton
      Caption = '&3 Next Month'
      Category = 0
      Hint = '3 Next Month'
      Visible = ivAlways
      ShortCut = 16435
      OnClick = btnNextMonthClick
    end
    object btnOneDay: TdxBarButton
      Caption = '&6 One Day'
      Category = 0
      Hint = '6 One Day'
      Visible = ivAlways
      ShortCut = 16438
      OnClick = btnOneDayClick
    end
    object btnPrevMonth: TdxBarButton
      Caption = '&4 Prev Month'
      Category = 0
      Hint = '4 Prev Month'
      Visible = ivAlways
      ShortCut = 16436
      OnClick = btnPrevMonthClick
    end
    object btnOneYear: TdxBarButton
      Caption = '&5 One Year'
      Category = 0
      Hint = '5 One Year'
      Visible = ivAlways
      ShortCut = 16437
      OnClick = btnOneYearClick
    end
    object btnEnddate: TdxBarDateCombo
      Caption = '&Enddate '
      Category = 0
      Hint = 'Enddate '
      Visible = ivAlways
      OnChange = btnEnddateChange
      Glyph.Data = {
        F6000000424DF600000000000000760000002800000010000000100000000100
        0400000000008000000000000000000000001000000000000000000000000000
        8000008000000080800080000000800080008080000080808000C0C0C0000000
        FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00DDDDDDDDDDDD
        DDDDDDDD00000000000DDDDD0FFFFFFFFF0D00000F0000000F0D0FFF0FFFFFFF
        FF0D0F000FFF11FFFF0D0FFF0FFF11FFFF0D0FF10FFFF11FFF0D0FF10FFFFF11
        FF0D0FF10FF11111FF0D0FF10FFFFFFFFF0D0FF104444444440D0FFF04444444
        440D044400000000000D04444444440DDDDD00000000000DDDDD}
      Width = 130
      Text = 'Fri 7/25/2014'
      DateOnStart = bdsCustom
    end
    object btnStartdate: TdxBarDateCombo
      Caption = 'St&artdate'
      Category = 0
      Hint = 'Startdate'
      KeyTip = 'A'
      Visible = ivAlways
      OnChange = btnStartdateChange
      Glyph.Data = {
        F6000000424DF600000000000000760000002800000010000000100000000100
        0400000000008000000000000000000000001000000000000000000000000000
        8000008000000080800080000000800080008080000080808000C0C0C0000000
        FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00DDDDDDDDDDDD
        DDDDDDDD00000000000DDDDD0FFFFFFFFF0D00000F0000000F0D0FFF0FFFFFFF
        FF0D0F000FFF11FFFF0D0FFF0FFF11FFFF0D0FF10FFFF11FFF0D0FF10FFFFF11
        FF0D0FF10FF11111FF0D0FF10FFFFFFFFF0D0FF104444444440D0FFF04444444
        440D044400000000000D04444444440DDDDD00000000000DDDDD}
      Width = 130
      Text = 'Fri 7/25/2014'
      DateOnStart = bdsCustom
    end
    object btnReload: TdxBarLargeButton
      Caption = '&Reload'
      Category = 0
      Hint = 'Reload'
      Visible = ivAlways
      LargeImageIndex = 34
      OnClick = btnReloadClick
    end
    object btnForm: TdxBarLargeButton
      Caption = '&Form'
      Category = 0
      Hint = 'Form'
      KeyTip = 'F'
      Visible = ivNever
      LargeImageIndex = 38
      OnClick = btnFormClick
    end
    object dxBarButton1: TdxBarButton
      Caption = '&1 Setting Sesi'
      Category = 0
      Hint = '1 Setting Sesi'
      Visible = ivAlways
    end
  end
  object PopupMenu: TPopupMenu
    MenuAnimation = [maTopToBottom]
    Left = 448
    Top = 56
    object ppFind: TMenuItem
      Caption = '&Find'
      OnClick = ppFindClick
    end
    object ppShowALL: TMenuItem
      Caption = '&Show All Data'
      OnClick = ppShowALLClick
    end
  end
  object Q_MASTER: TZQuery
    Connection = MenuLogin.ZConnection
    AfterRefresh = Q_MASTERAfterRefresh
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from s_user')
    Params = <>
    Left = 184
    Top = 72
  end
  object DS_MASTER: TDataSource
    DataSet = Q_MASTER
    Left = 184
    Top = 112
  end
  object cxGridPopupMenu1: TcxGridPopupMenu
    Grid = GRID_MASTER
    PopupMenus = <>
    Left = 184
    Top = 152
  end
  object ActionList1: TActionList
    Left = 448
    Top = 104
    object actRefresh: TAction
      Caption = 'actRefresh'
      ShortCut = 116
      OnExecute = actRefreshExecute
    end
    object actForm: TAction
      Caption = 'actForm'
      ShortCut = 117
      OnExecute = actFormExecute
    end
    object actTable: TAction
      Caption = 'actTable'
      ShortCut = 118
      OnExecute = actTableExecute
    end
    object actAdd: TAction
      Caption = 'actAdd'
      ShortCut = 16462
      OnExecute = actAddExecute
    end
    object actEdit: TAction
      Caption = 'actEdit'
      ShortCut = 16453
      OnExecute = actEditExecute
    end
    object actSave: TAction
      Caption = 'actSave'
      ShortCut = 16467
      OnExecute = actSaveExecute
    end
  end
  object cxGridPopupMenu2: TcxGridPopupMenu
    Grid = GRID_DETAIL1
    PopupMenus = <>
    Left = 40
    Top = 160
  end
  object DS_DETAIL1: TDataSource
    DataSet = Q_DETAIL1
    Left = 40
    Top = 120
  end
  object Q_DETAIL1: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_DETAIL1BeforeEdit
    BeforePost = Q_DETAIL1BeforePost
    AfterPost = Q_DETAIL1AfterPost
    AfterCancel = Q_DETAIL1AfterCancel
    AfterDelete = Q_DETAIL1AfterDelete
    OnNewRecord = Q_DETAIL1NewRecord
    SQL.Strings = (
      'select * from s_usermodule')
    Params = <>
    MasterFields = 'id_user'
    MasterSource = DS_MASTER
    LinkedFields = 'id_user'
    Left = 40
    Top = 80
  end
  object DS_MODULE: TDataSource
    DataSet = Q_MODULE
    Left = 112
    Top = 400
  end
  object Q_MODULE: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from s_module')
    Params = <>
    Left = 112
    Top = 360
  end
  object PopupMenu1: TPopupMenu
    MenuAnimation = [maTopToBottom]
    Left = 376
    Top = 64
    object ppFind1: TMenuItem
      Caption = '&Find'
      OnClick = ppFind1Click
    end
    object ppShowALL1: TMenuItem
      Caption = '&Show All Data'
      OnClick = ppShowALL1Click
    end
  end
end
