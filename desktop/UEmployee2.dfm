object FrmEmployee2: TFrmEmployee2
  Left = 0
  Top = 0
  Caption = 'CaptionForm'
  ClientHeight = 501
  ClientWidth = 1178
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
    Width = 1178
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
    ClientRectBottom = 454
    ClientRectLeft = 3
    ClientRectRight = 1172
    ClientRectTop = 29
    object TabMaster: TcxTabSheet
      Caption = 'Master (F2)'
      ImageIndex = 1
      object GRID_MASTER: TcxGrid
        Left = 0
        Top = 0
        Width = 1169
        Height = 206
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
        end
        object GRID_MASTERLevel1: TcxGridLevel
          GridView = MASTER
        end
      end
      object PageDetail: TcxPageControl
        Left = 0
        Top = 214
        Width = 1169
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
        ClientRectBottom = 205
        ClientRectLeft = 3
        ClientRectRight = 1163
        ClientRectTop = 29
        object TabDetail1: TcxTabSheet
          Caption = 'Master (F2)'
          ImageIndex = 1
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+1 )'
          object GRID_DETAIL1: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
          ExplicitLeft = 0
          ExplicitTop = 0
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL2: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
          ExplicitLeft = 0
          ExplicitTop = 0
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL3: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
          ExplicitLeft = 0
          ExplicitTop = 0
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL4: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
          ExplicitLeft = 0
          ExplicitTop = 0
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL5: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
          ExplicitLeft = 0
          ExplicitTop = 0
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL6: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
          ExplicitLeft = 0
          ExplicitTop = 0
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL7: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
            end
            object GRID_DETAIL7Level1: TcxGridLevel
              GridView = DETAIL7
            end
          end
        end
        object TabDetail8: TcxTabSheet
          Caption = 'TabDetail8'
          ImageIndex = 7
          ExplicitLeft = 0
          ExplicitTop = 32
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL8: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
            end
            object GRID_DETAIL8Level1: TcxGridLevel
              GridView = DETAIL8
            end
          end
        end
        object TabDetail9: TcxTabSheet
          Caption = 'TabDetail9'
          ImageIndex = 8
          ExplicitLeft = 0
          ExplicitTop = 0
          ExplicitWidth = 0
          ExplicitHeight = 0
          object GRID_DETAIL9: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
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
            end
            object GRID_DETAIL9Level1: TcxGridLevel
              GridView = DETAIL9
            end
          end
        end
      end
      object cxSplitter1: TcxSplitter
        Left = 0
        Top = 206
        Width = 1169
        Height = 8
        AlignSplitter = salBottom
        Control = PageControl
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
    Width = 1178
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
      Font.Height = -19
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
      ExplicitLeft = 8
      ExplicitTop = 4
    end
    object LblEnddate: TLabel
      AlignWithMargins = True
      Left = 577
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
      Left = 372
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
      Left = 1104
      Top = 3
      Width = 71
      Height = 35
      Align = alRight
      Caption = 'C&lose'
      DropDownMenu = ItemMenu
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
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
        0000000000D9000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000F10000
        006F0000006D00000067000000650000006D0000006D0000006D0000006D0000
        006D0000006D0000006D0000006B000000630000006B0000006D000000AC0000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E500000000000000000000
        0011000000160000000000000000000000000000000000000000000000000000
        0000000000000000002B000000000000000000000063000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E70000000000000026000000D5000000E20000
        00300000000000000000000000000000000000000000000000000000007E0000
        00F90000007F000000040000006B000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E600000000000000A6000000FF000000FF000000DC0000002F0000
        00000000000000000000000000000000007D000000FF000000FF000000FF0000
        002E00000063000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000E70000
        00000000002B000000D3000000FF000000FF000000DC00000030000000000000
        00000000007D000000FF000000FF000000FF0000008A000000040000006A0000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E700000002000000000000
        0027000000D4000000FF000000FF000000DC0000003100000076000000FF0000
        00FF000000FF0000008800000000000000000000006D000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E7000000020000000000000000000000270000
        00D3000000FF000000FF000000ED000000FA000000FF000000FF000000880000
        000200000000000000000000006D000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E70000000200000000000000000000000000000025000000CA0000
        00FF000000FF000000FF000000F8000000810000000000000000000000000000
        00000000006D000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000E70000
        00020000000000000000000000000000000000000091000000FF000000FF0000
        00FF000000EF00000033000000000000000000000000000000000000006D0000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E700000002000000000000
        0000000000000000007D000000FC000000FF000000FF000000FF000000FF0000
        00DA0000002D0000000000000000000000000000006D000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E70000000200000000000000000000007C0000
        00FE000000FF000000FF00000099000000CA000000FF000000FF000000DB0000
        003100000000000000000000006D000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E700000001000000000000007C000000FF000000FF000000FF0000
        00880000000000000023000000D6000000FF000000FF000000DD0000002D0000
        00000000006D000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000E70000
        00000000007C000000FF000000FF000000FF0000008800000001000000000000
        000000000029000000D3000000FF000000FF000000E20000001C000000650000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E600000000000000770000
        00FF000000FF0000008900000000000000000000000000000000000000000000
        0024000000D5000000FF000000DA0000001F00000066000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E7000000000000000000000078000000880000
        00000000000000000000000000000000000000000000000000000000002A0000
        00A900000029000000000000006D000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E70000000400000001000000000000000000000000000000020000
        0002000000020000000200000002000000020000000000000000000000000000
        00020000006E000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000FD0000
        00E7000000E7000000E6000000E7000000E7000000E7000000E7000000E70000
        00E7000000E7000000E7000000E7000000E6000000E7000000E7000000F10000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000DE000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000AC000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D1000000D100000000000000000000
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
        00000000000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 0
      OnClick = BtnCloseClick
    end
    object BtnPrint: TcxButton
      AlignWithMargins = True
      Left = 1013
      Top = 3
      Width = 85
      Height = 35
      Align = alRight
      Caption = '&Print'
      DropDownMenu = ItemPrint
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
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
        0000000000000000000000000000000000000000004D000000F3000000F30000
        00F3000000F3000000F3000000F3000000F3000000F3000000F3000000F30000
        00F3000000C40000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000052000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000D10000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000051000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000CE00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000000000004D0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000CD000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000097000000CE000000CE000000CE000000DE000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000F6000000CE000000CE000000CE000000C500000000000000000000
        0000000000000000000000000000000000000000000000000000000000C20000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FC000000000000000000000000000000000000
        000000000000000000000000000000000000000000BB000000FF000000E60000
        00830000007E0000007100000071000000710000007100000071000000710000
        0071000000710000007100000071000000710000007500000083000000AA0000
        00FF000000F30000000000000000000000000000000000000000000000000000
        00000000000000000000000000BB000000FF000000C8000000000000001B0000
        007B0000007B0000007B0000007B0000007B0000007B0000007B0000007B0000
        007B0000007B0000007B000000600000000000000042000000FF000000F30000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000BB000000FF000000CC000000000000005A000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000E5000000000000004E000000FF000000F300000000000000000000
        0000000000000000000000000000000000000000000000000000000000BB0000
        00FF000000CC000000000000003F000000C7000000C7000000C7000000C70000
        00C7000000C7000000C7000000C7000000C7000000C7000000C7000000A00000
        00000000004E000000FF000000F3000000000000000000000000000000000000
        000000000000000000000000000000000000000000BB000000FF000000CC0000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000000000004F0000
        00FF000000F30000000000000000000000000000000000000000000000000000
        00000000000000000000000000BB000000FF000000C900000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000044000000FF000000F30000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000BB000000FF000000E1000000690000006900000069000000690000
        0069000000690000006900000069000000690000006900000069000000690000
        0069000000690000006900000098000000FF000000F300000000000000000000
        0000000000000000000000000000000000000000000000000000000000C00000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FA000000000000000000000000000000000000
        000000000000000000000000000000000000000000A6000000E2000000E20000
        00E2000000DC000000D1000000D8000000E2000000E2000000E2000000E20000
        00E2000000E2000000E2000000E0000000D1000000D4000000E2000000E20000
        00E2000000D70000000000000000000000000000000000000000000000000000
        0000000000000000000000000003000000050000000500000005000000370000
        00A20000005B0000000500000005000000050000000500000005000000050000
        000500000013000000A200000086000000050000000500000005000000040000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000053000000FF000000920000
        0000000000000000000000000000000000000000000000000000000000150000
        00FF000000DC0000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000051000000FF0000008900000000000000000000
        00000000000000000000000000000000000000000011000000FF000000D20000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000052000000FF000000EB000000CF000000CF000000CF000000CF0000
        00CF000000CF000000CF000000D4000000FF000000D100000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000000000004F0000
        00F8000000FC000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000F8000000C8000000000000000000000000000000000000
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
        00000000000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 1
    end
    object BtnMenu: TcxButton
      AlignWithMargins = True
      Left = 918
      Top = 3
      Width = 89
      Height = 35
      Align = alRight
      Caption = '&Menu'
      DropDownMenu = ItemMenu
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
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
        006E000000770000007600000076000000760000007600000076000000760000
        0076000000760000007600000076000000760000007600000076000000760000
        00770000006E0000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000F1000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000F10000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000FB000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FB00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000B2000000BF000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BF000000B2000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000B2000000BF0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BF000000B20000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000FB000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FB00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000F1000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000F1000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00370000003C0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003C000000370000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000370000003C0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003C000000370000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000F1000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000F100000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000FB000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FB000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00B2000000BF000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BF000000B20000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000B2000000BF000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BF000000B200000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000FB000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FB000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00F1000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000F10000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000006E000000770000
        0076000000760000007600000076000000760000007600000076000000760000
        00760000007600000076000000760000007600000076000000770000006E0000
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
        00000000000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 2
    end
    object BtnDateTemplate: TcxButton
      AlignWithMargins = True
      Left = 776
      Top = 3
      Width = 136
      Height = 35
      Align = alRight
      Caption = '&Date Template'
      DropDownMenu = ItemDate
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
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
        00D3000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000D300000000000000000000
        00000000000000000000000000000000000000000000000000CF000000E90000
        005B0000004A0000004A0000004A0000005A0000004F0000004A0000004A0000
        0055000000550000004A0000004A0000004F0000005A0000004A0000004A0000
        004A0000005B000000E9000000CF000000000000000000000000000000000000
        0000000000000000000000000000000000D4000000D6000000000000007C0000
        007E0000007E00000001000000590000007E0000007E00000028000000280000
        007E0000007E00000059000000010000007E0000007E0000007C000000000000
        00D6000000D40000000000000000000000000000000000000000000000000000
        000000000000000000D3000000D50000001A000000FF000000FF000000FF0000
        001F000000CA000000FF000000FF0000006B0000006B000000FF000000FF0000
        00CA0000001F000000FF000000FF000000FF0000001A000000D5000000D30000
        0000000000000000000000000000000000000000000000000000000000000000
        00D3000000D500000018000000FF000000FF000000FF0000001D000000C00000
        00FF000000FF0000006500000065000000FF000000FF000000C00000001D0000
        00FF000000FF000000FF00000018000000D5000000D300000000000000000000
        00000000000000000000000000000000000000000000000000D3000000DB0000
        00030000001D0000001D0000001D00000003000000160000001D0000001D0000
        000C0000000C0000001D0000001D00000016000000030000001D0000001D0000
        001D00000003000000DB000000D3000000000000000000000000000000000000
        0000000000000000000000000000000000D3000000D700000012000000BB0000
        00BD000000BD000000160000008C000000BD000000BD0000004A0000004A0000
        00BD000000BD0000008C00000016000000BD000000BD000000BB000000120000
        00D7000000D30000000000000000000000000000000000000000000000000000
        000000000000000000D3000000D40000001A000000FF000000FF000000FF0000
        001F000000CB000000FF000000FF0000006B0000006B000000FF000000FF0000
        00CB0000001F000000FF000000FF000000FF0000001A000000D4000000D30000
        0000000000000000000000000000000000000000000000000000000000000000
        00D3000000D600000015000000E0000000E3000000E30000001A000000A50000
        00DF000000DF0000005700000057000000DF000000DF000000A5000000190000
        00DF000000DF000000DC00000015000000D6000000D300000000000000000000
        00000000000000000000000000000000000000000000000000D3000000DC0000
        0000000000040000000400000004000000010000000F00000014000000140000
        00080000000800000014000000140000000E0000000200000014000000140000
        001300000002000000DB000000D3000000000000000000000000000000000000
        0000000000000000000000000000000000D3000000DC00000000000000000000
        00000000000000000000000000B9000000EE000000EE0000005D0000005D0000
        00EE000000EE000000B00000001B000000EE000000EE000000EB000000160000
        00D5000000D30000000000000000000000000000000000000000000000000000
        000000000000000000D3000000DC000000000000000000000000000000000000
        0000000000D4000000FF000000FF0000006B0000006B000000FF000000FF0000
        00CA0000001F000000FF000000FF000000FF0000001A000000D5000000D30000
        0000000000000000000000000000000000000000000000000000000000000000
        00D3000000DA0000000000000000000000000000000000000000000000800000
        00A8000000A80000003B0000003B000000A8000000A80000007A000000090000
        00A8000000A8000000A600000005000000D5000000D300000000000000000000
        00000000000000000000000000000000000000000000000000D1000000E40000
        0039000000390000003900000039000000390000002C00000029000000290000
        00320000003200000029000000290000002D0000003700000029000000290000
        002900000037000000E4000000D1000000000000000000000000000000000000
        0000000000000000000000000000000000C9000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000C90000000000000000000000000000000000000000000000000000
        000000000000000000C9000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000C90000
        0000000000000000000000000000000000000000000000000000000000000000
        00CA000000FF000000FF000000FD0000009900000086000000F4000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000F60000
        008C00000094000000FC000000FF000000FF000000CA00000000000000000000
        00000000000000000000000000000000000000000000000000C7000000FC0000
        00FD000000EF0000000300000000000000D7000000FD000000FC000000FC0000
        00FC000000FC000000FC000000FC000000FD000000D700000000000000030000
        00EF000000FD000000FC000000C7000000000000000000000000000000000000
        0000000000000000000000000000000000180000001E0000003E000000EB0000
        000200000000000000E0000000590000001E0000001E0000001E0000001E0000
        001E0000001E00000059000000DF0000000000000002000000EC0000003E0000
        001E000000180000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000001A000000FF0000007D000000640000
        00FF000000380000000000000000000000000000000000000000000000000000
        0038000000FF0000006B00000076000000FF0000001A00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000060000008E000000D6000000D8000000A90000000E0000
        000000000000000000000000000000000000000000000000000E000000A10000
        00D8000000D70000009500000006000000000000000000000000000000000000
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
        00000000000000000000}
      TabOrder = 3
    end
    object BtnEnddate: TcxDateEdit
      AlignWithMargins = True
      Left = 620
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
      Left = 421
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
      'select * from m_employee')
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
    object N1SendPasswordtoEmail1: TMenuItem
      Caption = '&1 Send Password to Email'
      OnClick = N1SendPasswordtoEmail1Click
    end
    object N2ClearResigndate1: TMenuItem
      Caption = '&2 Clear Resigndate'
      OnClick = N2ClearResigndate1Click
    end
  end
  object ItemPrint: TPopupMenu
    Left = 376
    object N1PrintEmployeeReport1: TMenuItem
      Caption = '&1 Print Employee Report'
      OnClick = N1PrintEmployeeReport1Click
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
    Version = '4.15.6'
    DotMatrixReport = False
    IniFile = '\Software\Fast Reports'
    PreviewOptions.Buttons = [pbPrint, pbLoad, pbSave, pbExport, pbZoom, pbFind, pbOutline, pbPageSetup, pbTools, pbEdit, pbNavigator, pbExportQuick]
    PreviewOptions.Zoom = 1.000000000000000000
    PrintOptions.Printer = 'Default'
    PrintOptions.PrintOnSheet = 0
    ReportOptions.CreateDate = 42179.632395150500000000
    ReportOptions.LastChange = 42186.470596932870000000
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
        DataSet = frxDBDataset4
        DataSetName = 'asset'
      end
      item
        DataSet = frxDBDataset6
        DataSetName = 'education'
      end
      item
        DataSet = frxDBDataset5
        DataSetName = 'job'
      end
      item
        DataSet = frxDBDataset1
        DataSetName = 'master'
      end
      item
        DataSet = frxDBDataset2
        DataSetName = 'mutation'
      end
      item
        DataSet = frxDBDataset9
        DataSetName = 'punishment'
      end
      item
        DataSet = frxDBDataset3
        DataSetName = 'relatives'
      end
      item
        DataSet = frxDBDataset8
        DataSetName = 'reward'
      end
      item
        DataSet = frxDBDataset7
        DataSetName = 'training'
      end>
    Variables = <>
    Style = <>
    object Data: TfrxDataPage
      Height = 1000.000000000000000000
      Width = 1000.000000000000000000
    end
    object Page1: TfrxReportPage
      PaperWidth = 215.900000000000000000
      PaperHeight = 279.400000000000000000
      PaperSize = 1
      LeftMargin = 10.000000000000000000
      RightMargin = 10.000000000000000000
      TopMargin = 10.000000000000000000
      BottomMargin = 10.000000000000000000
      object MasterData1: TfrxMasterData
        Height = 438.425480000000000000
        Top = 215.433210000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset1
        DataSetName = 'master'
        RowCount = 0
        object Memo22: TfrxMemoView
          Top = 11.338590000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Personal Data')
          ParentFont = False
        end
        object Memo23: TfrxMemoView
          Left = 166.299320000000000000
          Top = 34.015770000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'sex'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."sex"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo24: TfrxMemoView
          Left = 166.299320000000000000
          Top = 52.913420000000000000
          Width = 211.653680000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'pob'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."pob"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo25: TfrxMemoView
          Top = 34.015770000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Gender')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo26: TfrxMemoView
          Top = 52.913420000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Place of Birth')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo28: TfrxMemoView
          Left = 139.842610000000000000
          Top = 34.015770000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo29: TfrxMemoView
          Left = 139.842610000000000000
          Top = 52.913420000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo30: TfrxMemoView
          Left = 166.299320000000000000
          Top = 71.811070000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'dob'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."dob"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo34: TfrxMemoView
          Left = 166.299320000000000000
          Top = 90.708720000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'age'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."age"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo35: TfrxMemoView
          Left = 166.299320000000000000
          Top = 109.606370000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'agama'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."agama"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo36: TfrxMemoView
          Top = 71.811070000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Date of Birth')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo37: TfrxMemoView
          Top = 90.708720000000000000
          Width = 94.488250000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Age')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo38: TfrxMemoView
          Top = 109.606370000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Agama')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo39: TfrxMemoView
          Left = 139.842610000000000000
          Top = 71.811070000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo40: TfrxMemoView
          Left = 139.842610000000000000
          Top = 90.708720000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo41: TfrxMemoView
          Left = 139.842610000000000000
          Top = 109.606370000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo42: TfrxMemoView
          Left = 166.299320000000000000
          Top = 128.504020000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'married'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."married"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo43: TfrxMemoView
          Top = 128.504020000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Marital Status')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo44: TfrxMemoView
          Left = 139.842610000000000000
          Top = 128.504020000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo48: TfrxMemoView
          Left = 544.252320000000000000
          Top = 34.015770000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'idtype'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."idtype"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo49: TfrxMemoView
          Left = 544.252320000000000000
          Top = 52.913420000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'idnumber'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."idnumber"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo50: TfrxMemoView
          Left = 377.953000000000000000
          Top = 34.015770000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'ID Type')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo51: TfrxMemoView
          Left = 377.953000000000000000
          Top = 52.913420000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'ID Number')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo52: TfrxMemoView
          Left = 517.795610000000000000
          Top = 34.015770000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo53: TfrxMemoView
          Left = 517.795610000000000000
          Top = 52.913420000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo54: TfrxMemoView
          Left = 544.252320000000000000
          Top = 71.811070000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'idexpiry'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."idexpiry"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo55: TfrxMemoView
          Left = 377.953000000000000000
          Top = 71.811070000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'ID Expired')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo56: TfrxMemoView
          Left = 517.795610000000000000
          Top = 71.811070000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo57: TfrxMemoView
          Left = 544.252320000000000000
          Top = 90.708720000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'city'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."city"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo58: TfrxMemoView
          Left = 544.252320000000000000
          Top = 109.606370000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'zip'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."zip"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo59: TfrxMemoView
          Left = 377.953000000000000000
          Top = 90.708720000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'City')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo60: TfrxMemoView
          Left = 377.953000000000000000
          Top = 109.606370000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Zip')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo61: TfrxMemoView
          Left = 517.795610000000000000
          Top = 90.708720000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo62: TfrxMemoView
          Left = 517.795610000000000000
          Top = 109.606370000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo63: TfrxMemoView
          Left = 544.252320000000000000
          Top = 128.504020000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'hp'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."hp"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo64: TfrxMemoView
          Left = 377.953000000000000000
          Top = 128.504020000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'HP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo65: TfrxMemoView
          Left = 517.795610000000000000
          Top = 128.504020000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo66: TfrxMemoView
          Left = 544.252320000000000000
          Top = 147.401670000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'email'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."email"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo67: TfrxMemoView
          Left = 377.953000000000000000
          Top = 147.401670000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Email')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo68: TfrxMemoView
          Left = 517.795610000000000000
          Top = 147.401670000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo69: TfrxMemoView
          Left = 166.299320000000000000
          Top = 147.401670000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'emergencycontactname'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."emergencycontactname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo70: TfrxMemoView
          Left = 166.299320000000000000
          Top = 166.299320000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'emergencystatus'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."emergencystatus"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo71: TfrxMemoView
          Top = 147.401670000000000000
          Width = 132.283550000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Emergency Contact')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo73: TfrxMemoView
          Left = 139.842610000000000000
          Top = 147.401670000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo74: TfrxMemoView
          Left = 139.842610000000000000
          Top = 166.299320000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo75: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 166.299320000000000000
          Top = 204.094620000000000000
          Width = 196.535433070000000000
          Height = 49.133890000000000000
          ShowHint = False
          DataField = 'emergencyaddress'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."emergencyaddress"]')
          ParentFont = False
        end
        object Memo77: TfrxMemoView
          Left = 139.842610000000000000
          Top = 204.094620000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo78: TfrxMemoView
          Left = 166.299320000000000000
          Top = 185.196970000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'emergencynumber'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."emergencynumber"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo80: TfrxMemoView
          Left = 139.842610000000000000
          Top = 185.196970000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo72: TfrxMemoView
          Top = 166.299320000000000000
          Width = 132.283550000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Emergency Status')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo76: TfrxMemoView
          Top = 204.094620000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Emergency Address')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo79: TfrxMemoView
          Top = 185.196970000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Emergency Number')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo81: TfrxMemoView
          Left = 377.953000000000000000
          Top = 166.299320000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Address')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo82: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 544.252320000000000000
          Top = 166.299320000000000000
          Width = 196.535560000000000000
          Height = 86.929190000000000000
          ShowHint = False
          DataField = 'address'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."address"]')
          ParentFont = False
        end
        object Memo83: TfrxMemoView
          Left = 517.795610000000000000
          Top = 166.299320000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo45: TfrxMemoView
          Left = -3.779530000000000000
          Top = 264.567100000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Account Detail')
          ParentFont = False
        end
        object Memo20: TfrxMemoView
          Left = 166.299320000000000000
          Top = 287.244280000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'ptkp'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."ptkp"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo27: TfrxMemoView
          Left = 166.299320000000000000
          Top = 306.141930000000000000
          Width = 211.653680000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'taxname'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."taxname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo31: TfrxMemoView
          Top = 287.244280000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'PTKP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo32: TfrxMemoView
          Top = 306.141930000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Tax Type')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo33: TfrxMemoView
          Left = 139.842610000000000000
          Top = 287.244280000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo46: TfrxMemoView
          Left = 139.842610000000000000
          Top = 306.141930000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo95: TfrxMemoView
          Left = 544.252320000000000000
          Top = 287.244280000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'startcontract'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."startcontract"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo96: TfrxMemoView
          Left = 544.252320000000000000
          Top = 306.141930000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'endcontract'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."endcontract"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo97: TfrxMemoView
          Left = 377.953000000000000000
          Top = 287.244280000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Start Contract')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo98: TfrxMemoView
          Left = 377.953000000000000000
          Top = 306.141930000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'End Contract')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo99: TfrxMemoView
          Left = 517.795610000000000000
          Top = 287.244280000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo100: TfrxMemoView
          Left = 517.795610000000000000
          Top = 306.141930000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo101: TfrxMemoView
          Left = 544.252320000000000000
          Top = 325.039580000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'startprobationdate'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."startprobationdate"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo102: TfrxMemoView
          Left = 377.953000000000000000
          Top = 325.039580000000000000
          Width = 128.504020000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Start Probation')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo103: TfrxMemoView
          Left = 517.795610000000000000
          Top = 325.039580000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo104: TfrxMemoView
          Left = 544.252320000000000000
          Top = 343.937230000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'endprobationdate'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."endprobationdate"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo106: TfrxMemoView
          Left = 377.953000000000000000
          Top = 343.937230000000000000
          Width = 124.724490000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'End Probation')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo108: TfrxMemoView
          Left = 517.795610000000000000
          Top = 343.937230000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo92: TfrxMemoView
          Left = 166.299320000000000000
          Top = 343.937230000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'resigndate'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."resigndate"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo93: TfrxMemoView
          Top = 343.937230000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Resigndate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo94: TfrxMemoView
          Left = 139.842610000000000000
          Top = 343.937230000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo116: TfrxMemoView
          Left = 166.299320000000000000
          Top = 362.834880000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'npwp'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."npwp"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo118: TfrxMemoView
          Top = 362.834880000000000000
          Width = 132.283550000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'NPWP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo119: TfrxMemoView
          Left = 139.842610000000000000
          Top = 362.834880000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo85: TfrxMemoView
          Left = 166.299320000000000000
          Top = 325.039580000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'joindate'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."joindate"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo88: TfrxMemoView
          Top = 325.039580000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Joindate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo91: TfrxMemoView
          Left = 139.842610000000000000
          Top = 325.039580000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo122: TfrxMemoView
          Left = 517.795610000000000000
          Top = 400.630180000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo126: TfrxMemoView
          Left = 377.953000000000000000
          Top = 400.630180000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Bank Acc Number')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo47: TfrxMemoView
          Left = 544.252320000000000000
          Top = 400.630180000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'bankaccountnumber'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."bankaccountnumber"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo84: TfrxMemoView
          Left = 517.795610000000000000
          Top = 419.527830000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo86: TfrxMemoView
          Left = 377.953000000000000000
          Top = 419.527830000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Bank Acc Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo87: TfrxMemoView
          Left = 544.252320000000000000
          Top = 419.527830000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'bankaccountname'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."bankaccountname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo89: TfrxMemoView
          Left = 544.252320000000000000
          Top = 362.834880000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'bankname'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."bankname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo90: TfrxMemoView
          Left = 517.795610000000000000
          Top = 362.834880000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo105: TfrxMemoView
          Left = 544.252320000000000000
          Top = 381.732530000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'bankbranch'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."bankbranch"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo107: TfrxMemoView
          Left = 517.795610000000000000
          Top = 381.732530000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo109: TfrxMemoView
          Left = 377.953000000000000000
          Top = 362.834880000000000000
          Width = 132.283550000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Bank Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo110: TfrxMemoView
          Left = 377.953000000000000000
          Top = 381.732530000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Bank Branch')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo111: TfrxMemoView
          Left = 139.842610000000000000
          Top = 381.732530000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo112: TfrxMemoView
          Top = 381.732530000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Overtime Type')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo113: TfrxMemoView
          Left = 166.299320000000000000
          Top = 381.732530000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."overtimename"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo114: TfrxMemoView
          Left = 139.842610000000000000
          Top = 400.630180000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo115: TfrxMemoView
          Top = 400.630180000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Day Off')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo121: TfrxMemoView
          Left = 166.299320000000000000
          Top = 400.630180000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'dayoff'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."dayoff"]')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupHeader3: TfrxGroupHeader
        Height = 173.858380000000000000
        Top = 18.897650000000000000
        Width = 740.787880000000000000
        Condition = 'master."employee_id"'
        StartNewPage = True
        object masternip: TfrxMemoView
          Left = 166.299320000000000000
          Top = 41.574830000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataField = 'nip'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."nip"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object masteremployeename: TfrxMemoView
          Left = 166.299320000000000000
          Top = 60.472480000000000000
          Width = 211.653680000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."name"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo3: TfrxMemoView
          Top = 41.574830000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'NIP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo4: TfrxMemoView
          Width = 362.834880000000000000
          Height = 34.015770000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -24
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'EMPLOYEE REPORT')
          ParentFont = False
        end
        object Memo5: TfrxMemoView
          Top = 60.472480000000000000
          Width = 139.842610000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Employee Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo7: TfrxMemoView
          Left = 139.842610000000000000
          Top = 41.574830000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo8: TfrxMemoView
          Left = 139.842610000000000000
          Top = 60.472480000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo10: TfrxMemoView
          Left = 166.299320000000000000
          Top = 79.370130000000000000
          Width = 196.535560000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."divisionname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo11: TfrxMemoView
          Left = 166.299320000000000000
          Top = 98.267780000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."workareaname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo12: TfrxMemoView
          Left = 166.299320000000000000
          Top = 117.165430000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."positionname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo13: TfrxMemoView
          Top = 79.370130000000000000
          Width = 102.047310000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Division')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo14: TfrxMemoView
          Top = 98.267780000000000000
          Width = 94.488250000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Workarea')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo15: TfrxMemoView
          Top = 117.165430000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Position')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo16: TfrxMemoView
          Left = 139.842610000000000000
          Top = 79.370130000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo17: TfrxMemoView
          Left = 139.842610000000000000
          Top = 98.267780000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo18: TfrxMemoView
          Left = 139.842610000000000000
          Top = 117.165430000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo1: TfrxMemoView
          Left = 166.299320000000000000
          Top = 136.063080000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."employeestatusname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo2: TfrxMemoView
          Top = 136.063080000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Employee Status')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo6: TfrxMemoView
          Left = 139.842610000000000000
          Top = 136.063080000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
        object Picture1: TfrxPictureView
          Left = 585.827150000000000000
          Top = 34.015770000000000000
          Width = 154.960730000000000000
          Height = 139.842610000000000000
          ShowHint = False
          DataField = 'photo'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          HightQuality = False
          Transparent = False
          TransparentColor = clWhite
        end
        object Memo9: TfrxMemoView
          Left = 166.299320000000000000
          Top = 154.960730000000000000
          Width = 196.535433070000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Memo.UTF8W = (
            '[master."jamsostekname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo19: TfrxMemoView
          Top = 154.960730000000000000
          Width = 120.944960000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Jamsostek Type')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo21: TfrxMemoView
          Left = 139.842610000000000000
          Top = 154.960730000000000000
          Width = 26.456710000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            ':')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData2: TfrxMasterData
        Height = 18.897650000000000000
        Top = 771.024120000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset2
        DataSetName = 'mutation'
        RowCount = 0
        Stretched = True
        object Memo120: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset2
          DataSetName = 'mutation'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[mutation."divisionname"]')
          ParentFont = False
        end
        object Memo123: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 151.181200000000000000
          Width = 139.842512360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset2
          DataSetName = 'mutation'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[mutation."workareaname"]')
          ParentFont = False
        end
        object Memo124: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 291.023810000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset2
          DataSetName = 'mutation'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[mutation."positionname"]')
          ParentFont = False
        end
        object Memo132: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 442.205010000000000000
          Width = 147.401572360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset2
          DataSetName = 'mutation'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[mutation."gradename"]')
          ParentFont = False
        end
        object Memo205: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 589.606680000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset2
          DataSetName = 'mutation'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[mutation."employeestatusname"]')
          ParentFont = False
        end
      end
      object GroupHeader2: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 812.598950000000000000
        Width = 740.787880000000000000
        Condition = 'relatives."employee_id"'
        object Memo129: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Relatives')
          ParentFont = False
        end
        object Memo130: TfrxMemoView
          Top = 52.913420000000000000
          Width = 113.385826771654000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Relation')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo131: TfrxMemoView
          Left = 113.385900000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo134: TfrxMemoView
          Left = 226.771800000000000000
          Top = 52.913420000000000000
          Width = 151.181126770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Date of Birth')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo135: TfrxMemoView
          Left = 377.953000000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Gender')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo117: TfrxMemoView
          Left = 491.338900000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Education')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo125: TfrxMemoView
          Left = 604.724800000000000000
          Top = 52.913420000000000000
          Width = 136.063006770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Job')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData3: TfrxMasterData
        Height = 18.897650000000000000
        Top = 907.087200000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset3
        DataSetName = 'relatives'
        RowCount = 0
        Stretched = True
        object Memo136: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset3
          DataSetName = 'relatives'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[relatives."relation"]')
          ParentFont = False
        end
        object Memo137: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 113.385900000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset3
          DataSetName = 'relatives'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[relatives."name"]')
          ParentFont = False
        end
        object Memo138: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 226.771800000000000000
          Width = 151.181126770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'dob'
          DataSet = frxDBDataset3
          DataSetName = 'relatives'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[relatives."dob"]')
          ParentFont = False
        end
        object Memo139: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 377.953000000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset3
          DataSetName = 'relatives'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[relatives."sex"]')
          ParentFont = False
        end
        object Memo127: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 491.338900000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset3
          DataSetName = 'relatives'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[relatives."education"]')
          ParentFont = False
        end
        object Memo128: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 604.724800000000000000
          Width = 136.063006770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset3
          DataSetName = 'relatives'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[relatives."job"]')
          ParentFont = False
        end
      end
      object GroupHeader4: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 676.535870000000000000
        Width = 740.787880000000000000
        Condition = 'mutation."employee_id"'
        object Memo140: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Mutation')
          ParentFont = False
        end
        object Memo141: TfrxMemoView
          Top = 52.913420000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Division')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo142: TfrxMemoView
          Left = 151.181200000000000000
          Top = 52.913420000000000000
          Width = 139.842512360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Workarea')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo143: TfrxMemoView
          Left = 291.023810000000000000
          Top = 52.913420000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Position')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo144: TfrxMemoView
          Left = 442.205010000000000000
          Top = 52.913420000000000000
          Width = 147.401572360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Grade ')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo206: TfrxMemoView
          Left = 589.606680000000000000
          Top = 52.913420000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Employee Status')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData4: TfrxMasterData
        Height = 18.897650000000000000
        Top = 1043.150280000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset4
        DataSetName = 'asset'
        RowCount = 0
        Stretched = True
        object Memo133: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset4
          DataSetName = 'asset'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[asset."tdate"]')
          ParentFont = False
        end
        object Memo145: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 151.181200000000000000
          Width = 185.196872360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset4
          DataSetName = 'asset'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[asset."assetname"]')
          ParentFont = False
        end
        object Memo146: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 336.378170000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset4
          DataSetName = 'asset'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[asset."tdate2"]')
          ParentFont = False
        end
        object Memo147: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 487.559370000000000000
          Width = 253.228412360000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset4
          DataSetName = 'asset'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[asset."description"]')
          ParentFont = False
        end
      end
      object GroupHeader1: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 948.662030000000000000
        Width = 740.787880000000000000
        Condition = 'asset."employee_id"'
        object Memo148: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Asset')
          ParentFont = False
        end
        object Memo149: TfrxMemoView
          Top = 52.913420000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Tgl Diberikan')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo150: TfrxMemoView
          Left = 151.181200000000000000
          Top = 52.913420000000000000
          Width = 185.196872360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Asset Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo151: TfrxMemoView
          Left = 336.378170000000000000
          Top = 52.913420000000000000
          Width = 151.181102360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Tgl Dikembalikan')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo152: TfrxMemoView
          Left = 487.559370000000000000
          Top = 52.913420000000000000
          Width = 253.228412360000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Description')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData5: TfrxMasterData
        Height = 18.897650000000000000
        Top = 1179.213360000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset5
        DataSetName = 'job'
        RowCount = 0
        Stretched = True
        object Memo160: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset5
          DataSetName = 'job'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[job."startdate"]')
          ParentFont = False
        end
        object Memo161: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 113.385900000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset5
          DataSetName = 'job'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[job."enddate"]')
          ParentFont = False
        end
        object Memo162: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 226.771800000000000000
          Width = 181.417366770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset5
          DataSetName = 'job'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[job."companyname"]')
          ParentFont = False
        end
        object Memo163: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 408.189240000000000000
          Width = 124.724416770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset5
          DataSetName = 'job'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[job."positionname"]')
          ParentFont = False
        end
        object Memo164: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 532.913730000000000000
          Width = 207.874076770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset5
          DataSetName = 'job'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[job."description"]')
          ParentFont = False
        end
      end
      object GroupHeader5: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 1084.725110000000000000
        Width = 740.787880000000000000
        Condition = 'job."employee_id"'
        object Memo157: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Work Experience')
          ParentFont = False
        end
        object Memo153: TfrxMemoView
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Startdate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo154: TfrxMemoView
          Left = 113.385900000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Enddate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo155: TfrxMemoView
          Left = 226.771800000000000000
          Top = 52.913420000000000000
          Width = 181.417366770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Company Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo156: TfrxMemoView
          Left = 408.189240000000000000
          Top = 52.913420000000000000
          Width = 124.724416770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Posisi Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo158: TfrxMemoView
          Left = 532.913730000000000000
          Top = 52.913420000000000000
          Width = 207.874076770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Description')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData6: TfrxMasterData
        Height = 18.897650000000000000
        Top = 1315.276440000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset7
        DataSetName = 'training'
        RowCount = 0
        Stretched = True
        object Memo159: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset7
          DataSetName = 'training'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[training."startdate"]')
          ParentFont = False
        end
        object Memo165: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 113.385900000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset7
          DataSetName = 'training'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[training."enddate"]')
          ParentFont = False
        end
        object Memo166: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 347.716760000000000000
          Width = 132.283476770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset7
          DataSetName = 'training'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[training."name"]')
          ParentFont = False
        end
        object Memo167: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 480.000310000000000000
          Width = 83.149586770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset7
          DataSetName = 'training'
          DisplayFormat.FormatStr = '%2.2n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[training."score"]')
          ParentFont = False
        end
        object Memo168: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 563.149970000000000000
          Width = 177.637836770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset7
          DataSetName = 'training'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[training."description"]')
          ParentFont = False
        end
        object Memo210: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 226.771800000000000000
          Width = 120.944886770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'companyname'
          DataSet = frxDBDataset7
          DataSetName = 'training'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[training."companyname"]')
          ParentFont = False
        end
      end
      object GroupHeader6: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 1220.788190000000000000
        Width = 740.787880000000000000
        Condition = 'training."employee_id"'
        object Memo169: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Training History')
          ParentFont = False
        end
        object Memo170: TfrxMemoView
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Startdate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo171: TfrxMemoView
          Left = 113.385900000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Enddate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo172: TfrxMemoView
          Left = 347.716760000000000000
          Top = 52.913420000000000000
          Width = 132.283476770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Training Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo173: TfrxMemoView
          Left = 480.000310000000000000
          Top = 52.913420000000000000
          Width = 83.149586770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Score')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo174: TfrxMemoView
          Left = 563.149970000000000000
          Top = 52.913420000000000000
          Width = 177.637836770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Description')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo211: TfrxMemoView
          Left = 226.771800000000000000
          Top = 52.913420000000000000
          Width = 120.944886770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Company Name')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData7: TfrxMasterData
        Height = 18.897650000000000000
        Top = 1451.339520000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset6
        DataSetName = 'education'
        RowCount = 0
        Stretched = True
        object Memo175: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset6
          DataSetName = 'education'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[education."startdate"]')
          ParentFont = False
        end
        object Memo176: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 113.385900000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset6
          DataSetName = 'education'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[education."enddate"]')
          ParentFont = False
        end
        object Memo177: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 226.771800000000000000
          Width = 188.976426770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset6
          DataSetName = 'education'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[education."institution"]')
          ParentFont = False
        end
        object Memo178: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 415.748300000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset6
          DataSetName = 'education'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[education."city"]')
          ParentFont = False
        end
        object Memo179: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 529.134200000000000000
          Width = 132.283476770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset6
          DataSetName = 'education'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[education."jurusan"]')
          ParentFont = False
        end
        object Memo186: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 661.417750000000000000
          Width = 79.370056770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataSet = frxDBDataset6
          DataSetName = 'education'
          DisplayFormat.FormatStr = '%2.2n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[education."ipk"]')
          ParentFont = False
        end
      end
      object GroupHeader7: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 1356.851270000000000000
        Width = 740.787880000000000000
        Condition = 'education."employee_id"'
        object Memo180: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Education History')
          ParentFont = False
        end
        object Memo181: TfrxMemoView
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Startdate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo182: TfrxMemoView
          Left = 113.385900000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Enddate')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo183: TfrxMemoView
          Left = 226.771800000000000000
          Top = 52.913420000000000000
          Width = 188.976426770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Institution Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo184: TfrxMemoView
          Left = 415.748300000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'City')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo185: TfrxMemoView
          Left = 529.134200000000000000
          Top = 52.913420000000000000
          Width = 132.283476770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Jurusan')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo187: TfrxMemoView
          Left = 661.417750000000000000
          Top = 52.913420000000000000
          Width = 79.370056770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'IPK')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData8: TfrxMasterData
        Height = 18.897650000000000000
        Top = 1587.402600000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset8
        DataSetName = 'reward'
        RowCount = 0
        Stretched = True
        object Memo188: TfrxMemoView
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'tdate'
          DataSet = frxDBDataset8
          DataSetName = 'reward'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[reward."tdate"]')
          ParentFont = False
        end
        object Memo190: TfrxMemoView
          Left = 113.385900000000000000
          Width = 200.315016770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'name'
          DataSet = frxDBDataset8
          DataSetName = 'reward'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[reward."name"]')
          ParentFont = False
        end
        object Memo192: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 468.661720000000000000
          Width = 272.126086770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'description'
          DataSet = frxDBDataset8
          DataSetName = 'reward'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[reward."description"]')
          ParentFont = False
        end
        object Memo189: TfrxMemoView
          Left = 313.700990000000000000
          Width = 154.960656770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'sknumber'
          DataSet = frxDBDataset8
          DataSetName = 'reward'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[reward."sknumber"]')
          ParentFont = False
        end
      end
      object GroupHeader8: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 1492.914350000000000000
        Width = 740.787880000000000000
        Condition = 'reward."employee_id"'
        object Memo194: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Reward History')
          ParentFont = False
        end
        object Memo195: TfrxMemoView
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Date')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo197: TfrxMemoView
          Left = 113.385900000000000000
          Top = 52.913420000000000000
          Width = 200.315016770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Reward Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo198: TfrxMemoView
          Left = 313.700990000000000000
          Top = 52.913420000000000000
          Width = 154.960656770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'SK Number')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo199: TfrxMemoView
          Left = 468.661720000000000000
          Top = 52.913420000000000000
          Width = 272.126086770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Description')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object MasterData9: TfrxMasterData
        Height = 18.897650000000000000
        Top = 1723.465680000000000000
        Width = 740.787880000000000000
        DataSet = frxDBDataset9
        DataSetName = 'punishment'
        RowCount = 0
        Stretched = True
        object Memo201: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'tdate'
          DataSet = frxDBDataset9
          DataSetName = 'punishment'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[punishment."tdate"]')
          ParentFont = False
        end
        object Memo202: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 113.385900000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'validthrough'
          DataSet = frxDBDataset9
          DataSetName = 'punishment'
          DisplayFormat.FormatStr = 'DDD, dd mmm yyyy'
          DisplayFormat.Kind = fkDateTime
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[punishment."validthrough"]')
          ParentFont = False
        end
        object Memo191: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 226.771800000000000000
          Width = 177.637836770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'name'
          DataSet = frxDBDataset9
          DataSetName = 'punishment'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[punishment."name"]')
          ParentFont = False
        end
        object Memo193: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 529.134200000000000000
          Width = 211.653606770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'description'
          DataSet = frxDBDataset9
          DataSetName = 'punishment'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[punishment."description"]')
          ParentFont = False
        end
        object Memo196: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 404.409710000000000000
          Width = 124.724416770000000000
          Height = 18.897650000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'sknumber'
          DataSet = frxDBDataset9
          DataSetName = 'punishment'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[punishment."sknumber"]')
          ParentFont = False
        end
      end
      object GroupHeader9: TfrxGroupHeader
        Height = 71.811070000000000000
        Top = 1628.977430000000000000
        Width = 740.787880000000000000
        Condition = 'punishment."employee_id"'
        object Memo207: TfrxMemoView
          Top = 22.677180000000000000
          Width = 740.787880000000000000
          Height = 22.677180000000000000
          ShowHint = False
          Color = clMenuText
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWhite
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Memo.UTF8W = (
            'Punishment History')
          ParentFont = False
        end
        object Memo208: TfrxMemoView
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Startfrom')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo209: TfrxMemoView
          Left = 113.385900000000000000
          Top = 52.913420000000000000
          Width = 113.385826770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Validthrough')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo200: TfrxMemoView
          Left = 226.771800000000000000
          Top = 52.913420000000000000
          Width = 177.637836770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Reward Name')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo203: TfrxMemoView
          Left = 404.409710000000000000
          Top = 52.913420000000000000
          Width = 124.724416770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'SK Number')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo204: TfrxMemoView
          Left = 529.134200000000000000
          Top = 52.913420000000000000
          Width = 211.653606770000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Tahoma'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'Description')
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
      'select p.*, '
      'c.name as companyname, '
      'd.name as divisionname, '
      'w.name as workareaname,'
      'po.name as positionname,'
      'g.name as gradename,'
      'es.name as employeestatusname,'
      'j.name as jamsostekname, t.name as taxname,'
      'b.name as bankname, o.name as overtimename'
      'from m_employee p'
      'left join m_company c on p.company_id = c.company_id'
      'left join m_division d on p.division_id = d.division_id'
      'left join m_workarea w on p.workarea_id = w.workarea_id'
      'left join m_position po on p.position_id = po.position_id'
      'left join m_grade g on p.grade_id = g.grade_id'
      
        'left join m_employeestatus es on p.employeestatus_id = es.employ' +
        'eestatus_id'
      'left join m_jamsostek j on p.jamsostek_id = j.jamsostek_id'
      'left join m_tax t on p.taxtype = t.tax_id'
      'left join m_bank b on p.bank_id = b.bank_id'
      'left join m_overtime o on p.overtime_id = o.overtime_id'
      'where p.employee_id=43'
      'order by p.nip')
    Params = <>
    Left = 72
    Top = 40
  end
  object DS_Laporan: TDataSource
    DataSet = Q_Laporan
    Left = 104
    Top = 40
  end
  object frxDBDataset1: TfrxDBDataset
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
      'w.name as workareaname,'
      'po.name as positionname,'
      'g.name as gradename,'
      'es.name as employeestatusname'
      'from m_employee_mutation p'
      'left join m_company c on p.company_id = c.company_id'
      'left join m_division d on p.division_id = d.division_id'
      'left join m_workarea w on p.workarea_id = w.workarea_id'
      'left join m_position po on p.position_id = po.position_id'
      'left join m_grade g on p.grade_id = g.grade_id'
      
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
end
