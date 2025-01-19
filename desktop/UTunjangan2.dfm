object FrmTunjangan2: TFrmTunjangan2
  Left = 0
  Top = 0
  Caption = 'CaptionForm'
  ClientHeight = 501
  ClientWidth = 835
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
  object PageControl: TcxPageControl
    Left = 0
    Top = 41
    Width = 835
    Height = 460
    Align = alClient
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 0
    Properties.ActivePage = TabMaster
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 456
    ClientRectLeft = 4
    ClientRectRight = 831
    ClientRectTop = 27
    object TabMaster: TcxTabSheet
      Caption = 'Master (F2)'
      ImageIndex = 1
      object GRID_MASTER: TcxGrid
        Left = 0
        Top = 0
        Width = 827
        Height = 211
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
          Navigator.Buttons.First.Hint = 'First Record'
          Navigator.Buttons.PriorPage.Visible = False
          Navigator.Buttons.Prior.Hint = 'Prev Record'
          Navigator.Buttons.Next.Hint = 'Next Record'
          Navigator.Buttons.NextPage.Visible = False
          Navigator.Buttons.Last.Hint = 'Last Record'
          Navigator.Buttons.Insert.Hint = 'Add Record'
          Navigator.Buttons.Delete.Hint = 'Delete Record'
          Navigator.Buttons.Edit.Hint = 'Edit Record'
          Navigator.Buttons.Post.Hint = 'Save Record'
          Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
          Navigator.Buttons.Refresh.Hint = 'Refresh Data'
          Navigator.Buttons.SaveBookmark.Visible = False
          Navigator.Buttons.GotoBookmark.Visible = False
          Navigator.Buttons.Filter.Hint = 'Filter Record'
          Navigator.InfoPanel.Visible = True
          Navigator.Visible = True
          DataController.DataSource = DS_MASTER
          DataController.Filter.AutoDataSetFilter = True
          DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
          DataController.Summary.DefaultGroupSummaryItems = <
            item
              Format = '#,##0.###0'
              Kind = skSum
              Position = spFooter
            end
            item
              Format = '#,##0'
              Kind = skSum
              Position = spFooter
            end
            item
              Format = '#,##0.#0'
              Kind = skSum
              Position = spFooter
            end>
          DataController.Summary.FooterSummaryItems = <
            item
              Format = '#,##0.###0'
              Kind = skSum
            end
            item
              Format = '#,##0'
              Kind = skSum
            end
            item
              Format = '#,##0.#0'
              Kind = skSum
            end>
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
          OptionsSelection.MultiSelect = True
          OptionsSelection.CellMultiSelect = True
          OptionsSelection.InvertSelect = False
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
        end
        object GRID_MASTERLevel1: TcxGridLevel
          GridView = MASTER
        end
      end
      object PageDetail: TcxPageControl
        Left = 0
        Top = 218
        Width = 827
        Height = 211
        Align = alBottom
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        TabOrder = 1
        Properties.ActivePage = TabDetail1
        Properties.CustomButtons.Buttons = <>
        ClientRectBottom = 207
        ClientRectLeft = 4
        ClientRectRight = 823
        ClientRectTop = 27
        object TabDetail1: TcxTabSheet
          Caption = 'Master (F2)'
          ImageIndex = 1
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+1 )'
          object GRID_DETAIL1: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
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
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL1
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL1Level2: TcxGridLevel
              GridView = DETAIL1
            end
          end
        end
        object TabDetail2: TcxTabSheet
          Caption = 'TabDetail2'
          ImageIndex = 1
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+2 )'
          object GRID_DETAIL2: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL2: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL2
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL2Level1: TcxGridLevel
              GridView = DETAIL2
            end
          end
        end
        object TabDetail3: TcxTabSheet
          Caption = 'TabDetail3'
          ImageIndex = 2
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+3 )'
          object GRID_DETAIL3: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL3: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL3
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL3Level1: TcxGridLevel
              GridView = DETAIL3
            end
          end
        end
        object TabDetail4: TcxTabSheet
          Caption = 'TabDetail4'
          ImageIndex = 3
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+4 )'
          object GRID_DETAIL4: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL4: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL4
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL4Level1: TcxGridLevel
              GridView = DETAIL4
            end
          end
        end
        object TabDetail5: TcxTabSheet
          Caption = 'TabDetail5'
          ImageIndex = 4
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+5 )'
          object GRID_DETAIL5: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL5: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL5
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL5Level1: TcxGridLevel
              GridView = DETAIL5
            end
          end
        end
        object TabDetail6: TcxTabSheet
          Caption = 'TabDetail6'
          ImageIndex = 5
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+6 )'
          object GRID_DETAIL6: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL6: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL6
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL6Level1: TcxGridLevel
              GridView = DETAIL6
            end
          end
        end
        object TabDetail7: TcxTabSheet
          Caption = 'TabDetail7'
          ImageIndex = 6
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+7 )'
          object GRID_DETAIL7: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL7: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL7
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL7Level1: TcxGridLevel
              GridView = DETAIL7
            end
          end
        end
        object TabDetail8: TcxTabSheet
          Caption = 'TabDetail8'
          ImageIndex = 7
          object GRID_DETAIL8: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL8: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL8
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL8Level1: TcxGridLevel
              GridView = DETAIL8
            end
          end
        end
        object TabDetail9: TcxTabSheet
          Caption = 'TabDetail9'
          ImageIndex = 8
          object GRID_DETAIL9: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL9: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL9
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL9Level1: TcxGridLevel
              GridView = DETAIL9
            end
          end
        end
        object TabDetail10: TcxTabSheet
          Caption = 'TabDetail10'
          ImageIndex = 9
          object GRID_DETAIL10: TcxGrid
            Left = 0
            Top = 0
            Width = 819
            Height = 180
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL10: TcxGridDBBandedTableView
              Navigator.Buttons.CustomButtons = <>
              Navigator.Buttons.First.Hint = 'First Record'
              Navigator.Buttons.PriorPage.Visible = False
              Navigator.Buttons.Prior.Hint = 'Prev Record'
              Navigator.Buttons.Next.Hint = 'Next Record'
              Navigator.Buttons.NextPage.Visible = False
              Navigator.Buttons.Last.Hint = 'Last Record'
              Navigator.Buttons.Insert.Hint = 'Add Record'
              Navigator.Buttons.Delete.Hint = 'Delete Record'
              Navigator.Buttons.Edit.Hint = 'Edit Record'
              Navigator.Buttons.Post.Hint = 'Save Record'
              Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
              Navigator.Buttons.Refresh.Hint = 'Refresh Data'
              Navigator.Buttons.SaveBookmark.Visible = False
              Navigator.Buttons.GotoBookmark.Visible = False
              Navigator.Buttons.Filter.Hint = 'Filter Record'
              Navigator.InfoPanel.Visible = True
              Navigator.Visible = True
              DataController.DataSource = DS_DETAIL10
              DataController.Filter.AutoDataSetFilter = True
              DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
              DataController.Summary.DefaultGroupSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                  Position = spFooter
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                  Position = spFooter
                end>
              DataController.Summary.FooterSummaryItems = <
                item
                  Format = '#,##0.###0'
                  Kind = skSum
                end
                item
                  Format = '#,##0'
                  Kind = skSum
                end
                item
                  Format = '#,##0.#0'
                  Kind = skSum
                end>
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
              OptionsSelection.MultiSelect = True
              OptionsSelection.CellMultiSelect = True
              OptionsSelection.InvertSelect = False
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
            end
            object GRID_DETAIL10Level1: TcxGridLevel
              GridView = DETAIL10
            end
          end
        end
      end
      object cxSplitter1: TcxSplitter
        Left = 0
        Top = 211
        Width = 827
        Height = 7
        AlignSplitter = salBottom
        Control = PageDetail
      end
    end
  end
  object txtID: TEdit
    Left = 352
    Top = 2
    Width = 121
    Height = 21
    TabOrder = 1
    Text = 'txtID'
    Visible = False
  end
  object txtModuleName: TEdit
    Left = 496
    Top = 2
    Width = 121
    Height = 21
    TabOrder = 2
    Text = 'Edit1'
    Visible = False
  end
  object Panel2: TPanel
    Left = 0
    Top = 0
    Width = 835
    Height = 41
    Align = alTop
    BevelOuter = bvNone
    Color = 65021
    ParentBackground = False
    TabOrder = 3
    object LblJudul: TLabel
      AlignWithMargins = True
      Left = 10
      Top = 7
      Width = 281
      Height = 31
      Margins.Left = 10
      Margins.Top = 7
      Align = alLeft
      AutoSize = False
      Caption = 'LblJudul'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -17
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
      Visible = False
    end
    object LblEnddate: TLabel
      AlignWithMargins = True
      Left = 234
      Top = 13
      Width = 40
      Height = 25
      Margins.Top = 13
      Margins.Right = 0
      Align = alRight
      Caption = '&Enddate'
      ExplicitHeight = 13
    end
    object LblStartdate: TLabel
      AlignWithMargins = True
      Left = 29
      Top = 13
      Width = 46
      Height = 25
      Margins.Top = 13
      Margins.Right = 0
      Align = alRight
      Caption = '&Startdate'
      ExplicitHeight = 13
    end
    object BtnClose: TcxButton
      AlignWithMargins = True
      Left = 761
      Top = 3
      Width = 71
      Height = 35
      Align = alRight
      Caption = 'C&lose'
      DropDownMenu = ItemMenu
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        000000000000C40E0000C40E0000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D9000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000F10000006F0000
        006D00000067000000650000006D0000006D0000006D0000006D0000006D0000
        006D0000006D0000006B000000630000006B0000006D000000AC000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E50000000000000000000000110000
        0016000000000000000000000000000000000000000000000000000000000000
        00000000002B000000000000000000000063000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E70000000000000026000000D5000000E2000000300000
        000000000000000000000000000000000000000000000000007E000000F90000
        007F000000040000006B000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E600000000000000A6000000FF000000FF000000DC0000002F000000000000
        000000000000000000000000007D000000FF000000FF000000FF0000002E0000
        0063000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000E7000000000000
        002B000000D3000000FF000000FF000000DC0000003000000000000000000000
        007D000000FF000000FF000000FF0000008A000000040000006A000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E70000000200000000000000270000
        00D4000000FF000000FF000000DC0000003100000076000000FF000000FF0000
        00FF0000008800000000000000000000006D000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E700000002000000000000000000000027000000D30000
        00FF000000FF000000ED000000FA000000FF000000FF00000088000000020000
        0000000000000000006D000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E70000000200000000000000000000000000000025000000CA000000FF0000
        00FF000000FF000000F800000081000000000000000000000000000000000000
        006D000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000E7000000020000
        000000000000000000000000000000000091000000FF000000FF000000FF0000
        00EF00000033000000000000000000000000000000000000006D000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E70000000200000000000000000000
        00000000007D000000FC000000FF000000FF000000FF000000FF000000DA0000
        002D0000000000000000000000000000006D000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E70000000200000000000000000000007C000000FE0000
        00FF000000FF00000099000000CA000000FF000000FF000000DB000000310000
        0000000000000000006D000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E700000001000000000000007C000000FF000000FF000000FF000000880000
        000000000023000000D6000000FF000000FF000000DD0000002D000000000000
        006D000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000E7000000000000
        007C000000FF000000FF000000FF000000880000000100000000000000000000
        0029000000D3000000FF000000FF000000E20000001C00000065000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E60000000000000077000000FF0000
        00FF000000890000000000000000000000000000000000000000000000240000
        00D5000000FF000000DA0000001F00000066000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E700000000000000000000007800000088000000000000
        000000000000000000000000000000000000000000000000002A000000A90000
        0029000000000000006D000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E7000000040000000100000000000000000000000000000002000000020000
        0002000000020000000200000002000000000000000000000000000000020000
        006E000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000FD000000E70000
        00E7000000E6000000E7000000E7000000E7000000E7000000E7000000E70000
        00E7000000E7000000E7000000E6000000E7000000E7000000F1000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000DE000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00AC000000D1000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D10000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 0
      OnClick = BtnCloseClick
    end
    object BtnPrint: TcxButton
      AlignWithMargins = True
      Left = 670
      Top = 3
      Width = 85
      Height = 35
      Align = alRight
      Caption = '&Print'
      DropDownMenu = ItemPrint
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        000000000000C40E0000C40E0000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000004D000000F3000000F3000000F30000
        00F3000000F3000000F3000000F3000000F3000000F3000000F3000000F30000
        00C4000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000052000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000D1000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0051000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000CE0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000004D000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000CD00000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0097000000CE000000CE000000CE000000DE000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00F6000000CE000000CE000000CE000000C50000000000000000000000000000
        00000000000000000000000000000000000000000000000000C2000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FC00000000000000000000000000000000000000000000
        0000000000000000000000000000000000BB000000FF000000E6000000830000
        007E000000710000007100000071000000710000007100000071000000710000
        00710000007100000071000000710000007500000083000000AA000000FF0000
        00F3000000000000000000000000000000000000000000000000000000000000
        000000000000000000BB000000FF000000C8000000000000001B0000007B0000
        007B0000007B0000007B0000007B0000007B0000007B0000007B0000007B0000
        007B0000007B000000600000000000000042000000FF000000F3000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00BB000000FF000000CC000000000000005A000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00E5000000000000004E000000FF000000F30000000000000000000000000000
        00000000000000000000000000000000000000000000000000BB000000FF0000
        00CC000000000000003F000000C7000000C7000000C7000000C7000000C70000
        00C7000000C7000000C7000000C7000000C7000000C7000000A0000000000000
        004E000000FF000000F300000000000000000000000000000000000000000000
        0000000000000000000000000000000000BB000000FF000000CC000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000004F000000FF0000
        00F3000000000000000000000000000000000000000000000000000000000000
        000000000000000000BB000000FF000000C90000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000044000000FF000000F3000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00BB000000FF000000E100000069000000690000006900000069000000690000
        0069000000690000006900000069000000690000006900000069000000690000
        00690000006900000098000000FF000000F30000000000000000000000000000
        00000000000000000000000000000000000000000000000000C0000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FA00000000000000000000000000000000000000000000
        0000000000000000000000000000000000A6000000E2000000E2000000E20000
        00DC000000D1000000D8000000E2000000E2000000E2000000E2000000E20000
        00E2000000E2000000E0000000D1000000D4000000E2000000E2000000E20000
        00D7000000000000000000000000000000000000000000000000000000000000
        0000000000000000000300000005000000050000000500000037000000A20000
        005B000000050000000500000005000000050000000500000005000000050000
        0013000000A20000008600000005000000050000000500000004000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000053000000FF00000092000000000000
        0000000000000000000000000000000000000000000000000015000000FF0000
        00DC000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000051000000FF000000890000000000000000000000000000
        000000000000000000000000000000000011000000FF000000D2000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0052000000FF000000EB000000CF000000CF000000CF000000CF000000CF0000
        00CF000000CF000000D4000000FF000000D10000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000004F000000F80000
        00FC000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000F8000000C800000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 1
    end
    object BtnMenu: TcxButton
      AlignWithMargins = True
      Left = 575
      Top = 3
      Width = 89
      Height = 35
      Align = alRight
      Caption = '&Menu'
      DropDownMenu = ItemMenu
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        000000000000C40E0000C40E0000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000000000006E0000
        0077000000760000007600000076000000760000007600000076000000760000
        0076000000760000007600000076000000760000007600000076000000770000
        006E000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000F1000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000F1000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000FB000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FB0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000B2000000BF000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BF000000B200000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000B2000000BF000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BF000000B2000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000FB000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FB0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000F1000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000F100000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000370000
        003C0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003C0000
        0037000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000370000003C0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003C00000037000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000F1000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000F10000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000FB000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FB00000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000B20000
        00BF000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BF0000
        00B2000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000B2000000BF000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BF000000B20000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000FB000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FB00000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000F10000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00F1000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000006E00000077000000760000
        0076000000760000007600000076000000760000007600000076000000760000
        007600000076000000760000007600000076000000770000006E000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 2
    end
    object BtnDateTemplate: TcxButton
      AlignWithMargins = True
      Left = 433
      Top = 3
      Width = 136
      Height = 35
      Align = alRight
      Caption = '&Date Template'
      DropDownMenu = ItemDate
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        000000000000C40E0000C40E0000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000D30000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000D30000000000000000000000000000
        000000000000000000000000000000000000000000CF000000E90000005B0000
        004A0000004A0000004A0000005A0000004F0000004A0000004A000000550000
        00550000004A0000004A0000004F0000005A0000004A0000004A0000004A0000
        005B000000E9000000CF00000000000000000000000000000000000000000000
        00000000000000000000000000D4000000D6000000000000007C0000007E0000
        007E00000001000000590000007E0000007E00000028000000280000007E0000
        007E00000059000000010000007E0000007E0000007C00000000000000D60000
        00D4000000000000000000000000000000000000000000000000000000000000
        0000000000D3000000D50000001A000000FF000000FF000000FF0000001F0000
        00CA000000FF000000FF0000006B0000006B000000FF000000FF000000CA0000
        001F000000FF000000FF000000FF0000001A000000D5000000D3000000000000
        0000000000000000000000000000000000000000000000000000000000D30000
        00D500000018000000FF000000FF000000FF0000001D000000C0000000FF0000
        00FF0000006500000065000000FF000000FF000000C00000001D000000FF0000
        00FF000000FF00000018000000D5000000D30000000000000000000000000000
        000000000000000000000000000000000000000000D3000000DB000000030000
        001D0000001D0000001D00000003000000160000001D0000001D0000000C0000
        000C0000001D0000001D00000016000000030000001D0000001D0000001D0000
        0003000000DB000000D300000000000000000000000000000000000000000000
        00000000000000000000000000D3000000D700000012000000BB000000BD0000
        00BD000000160000008C000000BD000000BD0000004A0000004A000000BD0000
        00BD0000008C00000016000000BD000000BD000000BB00000012000000D70000
        00D3000000000000000000000000000000000000000000000000000000000000
        0000000000D3000000D40000001A000000FF000000FF000000FF0000001F0000
        00CB000000FF000000FF0000006B0000006B000000FF000000FF000000CB0000
        001F000000FF000000FF000000FF0000001A000000D4000000D3000000000000
        0000000000000000000000000000000000000000000000000000000000D30000
        00D600000015000000E0000000E3000000E30000001A000000A5000000DF0000
        00DF0000005700000057000000DF000000DF000000A500000019000000DF0000
        00DF000000DC00000015000000D6000000D30000000000000000000000000000
        000000000000000000000000000000000000000000D3000000DC000000000000
        00040000000400000004000000010000000F0000001400000014000000080000
        000800000014000000140000000E000000020000001400000014000000130000
        0002000000DB000000D300000000000000000000000000000000000000000000
        00000000000000000000000000D3000000DC0000000000000000000000000000
        000000000000000000B9000000EE000000EE0000005D0000005D000000EE0000
        00EE000000B00000001B000000EE000000EE000000EB00000016000000D50000
        00D3000000000000000000000000000000000000000000000000000000000000
        0000000000D3000000DC00000000000000000000000000000000000000000000
        00D4000000FF000000FF0000006B0000006B000000FF000000FF000000CA0000
        001F000000FF000000FF000000FF0000001A000000D5000000D3000000000000
        0000000000000000000000000000000000000000000000000000000000D30000
        00DA000000000000000000000000000000000000000000000080000000A80000
        00A80000003B0000003B000000A8000000A80000007A00000009000000A80000
        00A8000000A600000005000000D5000000D30000000000000000000000000000
        000000000000000000000000000000000000000000D1000000E4000000390000
        00390000003900000039000000390000002C0000002900000029000000320000
        003200000029000000290000002D000000370000002900000029000000290000
        0037000000E4000000D100000000000000000000000000000000000000000000
        00000000000000000000000000C9000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00C9000000000000000000000000000000000000000000000000000000000000
        0000000000C9000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000C9000000000000
        0000000000000000000000000000000000000000000000000000000000CA0000
        00FF000000FF000000FD0000009900000086000000F4000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000F60000008C0000
        0094000000FC000000FF000000FF000000CA0000000000000000000000000000
        000000000000000000000000000000000000000000C7000000FC000000FD0000
        00EF0000000300000000000000D7000000FD000000FC000000FC000000FC0000
        00FC000000FC000000FC000000FD000000D70000000000000003000000EF0000
        00FD000000FC000000C700000000000000000000000000000000000000000000
        00000000000000000000000000180000001E0000003E000000EB000000020000
        0000000000E0000000590000001E0000001E0000001E0000001E0000001E0000
        001E00000059000000DF0000000000000002000000EC0000003E0000001E0000
        0018000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000001A000000FF0000007D00000064000000FF0000
        0038000000000000000000000000000000000000000000000000000000380000
        00FF0000006B00000076000000FF0000001A0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000060000008E000000D6000000D8000000A90000000E000000000000
        0000000000000000000000000000000000000000000E000000A1000000D80000
        00D7000000950000000600000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000}
      TabOrder = 3
    end
    object BtnEnddate: TcxDateEdit
      AlignWithMargins = True
      Left = 277
      Top = 7
      Hint = 'Enddate'
      Margins.Top = 7
      Margins.Bottom = 7
      Align = alRight
      RepositoryItem = MenuLogin.RepDate
      EditValue = 41905d
      ParentFont = False
      ParentShowHint = False
      Properties.DisplayFormat = 'DDD, dd/mm/yyyy'
      Properties.OnChange = BtnEnddatePropertiesChange
      ShowHint = True
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -13
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 4
      OnKeyDown = BtnEnddateKeyDown
      Width = 150
    end
    object BtnStartdate: TcxDateEdit
      AlignWithMargins = True
      Left = 78
      Top = 7
      Hint = 'Startdate'
      Margins.Top = 7
      Margins.Bottom = 7
      Align = alRight
      RepositoryItem = MenuLogin.RepDate
      EditValue = 41905d
      ParentFont = False
      ParentShowHint = False
      Properties.DisplayFormat = 'DDD, dd/mm/yyyy'
      Properties.OnChange = BtnStartdatePropertiesChange
      ShowHint = True
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -13
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 5
      OnKeyDown = BtnStartdateKeyDown
      Width = 150
    end
  end
  object Layout: TdxLayoutControl
    Left = 432
    Top = 94
    Width = 41
    Height = 26
    TabOrder = 4
    Visible = False
    LayoutLookAndFeel = dxLayoutCxLookAndFeel1
    object dxLayoutGroup1: TdxLayoutGroup
      AlignHorz = ahLeft
      AlignVert = avTop
      ButtonOptions.Buttons = <>
      Hidden = True
      ShowBorder = False
      Index = -1
    end
  end
  object Button1: TButton
    Left = 433
    Top = 144
    Width = 75
    Height = 25
    Caption = 'Button1'
    TabOrder = 5
    Visible = False
    OnClick = Button1Click
  end
  object Edit1: TEdit
    Left = 387
    Top = 80
    Width = 121
    Height = 21
    TabOrder = 6
    Text = 'employee data'
    Visible = False
  end
  object Q_MASTER: TZQuery
    Connection = MenuLogin.ZConnection
    AfterRefresh = Q_MASTERAfterRefresh
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from t_loan')
    Params = <>
    Left = 104
  end
  object DS_MASTER: TDataSource
    DataSet = Q_MASTER
    Left = 136
  end
  object cxGridPopupMenu1: TcxGridPopupMenu
    Grid = GRID_MASTER
    PopupMenus = <>
    Left = 168
  end
  object ActionList1: TActionList
    Left = 280
    object actRefresh: TAction
      Caption = '&Refresh Data'
      ShortCut = 116
      OnExecute = actRefreshExecute
    end
    object actAdd: TAction
      Caption = '&Add Record'
      ShortCut = 16462
      OnExecute = actAddExecute
    end
    object actEdit: TAction
      Caption = 'E&dit Record'
      ShortCut = 16453
      OnExecute = actEditExecute
    end
    object actSave: TAction
      Caption = 'actSave'
      ShortCut = 16467
      OnExecute = actSaveExecute
    end
    object actDelete: TAction
      Caption = 'De&lete Record'
      ShortCut = 16452
      OnExecute = actDeleteExecute
    end
    object actcancel: TAction
      Caption = 'actcancel'
      ShortCut = 16474
      OnExecute = actcancelExecute
    end
    object actFirst: TAction
      Caption = 'actFirst'
      ShortCut = 16433
      OnExecute = MenuItem1Click
    end
    object actOneMonth: TAction
      Caption = 'actOneMonth'
      ShortCut = 16434
      OnExecute = OneMonth1Click
    end
    object actNextMonth: TAction
      Caption = 'actNextMonth'
      ShortCut = 16435
      OnExecute = NextMonth1Click
    end
    object actPrevMonth: TAction
      Caption = 'actPrevMonth'
      ShortCut = 16436
      OnExecute = PrevMonth1Click
    end
    object actOneYear: TAction
      Caption = 'actOneYear'
      ShortCut = 16437
      OnExecute = OneYear1Click
    end
    object actOneDay: TAction
      Caption = 'actOneDay'
      ShortCut = 16438
      OnExecute = OneDay1Click
    end
    object actToday: TAction
      Caption = 'actToday'
      ShortCut = 16439
      OnExecute = oday1Click
    end
    object actStartdate: TAction
      Caption = 'actStartdate'
      ShortCut = 32851
      OnExecute = actStartdateExecute
    end
    object actEnddate: TAction
      Caption = 'actEnddate'
      ShortCut = 32837
      OnExecute = actEnddateExecute
    end
    object actTabMaster: TAction
      Caption = 'actTabMaster'
      ShortCut = 113
      OnExecute = actTabMasterExecute
    end
    object actTabDetail1: TAction
      Caption = 'actTabDetail1'
      ShortCut = 49201
      OnExecute = actTabDetail1Execute
    end
    object actLookup: TAction
      Caption = 'actLookup'
      ShortCut = 118
      OnExecute = actLookupExecute
    end
    object actTabDetail2: TAction
      Caption = 'actTabDetail2'
      ShortCut = 49202
      OnExecute = actTabDetail2Execute
    end
  end
  object PopupMenu: TPopupMenu
    Images = MenuLogin.SmallImage
    MenuAnimation = [maTopToBottom]
    OnPopup = PopupMenuPopup
    Left = 312
    object ppGroup: TMenuItem
      Caption = '&Group Date Format'
      ImageIndex = 11
      object ppGroupDefault: TMenuItem
        Caption = '&Default'
        Hint = 'Group Date Default'
        OnClick = ppGroupDefaultClick
      end
      object ppGroupMonth: TMenuItem
        Caption = '&Month'
        Hint = 'Group Date Month'
        OnClick = ppGroupMonthClick
      end
      object ppGroupYear: TMenuItem
        Caption = '&Year'
        Hint = 'Group Date Year'
        OnClick = ppGroupYearClick
      end
      object RelativeToday1: TMenuItem
        Caption = '&Relative Today'
        Hint = 'Group Date Relative Today'
        OnClick = RelativeToday1Click
      end
    end
    object N1: TMenuItem
      Caption = '-'
    end
    object ppExport: TMenuItem
      Caption = '&Export to Excel'
      Hint = 'Export to Excel'
      ImageIndex = 7
      ShortCut = 16496
      OnClick = ppExportClick
    end
    object ppFreeze: TMenuItem
      Caption = '&Show Freeze Column'
      Hint = 'Show Freeze Column'
      ImageIndex = 10
      ShortCut = 16497
      OnClick = ppFreezeClick
    end
    object ImportFromExcel1: TMenuItem
      Caption = '&Import From Excel'
      ImageIndex = 6
      ShortCut = 16498
      OnClick = ImportFromExcel1Click
    end
    object ppFind: TMenuItem
      Caption = '&Find'
      Hint = 'Find'
      ImageIndex = 8
      ShortCut = 16454
      OnClick = ppFindClick
    end
    object ppShowALL: TMenuItem
      Caption = 'S&how All Data'
      Hint = 'Show All Data'
      ImageIndex = 16
      ShortCut = 16455
      OnClick = ppShowALLClick
    end
    object N2: TMenuItem
      Caption = '-'
    end
    object ppAdd: TMenuItem
      Action = actAdd
      ImageIndex = 0
    end
    object ppEdit: TMenuItem
      Action = actEdit
      ImageIndex = 3
    end
    object ppDelete: TMenuItem
      Action = actDelete
      ImageIndex = 2
    end
    object ppRefresh: TMenuItem
      Action = actRefresh
      ImageIndex = 14
    end
  end
  object ItemMenu: TPopupMenu
    Left = 344
    object N1ProsesTunjangan1: TMenuItem
      Caption = '&1 Proses Tunjangan'
      OnClick = N1ProsesTunjangan1Click
    end
  end
  object ItemPrint: TPopupMenu
    Left = 376
    object N1PrintSlipTunjangan1: TMenuItem
      Caption = '&1 Print Slip Tunjangan'
      OnClick = N1PrintSlipTunjangan1Click
    end
  end
  object ItemDate: TPopupMenu
    Left = 408
    object MenuItem1: TMenuItem
      Caption = '&First Date of Year to Now'
      ShortCut = 16433
      OnClick = MenuItem1Click
    end
    object OneMonth1: TMenuItem
      Caption = '&One Month'
      ShortCut = 16434
      OnClick = OneMonth1Click
    end
    object NextMonth1: TMenuItem
      Caption = '&Next Month'
      ShortCut = 16435
      OnClick = NextMonth1Click
    end
    object PrevMonth1: TMenuItem
      Caption = '&Prev Month'
      ShortCut = 16436
      OnClick = PrevMonth1Click
    end
    object OneYear1: TMenuItem
      Caption = 'On&e Year'
      ShortCut = 16437
      OnClick = OneYear1Click
    end
    object OneDay1: TMenuItem
      Caption = 'One &Day'
      ShortCut = 16438
      OnClick = OneDay1Click
    end
    object oday1: TMenuItem
      Caption = '&Today'
      ShortCut = 16439
      OnClick = oday1Click
    end
  end
  object FR_Report: TfrxReport
    Version = '6.4.9'
    DotMatrixReport = False
    IniFile = '\Software\Fast Reports'
    PreviewOptions.Buttons = [pbPrint, pbLoad, pbSave, pbExport, pbZoom, pbFind, pbOutline, pbPageSetup, pbTools, pbEdit, pbNavigator, pbExportQuick]
    PreviewOptions.Zoom = 1.000000000000000000
    PrintOptions.Printer = 'Default'
    PrintOptions.PrintOnSheet = 0
    ReportOptions.CreateDate = 45305.440182002300000000
    ReportOptions.LastChange = 45305.440182002300000000
    ScriptLanguage = 'PascalScript'
    ScriptText.Strings = (
      ''
      'begin'
      ''
      'end.')
    Left = 168
    Top = 40
    Datasets = <
      item
        DataSet = frxDSLaporan
        DataSetName = 'master'
      end>
    Variables = <>
    Style = <>
    object Data: TfrxDataPage
      Height = 1000.000000000000000000
      Width = 1000.000000000000000000
    end
    object Page1: TfrxReportPage
      PaperWidth = 210.000000000000000000
      PaperHeight = 297.000000000000000000
      PaperSize = 9
      LeftMargin = 5.000000000000000000
      RightMargin = 5.000000000000000000
      TopMargin = 10.000000000000000000
      BottomMargin = 10.000000000000000000
      Frame.Typ = []
      MirrorMode = []
      object MasterData1: TfrxMasterData
        FillType = ftBrush
        Frame.Typ = []
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Tahoma'
        Font.Style = []
        Height = 34.015748040000000000
        ParentFont = False
        Top = 147.401670000000000000
        Width = 755.906000000000000000
        DataSet = frxDSLaporan
        DataSetName = 'master'
        KeepChild = True
        KeepFooter = True
        RowCount = 0
        Stretched = True
        object masterday1: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 30.236240000000000000
          Width = 34.015745590000000000
          Height = 17.007874020000000000
          DataField = 'day1'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day1"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo12: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 26.456710000000000000
          Top = 17.007874015748000000
          Width = 37.795275590000000000
          Height = 17.007874020000000000
          DataField = 'overtimehour1'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour1"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo13: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Width = 26.456685590000000000
          Height = 34.015748030000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            '[Line]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo16: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 68.031540000000000000
          Width = 34.015745590000000000
          Height = 17.007874015748000000
          DataField = 'day2'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day2"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo17: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 64.252010000000000000
          Top = 17.007874015748000000
          Width = 37.795275590000000000
          Height = 17.007874020000000000
          DataField = 'overtimehour2'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour2"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo18: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 105.826840000000000000
          Width = 34.015745590000000000
          Height = 17.007874015748000000
          DataField = 'day3'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day3"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo19: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 102.047310000000000000
          Top = 17.007874015748000000
          Width = 37.795275590000000000
          Height = 17.007874020000000000
          DataField = 'overtimehour3'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour3"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo20: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 143.622140000000000000
          Width = 34.015745590000000000
          Height = 17.007874015748000000
          DataField = 'day4'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day4"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo21: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 139.842610000000000000
          Top = 17.007874015748000000
          Width = 37.795275590000000000
          Height = 17.007874020000000000
          DataField = 'overtimehour4'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour4"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo22: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 181.417440000000000000
          Width = 34.015745590000000000
          Height = 17.007874015748000000
          DataField = 'day5'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day5"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo23: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 177.637910000000000000
          Top = 17.007874015748000000
          Width = 37.795275590000000000
          Height = 17.007874020000000000
          DataField = 'overtimehour5'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour5"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo24: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 219.212740000000000000
          Width = 34.015745590000000000
          Height = 17.007874015748000000
          DataField = 'day6'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day6"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo25: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 215.433210000000000000
          Top = 17.007874015748000000
          Width = 37.795275590000000000
          Height = 17.007874020000000000
          DataField = 'overtimehour6'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour6"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo26: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 257.008040000000000000
          Width = 34.015745590000000000
          Height = 17.007874015748000000
          DataField = 'day7'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day7"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo27: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 253.228510000000000000
          Top = 17.007874015748000000
          Width = 37.795275590000000000
          Height = 17.007874020000000000
          DataField = 'overtimehour7'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour7"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo30: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 291.023810000000000000
          Width = 90.708661420000000000
          Height = 34.015748031496100000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."lembur_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo31: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 381.732530000000000000
          Width = 90.708661420000000000
          Height = 34.015748031496100000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."ekm_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo32: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 472.441250000000000000
          Width = 90.708661420000000000
          Height = 34.015748031496100000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."ttransport_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo33: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 563.149970000000000000
          Width = 90.708661420000000000
          Height = 34.015748031496100000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."tshift_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo34: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 653.858690000000000000
          Width = 90.708661420000000000
          Height = 34.015748031496100000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."takehomepay_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupHeader1: TfrxGroupHeader
        FillType = ftBrush
        Frame.Typ = []
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Tahoma'
        Font.Style = []
        Height = 105.826825350000000000
        ParentFont = False
        Top = 18.897650000000000000
        Width = 755.906000000000000000
        Condition = 'master."tun_id"'
        KeepChild = True
        KeepTogether = True
        object Memo1: TfrxMemoView
          AllowVectorExport = True
          Top = 18.897650000000000000
          Width = 230.551330000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Typ = []
          Memo.UTF8W = (
            'PT. MORITA TJOKRO GEARINDO')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo2: TfrxMemoView
          AllowVectorExport = True
          Top = 37.795300000000000000
          Width = 230.551330000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Typ = []
          Memo.UTF8W = (
            'PERIODE : [DayOf(<master."startdate">)] ['
            'IIF( MonthOf(<master."startdate">)=1, '#39'Jan'#39',  '
            'IIF( MonthOf(<master."startdate">)=2, '#39'Feb'#39', '
            'IIF( MonthOf(<master."startdate">)=3, '#39'Mar'#39', '
            'IIF( MonthOf(<master."startdate">)=4, '#39'Apr'#39', '
            'IIF( MonthOf(<master."startdate">)=5, '#39'Mei'#39', '
            'IIF( MonthOf(<master."startdate">)=6, '#39'Jun'#39',  '
            'IIF( MonthOf(<master."startdate">)=7, '#39'Jul'#39', '
            'IIF( MonthOf(<master."startdate">)=8, '#39'Ags'#39', '
            'IIF( MonthOf(<master."startdate">)=9, '#39'Sep'#39', '
            'IIF( MonthOf(<master."startdate">)=10, '#39'Okt'#39', '
            'IIF( MonthOf(<master."startdate">)=11, '#39'Nov'#39', '
            'IIF( MonthOf(<master."startdate">)=12, '#39'Des'#39', '
            '  '#39#39'))))))))))))'
            '] s/d [DayOf(<master."enddate">)] ['
            'IIF( MonthOf(<master."enddate">)=1, '#39'Jan'#39',  '
            'IIF( MonthOf(<master."enddate">)=2, '#39'Feb'#39', '
            'IIF( MonthOf(<master."enddate">)=3, '#39'Mar'#39', '
            'IIF( MonthOf(<master."enddate">)=4, '#39'Apr'#39', '
            'IIF( MonthOf(<master."enddate">)=5, '#39'Mei'#39', '
            'IIF( MonthOf(<master."enddate">)=6, '#39'Jun'#39',  '
            'IIF( MonthOf(<master."enddate">)=7, '#39'Jul'#39', '
            'IIF( MonthOf(<master."enddate">)=8, '#39'Ags'#39', '
            'IIF( MonthOf(<master."enddate">)=9, '#39'Sep'#39', '
            'IIF( MonthOf(<master."enddate">)=10, '#39'Okt'#39', '
            'IIF( MonthOf(<master."enddate">)=11, '#39'Nov'#39', '
            'IIF( MonthOf(<master."enddate">)=12, '#39'Des'#39', '
            '  '#39#39'))))))))))))'
            '] [YearOf(<master."enddate">)]')
          ParentFont = False
          VAlign = vaCenter
          Formats = <
            item
            end
            item
            end
            item
            end
            item
            end
            item
            end>
        end
        object Memo14: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 83.149660000000000000
          Width = 26.456685590000000000
          Height = 22.677165350000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'MG')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo29: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 26.456710000000000000
          Top = 83.149660000000000000
          Width = 264.567075590000000000
          Height = 22.677165350000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'JAM LEMBUR')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo35: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 291.023810000000000000
          Top = 83.149660000000000000
          Width = 90.708661420000000000
          Height = 22.677165350000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'LEMBUR')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo36: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 381.732530000000000000
          Top = 83.149660000000000000
          Width = 90.708661420000000000
          Height = 22.677165350000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'EKM+PRD')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo37: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 472.441250000000000000
          Top = 83.149660000000000000
          Width = 90.708661420000000000
          Height = 22.677165350000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'UTT')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo38: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 563.149970000000000000
          Top = 83.149660000000000000
          Width = 90.708661420000000000
          Height = 22.677165350000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'T.SHIFT')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo39: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 653.858690000000000000
          Top = 83.149660000000000000
          Width = 90.708661420000000000
          Height = 22.677165350000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'TOTAL')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo45: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 408.189240000000000000
          Top = 18.897650000000000000
          Width = 45.354301420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            'Nama')
          ParentFont = False
          VAlign = vaCenter
          Formats = <
            item
              FormatStr = '%2.0f'
              Kind = fkNumeric
            end
            item
            end>
        end
        object Memo46: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 408.189240000000000000
          Top = 37.795300000000000000
          Width = 45.354301420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            'NIP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo47: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 453.543600000000000000
          Top = 18.897650000000000000
          Width = 11.338531420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo48: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 453.543600000000000000
          Top = 37.795300000000000000
          Width = 11.338531420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo50: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 464.882190000000000000
          Top = 18.897650000000000000
          Width = 283.464691420000000000
          Height = 18.897637800000000000
          StretchMode = smActualHeight
          AutoWidth = True
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            '[master."name"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo52: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 464.882190000000000000
          Top = 37.795300000000000000
          Width = 124.724431420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            '[master."nip"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo51: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 408.189240000000000000
          Top = 56.692950000000000000
          Width = 45.354301420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            'Dept')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo53: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 453.543600000000000000
          Top = 56.692950000000000000
          Width = 11.338531420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo54: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 464.882190000000000000
          Top = 56.692950000000000000
          Width = 211.653621420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            '[master."departmentname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo96: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Width = 755.905941420000000000
          Height = 18.897637800000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = [ftTop]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupFooter1: TfrxGroupFooter
        FillType = ftBrush
        Frame.Typ = []
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Tahoma'
        Font.Style = []
        Height = 79.370105590000000000
        ParentFont = False
        Top = 204.094620000000000000
        Width = 755.906000000000000000
        KeepChild = True
        object Memo28: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 3.779530000000000000
          Width = 755.905975590000000000
          Height = 15.118095590000000000
          Visible = False
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftTop]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo40: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 3.779530000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            'BANTUAN PERUMAHAN')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo41: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 34.015770000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            'TERIMA PEMBULATAN')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo43: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 3.779530000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."trumah"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo44: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 34.015770000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = [fsBold]
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."takehomepay"] ')
          ParentFont = False
          VAlign = vaCenter
        end
      end
    end
  end
  object dxLayoutLookAndFeelList1: TdxLayoutLookAndFeelList
    Left = 200
    object dxLayoutCxLookAndFeel1: TdxLayoutCxLookAndFeel
      LookAndFeel.SkinName = 'UserSkin'
      PixelsPerInch = 96
    end
  end
  object cxGridPopupMenu2: TcxGridPopupMenu
    Grid = GRID_DETAIL1
    PopupMenus = <>
    Left = 168
    Top = 88
  end
  object DS_DETAIL1: TDataSource
    DataSet = Q_DETAIL1
    Left = 136
    Top = 88
  end
  object Q_DETAIL1: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 104
    Top = 88
  end
  object Q_DETAIL2: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 104
    Top = 136
  end
  object DS_DETAIL2: TDataSource
    DataSet = Q_DETAIL2
    Left = 136
    Top = 136
  end
  object cxGridPopupMenu3: TcxGridPopupMenu
    Grid = GRID_DETAIL2
    PopupMenus = <>
    Left = 168
    Top = 136
  end
  object Q_DETAIL3: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 104
    Top = 184
  end
  object DS_DETAIL3: TDataSource
    DataSet = Q_DETAIL3
    Left = 136
    Top = 184
  end
  object cxGridPopupMenu4: TcxGridPopupMenu
    Grid = GRID_DETAIL3
    PopupMenus = <>
    Left = 168
    Top = 184
  end
  object Q_DETAIL4: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 104
    Top = 240
  end
  object DS_DETAIL4: TDataSource
    DataSet = Q_DETAIL4
    Left = 136
    Top = 232
  end
  object cxGridPopupMenu5: TcxGridPopupMenu
    Grid = GRID_DETAIL4
    PopupMenus = <>
    Left = 168
    Top = 232
  end
  object Q_DETAIL5: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 88
  end
  object DS_DETAIL5: TDataSource
    DataSet = Q_DETAIL5
    Left = 304
    Top = 88
  end
  object cxGridPopupMenu6: TcxGridPopupMenu
    Grid = GRID_DETAIL5
    PopupMenus = <>
    Left = 336
    Top = 88
  end
  object Q_DETAIL6: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 136
  end
  object DS_DETAIL6: TDataSource
    DataSet = Q_DETAIL6
    Left = 304
    Top = 136
  end
  object cxGridPopupMenu7: TcxGridPopupMenu
    Grid = GRID_DETAIL6
    PopupMenus = <>
    Left = 336
    Top = 136
  end
  object Q_DETAIL7: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 184
  end
  object DS_DETAIL7: TDataSource
    DataSet = Q_DETAIL7
    Left = 304
    Top = 184
  end
  object cxGridPopupMenu8: TcxGridPopupMenu
    Grid = GRID_DETAIL7
    PopupMenus = <>
    Left = 336
    Top = 184
  end
  object Q_Laporan: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select t.*, '
      'dp.name as departmentname,'
      'es.name as employeestatusname,'
      'td.tund_id, td.tdate as tdate_d, td.startdate as startdate_d,'
      'td.enddate as enddate_ed, td.lembur as lembur_d,'
      
        'td.ekm as ekm_d, td.ttransport as ttransport_d, td.tshift as tsh' +
        'ift_d, '
      'td.total as total_d, td.takehomepay as takehomepay_d,'
      'td.trumah as trumah_d, td.day1, td.day2, td.day3, td.day4,'
      'td.day5, td.day6, td.day7, td.day8,'
      
        'td.overtimehour1, td.overtimehour2, td.overtimehour3, td.overtim' +
        'ehour4,'
      
        'td.overtimehour5, td.overtimehour6, td.overtimehour7, td.overtim' +
        'ehour8'
      'from t_tunjangan t'
      'left join t_tunjangan_detail td on t.tun_id=td.tun_id'
      'left join m_employee e on t.employee_id = e.employee_id'
      'left join m_department dp on t.department_id=dp.department_id'
      
        'left join m_employeestatus es on t.employeestatus_id = es.employ' +
        'eestatus_id'
      'where t.startdate>='#39'2024-11-08'#39
      'order by t.tdate, t.nip, td.nip, td.startdate'
      'limit 20')
    Params = <>
    Left = 72
    Top = 40
  end
  object DS_Laporan: TDataSource
    DataSet = Q_Laporan
    Left = 104
    Top = 40
  end
  object frxDSLaporan: TfrxDBDataset
    UserName = 'master'
    CloseDataSource = False
    DataSet = Q_Laporan
    BCDToCurrency = False
    Left = 136
    Top = 40
  end
  object Q_Mutation: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select p.*, '
      'c.name as companyname, '
      'd.name as divisionname, '
      'dp.name as departmentname,'
      'w.name as workareaname,'
      'po.name as positionname,'
      'l.name as levelname,'
      'es.name as employeestatusname'
      'from m_employee_mutation p'
      'left join m_company c on p.company_id = c.company_id'
      'left join m_division d on p.division_id = d.division_id'
      'left join m_department dp on p.department_id=dp.department_id'
      'left join m_workarea w on p.workarea_id = w.workarea_id'
      'left join m_position po on p.position_id = po.position_id'
      'left join m_level l on p.level_id=l.level_id'
      
        'left join m_employeestatus es on p.employeestatus_id = es.employ' +
        'eestatus_id'
      'order by p.nip, p.tdate')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 72
  end
  object DS_Mutation: TDataSource
    DataSet = Q_Mutation
    Left = 568
    Top = 72
  end
  object frxDBDataset2: TfrxDBDataset
    UserName = 'mutation'
    CloseDataSource = False
    DataSet = Q_Mutation
    BCDToCurrency = False
    Left = 600
    Top = 72
  end
  object DS_Relatives: TDataSource
    DataSet = Q_Relatives
    Left = 568
    Top = 112
  end
  object frxDBDataset3: TfrxDBDataset
    UserName = 'relatives'
    CloseDataSource = False
    DataSet = Q_Relatives
    BCDToCurrency = False
    Left = 600
    Top = 112
  end
  object Q_Relatives: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from m_employee_relatives')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 112
  end
  object DS_Asset: TDataSource
    DataSet = Q_Asset
    Left = 568
    Top = 160
  end
  object frxDBDataset4: TfrxDBDataset
    UserName = 'asset'
    CloseDataSource = False
    DataSet = Q_Asset
    BCDToCurrency = False
    Left = 600
    Top = 160
  end
  object Q_Asset: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from m_employee_asset')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 160
  end
  object DS_Job: TDataSource
    DataSet = Q_Job
    Left = 568
    Top = 216
  end
  object frxDBDataset5: TfrxDBDataset
    UserName = 'job'
    CloseDataSource = False
    DataSet = Q_Job
    BCDToCurrency = False
    Left = 600
    Top = 216
  end
  object Q_Job: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from m_employee_workexperience')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 216
  end
  object Q_Education: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from m_employee_education')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 328
  end
  object frxDBDataset6: TfrxDBDataset
    UserName = 'education'
    CloseDataSource = False
    DataSet = Q_Education
    BCDToCurrency = False
    Left = 600
    Top = 328
  end
  object DS_Education: TDataSource
    DataSet = Q_Education
    Left = 568
    Top = 328
  end
  object Q_Training: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from m_employee_training')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 272
  end
  object DS_Training: TDataSource
    DataSet = Q_Training
    Left = 568
    Top = 272
  end
  object frxDBDataset7: TfrxDBDataset
    UserName = 'training'
    CloseDataSource = False
    DataSet = Q_Training
    BCDToCurrency = False
    Left = 600
    Top = 272
  end
  object Q_Reward: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select er.*, r.name from m_employee_reward er'
      'left join m_rewardpunishment r '
      '  on er.rewardpunishment_id = r.rewardpunishment_id')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 376
  end
  object DS_Reward: TDataSource
    DataSet = Q_Reward
    Left = 568
    Top = 376
  end
  object frxDBDataset8: TfrxDBDataset
    UserName = 'reward'
    CloseDataSource = False
    DataSet = Q_Reward
    BCDToCurrency = False
    Left = 600
    Top = 376
  end
  object Q_Punishment: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select er.*, r.name from m_employee_punishment er'
      'left join m_rewardpunishment r '
      '  on er.rewardpunishment_id = r.rewardpunishment_id'
      '')
    Params = <>
    MasterFields = 'employee_id'
    MasterSource = DS_Laporan
    LinkedFields = 'employee_id'
    Left = 536
    Top = 424
  end
  object DS_Punishment: TDataSource
    DataSet = Q_Punishment
    Left = 568
    Top = 424
  end
  object frxDBDataset9: TfrxDBDataset
    UserName = 'punishment'
    CloseDataSource = False
    DataSet = Q_Punishment
    BCDToCurrency = False
    Left = 600
    Top = 424
  end
  object Q_DETAIL8: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 232
  end
  object DS_DETAIL8: TDataSource
    DataSet = Q_DETAIL8
    Left = 304
    Top = 232
  end
  object cxGridPopupMenu9: TcxGridPopupMenu
    Grid = GRID_DETAIL8
    PopupMenus = <>
    Left = 336
    Top = 232
  end
  object Q_DETAIL9: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 312
  end
  object DS_DETAIL9: TDataSource
    DataSet = Q_DETAIL9
    Left = 304
    Top = 312
  end
  object cxGridPopupMenu10: TcxGridPopupMenu
    Grid = GRID_DETAIL9
    PopupMenus = <>
    Left = 336
    Top = 312
  end
  object Q_DETAIL10: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 360
  end
  object DS_DETAIL10: TDataSource
    DataSet = Q_DETAIL10
    Left = 304
    Top = 360
  end
  object cxGridPopupMenu11: TcxGridPopupMenu
    Grid = GRID_DETAIL10
    PopupMenus = <>
    Left = 336
    Top = 360
  end
  object ApplicationEvents1: TApplicationEvents
    OnException = ApplicationEvents1Exception
    Left = 424
    Top = 192
  end
  object DS_Employee: TDataSource
    DataSet = Q_Employee
    Left = 120
    Top = 328
  end
  object Q_Employee: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      
        'select e.employee_id, e.name, e.nip, d.name as dept, p.name as p' +
        'osition'
      'from m_employee e'
      'left join m_department d on e.department_id=d.department_id'
      'left join m_position p on e.position_id=p.position_id')
    Params = <>
    Left = 88
    Top = 328
  end
  object frxReport1: TfrxReport
    Version = '6.4.9'
    DotMatrixReport = False
    IniFile = '\Software\Fast Reports'
    PreviewOptions.Buttons = [pbPrint, pbLoad, pbSave, pbExport, pbZoom, pbFind, pbOutline, pbPageSetup, pbTools, pbEdit, pbNavigator, pbExportQuick]
    PreviewOptions.Zoom = 1.000000000000000000
    PrintOptions.Printer = 'Default'
    PrintOptions.PrintOnSheet = 0
    ReportOptions.CreateDate = 45305.440182002300000000
    ReportOptions.LastChange = 45305.440182002300000000
    ScriptLanguage = 'PascalScript'
    ScriptText.Strings = (
      ''
      'begin'
      ''
      'end.')
    Left = 256
    Top = 48
    Datasets = <
      item
        DataSet = frxDSLaporan
        DataSetName = 'master'
      end>
    Variables = <>
    Style = <>
    object Data: TfrxDataPage
      Height = 1000.000000000000000000
      Width = 1000.000000000000000000
    end
    object Page1: TfrxReportPage
      PaperWidth = 210.000000000000000000
      PaperHeight = 297.000000000000000000
      PaperSize = 9
      LeftMargin = 5.000000000000000000
      RightMargin = 5.000000000000000000
      TopMargin = 15.000000000000000000
      BottomMargin = 15.000000000000000000
      Frame.Typ = []
      MirrorMode = []
      object MasterData1: TfrxMasterData
        FillType = ftBrush
        Frame.Typ = []
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clBlack
        Font.Height = -13
        Font.Name = 'tahoma'
        Font.Style = []
        Height = 52.913402910000000000
        ParentFont = False
        Top = 173.858380000000000000
        Width = 755.906000000000000000
        DataSet = frxDSLaporan
        DataSetName = 'master'
        KeepChild = True
        RowCount = 0
        Stretched = True
        object masterday1: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 30.236240000000000000
          Width = 34.015745590000000000
          Height = 26.456692910000000000
          DataField = 'day1'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day1"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo12: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 26.456710000000000000
          Top = 26.456710000000000000
          Width = 37.795275590000000000
          Height = 26.456692910000000000
          DataField = 'overtimehour1'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour1"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo13: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Width = 26.456685590000000000
          Height = 26.456661180000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight]
          Frame.LeftLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsSolid
          HAlign = haCenter
          Memo.UTF8W = (
            '[Line]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo15: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 26.456710000000000000
          Width = 26.456685590000000000
          Height = 26.456661180000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo16: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 68.031540000000000000
          Width = 34.015745590000000000
          Height = 26.456692910000000000
          DataField = 'day2'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day2"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo17: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 64.252010000000000000
          Top = 26.456710000000000000
          Width = 37.795275590000000000
          Height = 26.456692910000000000
          DataField = 'overtimehour2'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour2"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo18: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 105.826840000000000000
          Width = 34.015745590000000000
          Height = 26.456692910000000000
          DataField = 'day3'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day3"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo19: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 102.047310000000000000
          Top = 26.456710000000000000
          Width = 37.795275590000000000
          Height = 26.456692910000000000
          DataField = 'overtimehour3'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour3"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo20: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 143.622140000000000000
          Width = 34.015745590000000000
          Height = 26.456692910000000000
          DataField = 'day4'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day4"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo21: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 139.842610000000000000
          Top = 26.456710000000000000
          Width = 37.795275590000000000
          Height = 26.456692910000000000
          DataField = 'overtimehour4'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour4"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo22: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 181.417440000000000000
          Width = 34.015745590000000000
          Height = 26.456692910000000000
          DataField = 'day5'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day5"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo23: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 177.637910000000000000
          Top = 26.456710000000000000
          Width = 37.795275590000000000
          Height = 26.456692910000000000
          DataField = 'overtimehour5'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour5"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo24: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 219.212740000000000000
          Width = 34.015745590000000000
          Height = 26.456692910000000000
          DataField = 'day6'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day6"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo25: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 215.433210000000000000
          Top = 26.456710000000000000
          Width = 37.795275590000000000
          Height = 26.456692910000000000
          DataField = 'overtimehour6'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour6"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo26: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 257.008040000000000000
          Width = 34.015745590000000000
          Height = 26.456692910000000000
          DataField = 'day7'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Color = 3026478
          Frame.BottomLine.Style = fsSolid
          HAlign = haRight
          Memo.UTF8W = (
            '[master."day7"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo27: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 253.228510000000000000
          Top = 26.456710000000000000
          Width = 37.795275590000000000
          Height = 26.456692910000000000
          DataField = 'overtimehour7'
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.2f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftRight, ftBottom]
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."overtimehour7"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo30: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 291.023810000000000000
          Width = 90.708661420000000000
          Height = 52.913402910000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."lembur_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo31: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 381.732530000000000000
          Width = 90.708661420000000000
          Height = 52.913402910000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."ekm_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo32: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 472.441250000000000000
          Width = 90.708661420000000000
          Height = 52.913402910000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."ttransport_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo33: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 563.149970000000000000
          Width = 90.708661420000000000
          Height = 52.913402910000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."tshift_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo34: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 653.858690000000000000
          Width = 90.708661420000000000
          Height = 52.913402910000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDot
          Frame.Typ = [ftRight, ftTop, ftBottom]
          HAlign = haRight
          Memo.UTF8W = (
            '[master."takehomepay_d"] ')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupHeader1: TfrxGroupHeader
        FillType = ftBrush
        Frame.Typ = []
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clBlack
        Font.Height = -13
        Font.Name = 'tahoma'
        Font.Style = []
        Height = 132.283525590000000000
        ParentFont = False
        Top = 18.897650000000000000
        Width = 755.906000000000000000
        Condition = 'master."tun_id"'
        KeepChild = True
        KeepTogether = True
        object Memo1: TfrxMemoView
          AllowVectorExport = True
          Top = 15.118120000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            'TUNJANGAN TIDAK TETAP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo2: TfrxMemoView
          AllowVectorExport = True
          Top = 34.015770000000000000
          Width = 230.551330000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            'PERIODE : [DayOf(<master."startdate">)] ['
            'IIF( MonthOf(<master."startdate">)=1, '#39'Jan'#39',  '
            'IIF( MonthOf(<master."startdate">)=2, '#39'Feb'#39', '
            'IIF( MonthOf(<master."startdate">)=3, '#39'Mar'#39', '
            'IIF( MonthOf(<master."startdate">)=4, '#39'Apr'#39', '
            'IIF( MonthOf(<master."startdate">)=5, '#39'Mei'#39', '
            'IIF( MonthOf(<master."startdate">)=6, '#39'Jun'#39',  '
            'IIF( MonthOf(<master."startdate">)=7, '#39'Jul'#39', '
            'IIF( MonthOf(<master."startdate">)=8, '#39'Ags'#39', '
            'IIF( MonthOf(<master."startdate">)=9, '#39'Sep'#39', '
            'IIF( MonthOf(<master."startdate">)=10, '#39'Okt'#39', '
            'IIF( MonthOf(<master."startdate">)=11, '#39'Nov'#39', '
            'IIF( MonthOf(<master."startdate">)=12, '#39'Des'#39', '
            '  '#39#39'))))))))))))'
            '] s/d [DayOf(<master."enddate">)] ['
            'IIF( MonthOf(<master."enddate">)=1, '#39'Jan'#39',  '
            'IIF( MonthOf(<master."enddate">)=2, '#39'Feb'#39', '
            'IIF( MonthOf(<master."enddate">)=3, '#39'Mar'#39', '
            'IIF( MonthOf(<master."enddate">)=4, '#39'Apr'#39', '
            'IIF( MonthOf(<master."enddate">)=5, '#39'Mei'#39', '
            'IIF( MonthOf(<master."enddate">)=6, '#39'Jun'#39',  '
            'IIF( MonthOf(<master."enddate">)=7, '#39'Jul'#39', '
            'IIF( MonthOf(<master."enddate">)=8, '#39'Ags'#39', '
            'IIF( MonthOf(<master."enddate">)=9, '#39'Sep'#39', '
            'IIF( MonthOf(<master."enddate">)=10, '#39'Okt'#39', '
            'IIF( MonthOf(<master."enddate">)=11, '#39'Nov'#39', '
            'IIF( MonthOf(<master."enddate">)=12, '#39'Des'#39', '
            '  '#39#39'))))))))))))'
            '] [YearOf(<master."enddate">)]')
          ParentFont = False
          VAlign = vaCenter
          Formats = <
            item
            end
            item
            end
            item
            end
            item
            end
            item
            end>
        end
        object Memo3: TfrxMemoView
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 15.118120000000000000
          Width = 52.913420000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            'NIP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo4: TfrxMemoView
          AllowVectorExport = True
          Left = 532.913730000000000000
          Top = 15.118120000000000000
          Width = 15.118120000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo5: TfrxMemoView
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 34.015770000000000000
          Width = 52.913420000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            'NAMA')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo6: TfrxMemoView
          AllowVectorExport = True
          Left = 532.913730000000000000
          Top = 34.015770000000000000
          Width = 15.118120000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo7: TfrxMemoView
          AllowVectorExport = True
          Left = 548.031850000000000000
          Top = 15.118120000000000000
          Width = 207.874150000000000000
          Height = 18.897650000000000000
          StretchMode = smActualHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            '[master."nip"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo8: TfrxMemoView
          AllowVectorExport = True
          Left = 548.031850000000000000
          Top = 34.015770000000000000
          Width = 207.874150000000000000
          Height = 18.897650000000000000
          StretchMode = smActualHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            '[master."name"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo9: TfrxMemoView
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 68.031540000000000000
          Width = 52.913420000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            'PROYEK')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo10: TfrxMemoView
          AllowVectorExport = True
          Left = 532.913730000000000000
          Top = 68.031540000000000000
          Width = 15.118120000000000000
          Height = 18.897650000000000000
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo11: TfrxMemoView
          AllowVectorExport = True
          Left = 548.031850000000000000
          Top = 68.031540000000000000
          Width = 207.874150000000000000
          Height = 18.897650000000000000
          StretchMode = smActualHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Typ = []
          Memo.UTF8W = (
            '[master."departmentname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo14: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 94.488250000000000000
          Width = 26.456685590000000000
          Height = 37.795275590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'MG')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo29: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 26.456710000000000000
          Top = 94.488250000000000000
          Width = 264.567075590000000000
          Height = 37.795275590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'JAM LEMBUR')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo35: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 291.023810000000000000
          Top = 94.488250000000000000
          Width = 90.708661420000000000
          Height = 37.795275590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'LEMBUR')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo36: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 381.732530000000000000
          Top = 94.488250000000000000
          Width = 90.708661420000000000
          Height = 37.795275590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'EKM+PRD')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo37: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 472.441250000000000000
          Top = 94.488250000000000000
          Width = 90.708661420000000000
          Height = 37.795275590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'UTT')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo38: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 563.149970000000000000
          Top = 94.488250000000000000
          Width = 90.708661420000000000
          Height = 37.795275590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'T.SHIFT')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo39: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 653.858690000000000000
          Top = 94.488250000000000000
          Width = 90.708661420000000000
          Height = 37.795275590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          Memo.UTF8W = (
            'TOTAL')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo46: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Width = 755.905975590000000000
          Height = 15.118095590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftTop]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupFooter1: TfrxGroupFooter
        FillType = ftBrush
        Frame.Typ = []
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clBlack
        Font.Height = -13
        Font.Name = 'tahoma'
        Font.Style = []
        Height = 132.283525590000000000
        ParentFont = False
        Top = 249.448980000000000000
        Width = 755.906000000000000000
        KeepChild = True
        object Memo28: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 3.779530000000000000
          Width = 755.905975590000000000
          Height = 15.118095590000000000
          Visible = False
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = [ftTop]
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo40: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 18.897650000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            'BANTUAN PERUMAHAN')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo41: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Top = 71.811070000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0f'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          Memo.UTF8W = (
            'TERIMA PEMBULATAN')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo43: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 18.897650000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."trumah"] ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo42: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 45.354360000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '0')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo44: TfrxMemoView
          IndexTag = 1
          AllowVectorExport = True
          Left = 480.000310000000000000
          Top = 71.811070000000000000
          Width = 264.567075590000000000
          Height = 26.456685590000000000
          DataSet = frxDSLaporan
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'tahoma'
          Font.Style = []
          Frame.Style = fsDash
          Frame.Typ = []
          Frame.LeftLine.Style = fsDot
          Frame.TopLine.Style = fsDot
          Frame.RightLine.Style = fsDot
          Frame.BottomLine.Style = fsDot
          HAlign = haRight
          Memo.UTF8W = (
            '[master."takehomepay"] ')
          ParentFont = False
          VAlign = vaCenter
        end
      end
    end
  end
end
