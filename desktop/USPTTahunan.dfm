object FrmSPTTahunan: TFrmSPTTahunan
  Left = 0
  Top = 0
  Caption = 'CaptionForm'
  ClientHeight = 664
  ClientWidth = 1540
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -14
  Font.Name = 'Tahoma'
  Font.Style = []
  FormStyle = fsMDIChild
  OldCreateOrder = False
  Visible = True
  WindowState = wsMaximized
  OnClose = FormClose
  OnCreate = FormCreate
  PixelsPerInch = 120
  TextHeight = 17
  object PageControl: TcxPageControl
    Left = 0
    Top = 54
    Width = 1540
    Height = 610
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    Align = alClient
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -17
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 0
    Properties.ActivePage = TabMaster
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 606
    ClientRectLeft = 4
    ClientRectRight = 1536
    ClientRectTop = 33
    object TabMaster: TcxTabSheet
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Caption = 'Master (F2)'
      ImageIndex = 1
      object GRID_MASTER: TcxGrid
        Left = 0
        Top = 0
        Width = 1532
        Height = 573
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -17
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 65
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 16
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 7
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
          object MASTERspta1_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'spta1_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 0
            Position.RowIndex = 0
          end
          object MASTERmasapajak: TcxGridDBBandedColumn
            DataBinding.FieldName = 'masapajak'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 1
            Position.RowIndex = 0
          end
          object MASTERtahunpajak: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tahunpajak'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 2
            Position.RowIndex = 0
          end
          object MASTERpembetulan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pembetulan'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 3
            Position.RowIndex = 0
          end
          object MASTERnomor: TcxGridDBBandedColumn
            DataBinding.FieldName = 'nomor'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 4
            Position.RowIndex = 0
          end
          object MASTERmasaawal: TcxGridDBBandedColumn
            DataBinding.FieldName = 'masaawal'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 5
            Position.RowIndex = 0
          end
          object MASTERmasaakhir: TcxGridDBBandedColumn
            DataBinding.FieldName = 'masaakhir'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 6
            Position.RowIndex = 0
          end
          object MASTERnpwp: TcxGridDBBandedColumn
            DataBinding.FieldName = 'npwp'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 7
            Position.RowIndex = 0
          end
          object MASTERnip: TcxGridDBBandedColumn
            DataBinding.FieldName = 'nip'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 8
            Position.RowIndex = 0
          end
          object MASTERname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'name'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 9
            Position.RowIndex = 0
          end
          object MASTERalamat: TcxGridDBBandedColumn
            DataBinding.FieldName = 'alamat'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 10
            Position.RowIndex = 0
          end
          object MASTERjeniskelamin: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jeniskelamin'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 11
            Position.RowIndex = 0
          end
          object MASTERstatusptkp: TcxGridDBBandedColumn
            DataBinding.FieldName = 'statusptkp'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 12
            Position.RowIndex = 0
          end
          object MASTERjumlahtanggungan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jumlahtanggungan'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 13
            Position.RowIndex = 0
          end
          object MASTERnamajabatan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'namajabatan'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 14
            Position.RowIndex = 0
          end
          object MASTERwpluarnegeri: TcxGridDBBandedColumn
            DataBinding.FieldName = 'wpluarnegeri'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 15
            Position.RowIndex = 0
          end
          object MASTERkodenegara: TcxGridDBBandedColumn
            DataBinding.FieldName = 'kodenegara'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 16
            Position.RowIndex = 0
          end
          object MASTERkodepajak: TcxGridDBBandedColumn
            DataBinding.FieldName = 'kodepajak'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 17
            Position.RowIndex = 0
          end
          object MASTERgaji: TcxGridDBBandedColumn
            DataBinding.FieldName = 'gaji'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 18
            Position.RowIndex = 0
          end
          object MASTERtunjanganpph: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tunjanganpph'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 19
            Position.RowIndex = 0
          end
          object MASTERtunjanganlain: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tunjanganlain'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 20
            Position.RowIndex = 0
          end
          object MASTERhonor: TcxGridDBBandedColumn
            DataBinding.FieldName = 'honor'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 21
            Position.RowIndex = 0
          end
          object MASTERpremiasuransi: TcxGridDBBandedColumn
            DataBinding.FieldName = 'premiasuransi'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 22
            Position.RowIndex = 0
          end
          object MASTERnatura: TcxGridDBBandedColumn
            DataBinding.FieldName = 'natura'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 23
            Position.RowIndex = 0
          end
          object MASTERtotalpenghasilan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'totalpenghasilan'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 25
            Position.RowIndex = 0
          end
          object MASTERbonusthr: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bonusthr'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 26
            Position.RowIndex = 0
          end
          object MASTERbruto: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bruto'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 27
            Position.RowIndex = 0
          end
          object MASTERbjab: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bjab'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 28
            Position.RowIndex = 0
          end
          object MASTERbjab2: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bjab2'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 29
            Position.RowIndex = 0
          end
          object MASTERbiayajabatan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'biayajabatan'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 30
            Position.RowIndex = 0
          end
          object MASTERjhtemployee: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jhtemployee'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 31
            Position.RowIndex = 0
          end
          object MASTERjumlahpengurangan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jumlahpengurangan'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 32
            Position.RowIndex = 0
          end
          object MASTERnetto: TcxGridDBBandedColumn
            DataBinding.FieldName = 'netto'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 33
            Position.RowIndex = 0
          end
          object MASTERnettosebelum: TcxGridDBBandedColumn
            DataBinding.FieldName = 'nettosebelum'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 34
            Position.RowIndex = 0
          end
          object MASTERtotalnetto: TcxGridDBBandedColumn
            DataBinding.FieldName = 'totalnetto'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 35
            Position.RowIndex = 0
          end
          object MASTERptkp: TcxGridDBBandedColumn
            DataBinding.FieldName = 'ptkp'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 36
            Position.RowIndex = 0
          end
          object MASTERpkp: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pkp'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 37
            Position.RowIndex = 0
          end
          object MASTERpkpround: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pkpround'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 38
            Position.RowIndex = 0
          end
          object MASTERpph21: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pph21'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 39
            Position.RowIndex = 0
          end
          object MASTERpph21sebelum: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pph21sebelum'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 40
            Position.RowIndex = 0
          end
          object MASTERpph21terutang: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pph21terutang'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 41
            Position.RowIndex = 0
          end
          object MASTERpph21sudahdibayar: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pph21sudahdibayar'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 42
            Position.RowIndex = 0
          end
          object MASTERpph21selisih: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pph21selisih'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 43
            Position.RowIndex = 0
          end
          object MASTERstatuspindah: TcxGridDBBandedColumn
            DataBinding.FieldName = 'statuspindah'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 44
            Position.RowIndex = 0
          end
          object MASTERnpwppemotong: TcxGridDBBandedColumn
            DataBinding.FieldName = 'npwppemotong'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 45
            Position.RowIndex = 0
          end
          object MASTERnamapemotong: TcxGridDBBandedColumn
            DataBinding.FieldName = 'namapemotong'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 46
            Position.RowIndex = 0
          end
          object MASTERtdate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tdate'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 47
            Position.RowIndex = 0
          end
          object MASTERtaxtype: TcxGridDBBandedColumn
            DataBinding.FieldName = 'taxtype'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 48
            Position.RowIndex = 0
          end
          object MASTERemployee_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employee_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 50
            Position.RowIndex = 0
          end
          object MASTERcompany_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'company_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 53
            Position.RowIndex = 0
          end
          object MASTERdivision_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'division_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 54
            Position.RowIndex = 0
          end
          object MASTERdepartment_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'department_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 55
            Position.RowIndex = 0
          end
          object MASTERunit_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'unit_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 56
            Position.RowIndex = 0
          end
          object MASTERworkarea_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'workarea_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 57
            Position.RowIndex = 0
          end
          object MASTERposition_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'position_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 58
            Position.RowIndex = 0
          end
          object MASTERgrade_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'grade_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 59
            Position.RowIndex = 0
          end
          object MASTERemployeestatus_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employeestatus_id'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 60
            Position.RowIndex = 0
          end
          object MASTERuseradded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useradded'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 62
            Position.RowIndex = 0
          end
          object MASTERdateadded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateadded'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 63
            Position.RowIndex = 0
          end
          object MASTERuseredited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useredited'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 64
            Position.RowIndex = 0
          end
          object MASTERdateedited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateedited'
            MinWidth = 26
            Width = 92
            Position.BandIndex = 0
            Position.ColIndex = 65
            Position.RowIndex = 0
          end
          object MASTERthrbonustaxallowance: TcxGridDBBandedColumn
            DataBinding.FieldName = 'thrbonustaxallowance'
            MinWidth = 26
            Position.BandIndex = 0
            Position.ColIndex = 24
            Position.RowIndex = 0
          end
          object MASTERtaxirregular: TcxGridDBBandedColumn
            DataBinding.FieldName = 'taxirregular'
            MinWidth = 26
            Position.BandIndex = 0
            Position.ColIndex = 49
            Position.RowIndex = 0
          end
          object MASTERlevel_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'level_id'
            MinWidth = 26
            Position.BandIndex = 0
            Position.ColIndex = 61
            Position.RowIndex = 0
          end
          object MASTERnpwpcompany: TcxGridDBBandedColumn
            DataBinding.FieldName = 'npwpcompany'
            MinWidth = 26
            Width = 262
            Position.BandIndex = 0
            Position.ColIndex = 51
            Position.RowIndex = 0
          end
          object MASTERnamacompany: TcxGridDBBandedColumn
            DataBinding.FieldName = 'namacompany'
            MinWidth = 26
            Width = 262
            Position.BandIndex = 0
            Position.ColIndex = 52
            Position.RowIndex = 0
          end
        end
        object GRID_MASTERLevel1: TcxGridLevel
          GridView = MASTER
        end
      end
    end
  end
  object txtID: TEdit
    Left = 460
    Top = 3
    Width = 159
    Height = 25
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    TabOrder = 1
    Text = 'txtID'
    Visible = False
  end
  object txtModuleName: TEdit
    Left = 649
    Top = 3
    Width = 158
    Height = 25
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    TabOrder = 2
    Text = 'Edit1'
    Visible = False
  end
  object Panel2: TPanel
    Left = 0
    Top = 0
    Width = 1540
    Height = 54
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    Align = alTop
    BevelOuter = bvNone
    Color = 65021
    ParentBackground = False
    TabOrder = 3
    object LblJudul: TLabel
      AlignWithMargins = True
      Left = 13
      Top = 9
      Width = 368
      Height = 41
      Margins.Left = 13
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alLeft
      AutoSize = False
      Caption = 'LblJudul'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -23
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object LblEnddate: TLabel
      AlignWithMargins = True
      Left = 754
      Top = 17
      Width = 51
      Height = 33
      Margins.Left = 4
      Margins.Top = 17
      Margins.Right = 0
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Enddate'
      ExplicitLeft = 755
      ExplicitHeight = 17
    end
    object LblStartdate: TLabel
      AlignWithMargins = True
      Left = 489
      Top = 17
      Width = 57
      Height = 33
      Margins.Left = 4
      Margins.Top = 17
      Margins.Right = 0
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Startdate'
      ExplicitLeft = 486
      ExplicitHeight = 17
    end
    object BtnClose: TcxButton
      AlignWithMargins = True
      Left = 1443
      Top = 4
      Width = 93
      Height = 46
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = 'C&lose'
      DropDownMenu = ItemMenu
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
      Left = 1324
      Top = 4
      Width = 111
      Height = 46
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Print'
      DropDownMenu = ItemPrint
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
      Left = 1199
      Top = 4
      Width = 117
      Height = 46
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Menu'
      DropDownMenu = ItemMenu
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
      Left = 1013
      Top = 4
      Width = 178
      Height = 46
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Date Template'
      DropDownMenu = ItemDate
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
      OptionsImage.Spacing = 5
      TabOrder = 3
    end
    object BtnEnddate: TcxDateEdit
      AlignWithMargins = True
      Left = 809
      Top = 9
      Hint = 'Enddate'
      Margins.Left = 4
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 9
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
      Style.Font.Height = -17
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 4
      OnKeyDown = BtnEnddateKeyDown
      Width = 196
    end
    object BtnStartdate: TcxDateEdit
      AlignWithMargins = True
      Left = 550
      Top = 9
      Hint = 'Startdate'
      Margins.Left = 4
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 9
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
      Style.Font.Height = -17
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 5
      OnKeyDown = BtnStartdateKeyDown
      Width = 196
    end
  end
  object Layout: TdxLayoutControl
    Left = 607
    Top = 50
    Width = 53
    Height = 34
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    TabOrder = 4
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
      'select * from t_spta1 limit 10')
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
      Visible = False
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
    object N1CreateTHR1: TMenuItem
      Caption = '&1 Create Bukti Potong 1721 A1'
      OnClick = N1CreateTHR1Click
    end
    object N2ImportBuktiPotong1721A11: TMenuItem
      Caption = '&2 Export CSV Bukti Potong 1721 A1'
      OnClick = N2ImportBuktiPotong1721A11Click
    end
  end
  object ItemPrint: TPopupMenu
    Left = 376
    object Print1721A1toExcel1: TMenuItem
      Caption = '&1 Print 1721 A1 to Excel'
      OnClick = Print1721A1toExcel1Click
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
  object Q_Laporan: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from m_salon'
      'limit 0')
    Params = <>
    Left = 104
    Top = 32
  end
  object frxDBDataset1: TfrxDBDataset
    UserName = 'master'
    CloseDataSource = False
    DataSet = Q_Laporan
    BCDToCurrency = False
    Left = 136
    Top = 32
  end
  object FR_Report: TfrxReport
    Version = '5.4.6'
    DotMatrixReport = False
    IniFile = '\Software\Fast Reports'
    PreviewOptions.Buttons = [pbPrint, pbLoad, pbSave, pbExport, pbZoom, pbFind, pbOutline, pbPageSetup, pbTools, pbEdit, pbNavigator, pbExportQuick]
    PreviewOptions.Zoom = 1.000000000000000000
    PrintOptions.Printer = 'Default'
    PrintOptions.PrintOnSheet = 0
    ReportOptions.CreateDate = 42091.395448784720000000
    ReportOptions.LastChange = 42091.395448784720000000
    ScriptLanguage = 'PascalScript'
    ScriptText.Strings = (
      ''
      'begin'
      ''
      'end.')
    Left = 168
    Top = 32
    Datasets = <>
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
      object ReportTitle1: TfrxReportTitle
        FillType = ftBrush
        Height = 22.677180000000000000
        Top = 18.897650000000000000
        Width = 740.787880000000000000
      end
      object MasterData1: TfrxMasterData
        FillType = ftBrush
        Height = 22.677180000000000000
        Top = 102.047310000000000000
        Width = 740.787880000000000000
        RowCount = 0
      end
      object PageFooter1: TfrxPageFooter
        FillType = ftBrush
        Height = 22.677180000000000000
        Top = 185.196970000000000000
        Width = 740.787880000000000000
        object Memo1: TfrxMemoView
          Left = 665.197280000000000000
          Width = 75.590600000000000000
          Height = 18.897650000000000000
          HAlign = haRight
          Memo.UTF8W = (
            '[Page#]')
        end
      end
    end
  end
  object dxLayoutLookAndFeelList1: TdxLayoutLookAndFeelList
    Left = 200
    object dxLayoutCxLookAndFeel1: TdxLayoutCxLookAndFeel
      LookAndFeel.SkinName = 'UserSkin'
      PixelsPerInch = 120
    end
  end
  object DS_Employee: TDataSource
    DataSet = Q_Employee
    Left = 128
    Top = 112
  end
  object Q_Employee: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 96
    Top = 112
  end
  object ApplicationEvents1: TApplicationEvents
    OnException = ApplicationEvents1Exception
    Left = 584
    Top = 256
  end
end
