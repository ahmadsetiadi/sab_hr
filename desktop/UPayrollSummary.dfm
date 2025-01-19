object FrmPayrollSummary: TFrmPayrollSummary
  Left = 0
  Top = 0
  Caption = 'CaptionForm'
  ClientHeight = 501
  ClientWidth = 900
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
    Width = 900
    Height = 460
    Align = alClient
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -15
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 0
    Properties.ActivePage = TabMaster
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 456
    ClientRectLeft = 4
    ClientRectRight = 896
    ClientRectTop = 29
    object TabMaster: TcxTabSheet
      Caption = 'Master (F2)'
      ImageIndex = 1
      object GRID_MASTER: TcxGrid
        Left = 0
        Top = 0
        Width = 892
        Height = 427
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -15
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
          OptionsView.IndicatorWidth = 11
          OptionsView.BandHeaders = False
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
          object MASTERsummary_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'summary_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 0
            Position.RowIndex = 0
          end
          object MASTERlevel: TcxGridDBBandedColumn
            DataBinding.FieldName = 'level'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 1
            Position.RowIndex = 0
          end
          object MASTERpayroll_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'payroll_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 3
            Position.RowIndex = 0
          end
          object MASTERtdate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tdate'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 5
            Position.RowIndex = 0
          end
          object MASTERstartdate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'startdate'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 6
            Position.RowIndex = 0
          end
          object MASTERenddate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'enddate'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 7
            Position.RowIndex = 0
          end
          object MASTERnip: TcxGridDBBandedColumn
            DataBinding.FieldName = 'nip'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 8
            Position.RowIndex = 0
          end
          object MASTERemployee_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employee_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 9
            Position.RowIndex = 0
          end
          object MASTERcompany_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'company_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 10
            Position.RowIndex = 0
          end
          object MASTERdivision_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'division_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 11
            Position.RowIndex = 0
          end
          object MASTERdepartment_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'department_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 12
            Position.RowIndex = 0
          end
          object MASTERworkarea_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'workarea_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 13
            Position.RowIndex = 0
          end
          object MASTERposition_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'position_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 14
            Position.RowIndex = 0
          end
          object MASTERlevel_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'level_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 15
            Position.RowIndex = 0
          end
          object MASTERemployeestatus_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employeestatus_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 17
            Position.RowIndex = 0
          end
          object MASTERjoindate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'joindate'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 18
            Position.RowIndex = 0
          end
          object MASTERresigndate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'resigndate'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 19
            Position.RowIndex = 0
          end
          object MASTERbankaccountnumber: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankaccountnumber'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 20
            Position.RowIndex = 0
          end
          object MASTERbankaccountname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankaccountname'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 21
            Position.RowIndex = 0
          end
          object MASTERharikerja: TcxGridDBBandedColumn
            DataBinding.FieldName = 'harikerja'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 22
            Position.RowIndex = 0
          end
          object MASTERmasuk: TcxGridDBBandedColumn
            DataBinding.FieldName = 'masuk'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 25
            Position.RowIndex = 0
          end
          object MASTERlibur: TcxGridDBBandedColumn
            DataBinding.FieldName = 'libur'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 27
            Position.RowIndex = 0
          end
          object MASTERlibur3: TcxGridDBBandedColumn
            DataBinding.FieldName = 'libur3'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 29
            Position.RowIndex = 0
          end
          object MASTERcuti: TcxGridDBBandedColumn
            DataBinding.FieldName = 'cuti'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 30
            Position.RowIndex = 0
          end
          object MASTERsakit: TcxGridDBBandedColumn
            DataBinding.FieldName = 'sakit'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 31
            Position.RowIndex = 0
          end
          object MASTERizin: TcxGridDBBandedColumn
            DataBinding.FieldName = 'izin'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 32
            Position.RowIndex = 0
          end
          object MASTERsakit2: TcxGridDBBandedColumn
            DataBinding.FieldName = 'sakit2'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 33
            Position.RowIndex = 0
          end
          object MASTERalpa: TcxGridDBBandedColumn
            DataBinding.FieldName = 'alpa'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 34
            Position.RowIndex = 0
          end
          object MASTERoff: TcxGridDBBandedColumn
            DataBinding.FieldName = 'off'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 35
            Position.RowIndex = 0
          end
          object MASTERbasejamsostek: TcxGridDBBandedColumn
            DataBinding.FieldName = 'basejamsostek'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 36
            Position.RowIndex = 0
          end
          object MASTERgajipokok: TcxGridDBBandedColumn
            DataBinding.FieldName = 'gajipokok'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 40
            Position.RowIndex = 0
          end
          object MASTERgajipokok_perhari: TcxGridDBBandedColumn
            DataBinding.FieldName = 'gajipokok_perhari'
            Width = 119
            Position.BandIndex = 0
            Position.ColIndex = 39
            Position.RowIndex = 0
          end
          object MASTERt_masakerja: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_masakerja'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 41
            Position.RowIndex = 0
          end
          object MASTERt_jabatan: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_jabatan'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 42
            Position.RowIndex = 0
          end
          object MASTERt_operasional: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_operasional'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 43
            Position.RowIndex = 0
          end
          object MASTERt_kehadiran: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_kehadiran'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 44
            Position.RowIndex = 0
          end
          object MASTERt_makan: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_makan'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 45
            Position.RowIndex = 0
          end
          object MASTERt_transport: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_transport'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 46
            Position.RowIndex = 0
          end
          object MASTERt_komunikasi: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_komunikasi'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 47
            Position.RowIndex = 0
          end
          object MASTERlembur2: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lembur2'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 49
            Position.RowIndex = 0
          end
          object MASTERlembur3: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lembur3'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 50
            Position.RowIndex = 0
          end
          object MASTERrapel: TcxGridDBBandedColumn
            DataBinding.FieldName = 'rapel'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 56
            Position.RowIndex = 0
          end
          object MASTERthr: TcxGridDBBandedColumn
            DataBinding.FieldName = 'thr'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 57
            Position.RowIndex = 0
          end
          object MASTERjkk: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jkk'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 61
            Position.RowIndex = 0
          end
          object MASTERadjust_jkk: TcxGridDBBandedColumn
            DataBinding.FieldName = 'adjust_jkk'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 62
            Position.RowIndex = 0
          end
          object MASTERjkm: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jkm'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 63
            Position.RowIndex = 0
          end
          object MASTERadjust_jkm: TcxGridDBBandedColumn
            DataBinding.FieldName = 'adjust_jkm'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 64
            Position.RowIndex = 0
          end
          object MASTERjhtcompany: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jhtcompany'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 65
            Position.RowIndex = 0
          end
          object MASTERadjust_jhtcompany: TcxGridDBBandedColumn
            DataBinding.FieldName = 'adjust_jhtcompany'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 66
            Position.RowIndex = 0
          end
          object MASTERbpjsks_company: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bpjsks_company'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 67
            Position.RowIndex = 0
          end
          object MASTERadjust_bpjsks_company: TcxGridDBBandedColumn
            DataBinding.FieldName = 'adjust_bpjsks_company'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 68
            Position.RowIndex = 0
          end
          object MASTERp_absen: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_absen'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 73
            Position.RowIndex = 0
          end
          object MASTERpinjaman: TcxGridDBBandedColumn
            DataBinding.FieldName = 'pinjaman'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 74
            Position.RowIndex = 0
          end
          object MASTERp_lain: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_lain'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 78
            Position.RowIndex = 0
          end
          object MASTERjhtemployee: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jhtemployee'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 79
            Position.RowIndex = 0
          end
          object MASTERadjust_jhtemployee: TcxGridDBBandedColumn
            DataBinding.FieldName = 'adjust_jhtemployee'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 80
            Position.RowIndex = 0
          end
          object MASTERbpjsks_employee: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bpjsks_employee'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 81
            Position.RowIndex = 0
          end
          object MASTERadjust_bpjsks_employee: TcxGridDBBandedColumn
            DataBinding.FieldName = 'adjust_bpjsks_employee'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 82
            Position.RowIndex = 0
          end
          object MASTERgross_salary: TcxGridDBBandedColumn
            DataBinding.FieldName = 'gross_salary'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 83
            Position.RowIndex = 0
          end
          object MASTERtotal_pendapatan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'total_pendapatan'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 84
            Position.RowIndex = 0
          end
          object MASTERtotal_potongan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'total_potongan'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 85
            Position.RowIndex = 0
          end
          object MASTERgrandtotal: TcxGridDBBandedColumn
            DataBinding.FieldName = 'grandtotal'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 86
            Position.RowIndex = 0
          end
          object MASTERrounding: TcxGridDBBandedColumn
            DataBinding.FieldName = 'rounding'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 87
            Position.RowIndex = 0
          end
          object MASTERtakehomepay: TcxGridDBBandedColumn
            DataBinding.FieldName = 'takehomepay'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 88
            Position.RowIndex = 0
          end
          object MASTERtaxallowance: TcxGridDBBandedColumn
            DataBinding.FieldName = 'taxallowance'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 89
            Position.RowIndex = 0
          end
          object MASTERtax21: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tax21'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 90
            Position.RowIndex = 0
          end
          object MASTERnpwpcompany: TcxGridDBBandedColumn
            DataBinding.FieldName = 'npwpcompany'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 96
            Position.RowIndex = 0
          end
          object MASTERbank_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bank_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 97
            Position.RowIndex = 0
          end
          object MASTERbankbranch: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankbranch'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 98
            Position.RowIndex = 0
          end
          object MASTERjamsostek_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'jamsostek_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 99
            Position.RowIndex = 0
          end
          object MASTERtaxtype: TcxGridDBBandedColumn
            DataBinding.FieldName = 'taxtype'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 100
            Position.RowIndex = 0
          end
          object MASTERtaxirregular: TcxGridDBBandedColumn
            DataBinding.FieldName = 'taxirregular'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 101
            Position.RowIndex = 0
          end
          object MASTERtaxfinal: TcxGridDBBandedColumn
            DataBinding.FieldName = 'taxfinal'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 102
            Position.RowIndex = 0
          end
          object MASTERnote: TcxGridDBBandedColumn
            DataBinding.FieldName = 'note'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 103
            Position.RowIndex = 0
          end
          object MASTERuseradded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useradded'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 104
            Position.RowIndex = 0
          end
          object MASTERdateadded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateadded'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 105
            Position.RowIndex = 0
          end
          object MASTERuseredited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useredited'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 106
            Position.RowIndex = 0
          end
          object MASTERdateedited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateedited'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 107
            Position.RowIndex = 0
          end
          object MASTERtipe: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tipe'
            Width = 138
            Position.BandIndex = 0
            Position.ColIndex = 2
            Position.RowIndex = 0
          end
          object MASTERp_makeup: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_makeup'
            Width = 120
            Position.BandIndex = 0
            Position.ColIndex = 75
            Position.RowIndex = 0
          end
          object MASTERp_mcu: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_mcu'
            Width = 120
            Position.BandIndex = 0
            Position.ColIndex = 76
            Position.RowIndex = 0
          end
          object MASTERp_seragam: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_seragam'
            Width = 120
            Position.BandIndex = 0
            Position.ColIndex = 77
            Position.RowIndex = 0
          end
          object MASTERdeptname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'deptname'
            Visible = False
            VisibleForCustomization = False
            Width = 100
            Position.BandIndex = 0
            Position.ColIndex = 108
            Position.RowIndex = 0
          end
          object MASTERempname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'empname'
            Visible = False
            VisibleForCustomization = False
            Width = 100
            Position.BandIndex = 0
            Position.ColIndex = 109
            Position.RowIndex = 0
          end
          object MASTERp_kehadiran: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_kehadiran'
            Position.BandIndex = 0
            Position.ColIndex = 69
            Position.RowIndex = 0
          end
          object MASTERp_makan: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_makan'
            Position.BandIndex = 0
            Position.ColIndex = 70
            Position.RowIndex = 0
          end
          object MASTERuang_cuti: TcxGridDBBandedColumn
            DataBinding.FieldName = 'uang_cuti'
            Position.BandIndex = 0
            Position.ColIndex = 59
            Position.RowIndex = 0
          end
          object MASTERuang_pisah: TcxGridDBBandedColumn
            DataBinding.FieldName = 'uang_pisah'
            Position.BandIndex = 0
            Position.ColIndex = 60
            Position.RowIndex = 0
          end
          object MASTERp_transport: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_transport'
            Position.BandIndex = 0
            Position.ColIndex = 71
            Position.RowIndex = 0
          end
          object MASTERtransferdate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'transferdate'
            Position.BandIndex = 0
            Position.ColIndex = 4
            Position.RowIndex = 0
          end
          object MASTERt_lain: TcxGridDBBandedColumn
            DataBinding.FieldName = 't_lain'
            Position.BandIndex = 0
            Position.ColIndex = 48
            Position.RowIndex = 0
          end
          object MASTERsisa_cuti: TcxGridDBBandedColumn
            DataBinding.FieldName = 'sisa_cuti'
            Position.BandIndex = 0
            Position.ColIndex = 58
            Position.RowIndex = 0
          end
          object MASTERnpwpemployee: TcxGridDBBandedColumn
            DataBinding.FieldName = 'npwpemployee'
            Width = 120
            Position.BandIndex = 0
            Position.ColIndex = 94
            Position.RowIndex = 0
          end
          object MASTERptkp: TcxGridDBBandedColumn
            DataBinding.FieldName = 'ptkp'
            Position.BandIndex = 0
            Position.ColIndex = 95
            Position.RowIndex = 0
          end
          object MASTERp_komunikasi: TcxGridDBBandedColumn
            DataBinding.FieldName = 'p_komunikasi'
            Position.BandIndex = 0
            Position.ColIndex = 72
            Position.RowIndex = 0
          end
          object MASTERcodestatus: TcxGridDBBandedColumn
            DataBinding.FieldName = 'codestatus'
            MinWidth = 15
            Width = 76
            Position.BandIndex = 0
            Position.ColIndex = 110
            Position.RowIndex = 0
          end
          object MASTERcodelevel: TcxGridDBBandedColumn
            DataBinding.FieldName = 'codelevel'
            MinWidth = 15
            Width = 76
            Position.BandIndex = 0
            Position.ColIndex = 111
            Position.RowIndex = 0
          end
          object MASTERcode: TcxGridDBBandedColumn
            DataBinding.FieldName = 'code'
            MinWidth = 15
            Width = 76
            Position.BandIndex = 0
            Position.ColIndex = 91
            Position.RowIndex = 0
          end
          object MASTERbasicsalary: TcxGridDBBandedColumn
            DataBinding.FieldName = 'basicsalary'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 92
            Position.RowIndex = 0
          end
          object MASTERovertime: TcxGridDBBandedColumn
            DataBinding.FieldName = 'overtime'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 93
            Position.RowIndex = 0
          end
          object MASTERmasuk4: TcxGridDBBandedColumn
            DataBinding.FieldName = 'masuk4'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 23
            Position.RowIndex = 0
          end
          object MASTERlibur4: TcxGridDBBandedColumn
            DataBinding.FieldName = 'libur4'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 26
            Position.RowIndex = 0
          end
          object MASTERlibur3_4: TcxGridDBBandedColumn
            DataBinding.FieldName = 'libur3_4'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 28
            Position.RowIndex = 0
          end
          object MASTERgajipokok_4jam: TcxGridDBBandedColumn
            DataBinding.FieldName = 'gajipokok_4jam'
            MinWidth = 15
            Width = 115
            Position.BandIndex = 0
            Position.ColIndex = 37
            Position.RowIndex = 0
          end
          object MASTERlemburrapel: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lemburrapel'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 51
            Position.RowIndex = 0
          end
          object MASTERlembur4: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lembur4'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 52
            Position.RowIndex = 0
          end
          object MASTERlembur8: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lembur8'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 53
            Position.RowIndex = 0
          end
          object MASTERlebaran4: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lebaran4'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 54
            Position.RowIndex = 0
          end
          object MASTERlebaran8: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lebaran8'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 55
            Position.RowIndex = 0
          end
          object MASTERlvl_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'lvl_id'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 16
            Position.RowIndex = 0
          end
          object MASTERmasuk5: TcxGridDBBandedColumn
            DataBinding.FieldName = 'masuk5'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 24
            Position.RowIndex = 0
          end
          object MASTERgajipokok_5jam: TcxGridDBBandedColumn
            DataBinding.FieldName = 'gajipokok_5jam'
            MinWidth = 15
            Position.BandIndex = 0
            Position.ColIndex = 38
            Position.RowIndex = 0
          end
        end
        object GRID_MASTERLevel1: TcxGridLevel
          GridView = MASTER
        end
      end
    end
    object TabTransfer: TcxTabSheet
      Caption = 'Transfer'
      ImageIndex = 1
      object GRID_TRANSFER: TcxGrid
        Left = 0
        Top = 0
        Width = 892
        Height = 427
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -15
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object TRANSFER: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_Transer
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
          OptionsData.CancelOnExit = False
          OptionsData.Deleting = False
          OptionsData.DeletingConfirmation = False
          OptionsData.Editing = False
          OptionsData.Inserting = False
          OptionsSelection.MultiSelect = True
          OptionsSelection.CellMultiSelect = True
          OptionsSelection.InvertSelect = False
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 11
          OptionsView.BandHeaders = False
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
          object TRANSFERtransferbank_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'transferbank_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 0
            Position.RowIndex = 0
          end
          object TRANSFERpayroll_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'payroll_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 2
            Position.RowIndex = 0
          end
          object TRANSFERtdate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tdate'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 3
            Position.RowIndex = 0
          end
          object TRANSFERtipe: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tipe'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 4
            Position.RowIndex = 0
          end
          object TRANSFERbankaccountnumber: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankaccountnumber'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 5
            Position.RowIndex = 0
          end
          object TRANSFERtakehomepay: TcxGridDBBandedColumn
            DataBinding.FieldName = 'takehomepay'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 6
            Position.RowIndex = 0
          end
          object TRANSFERnip: TcxGridDBBandedColumn
            DataBinding.FieldName = 'nip'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 7
            Position.RowIndex = 0
          end
          object TRANSFERemployee_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employee_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 8
            Position.RowIndex = 0
          end
          object TRANSFERdepartment_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'department_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 9
            Position.RowIndex = 0
          end
          object TRANSFERtdate2: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tdate2'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 10
            Position.RowIndex = 0
          end
          object TRANSFERbankaccountname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankaccountname'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 11
            Position.RowIndex = 0
          end
          object TRANSFERdeptname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'deptname'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 12
            Position.RowIndex = 0
          end
          object TRANSFERempname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'empname'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 13
            Position.RowIndex = 0
          end
          object TRANSFERtakehomepay2: TcxGridDBBandedColumn
            DataBinding.FieldName = 'takehomepay2'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 14
            Position.RowIndex = 0
          end
          object TRANSFERt100000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't100000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 15
            Position.RowIndex = 0
          end
          object TRANSFERt50000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't50000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 16
            Position.RowIndex = 0
          end
          object TRANSFERt20000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't20000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 17
            Position.RowIndex = 0
          end
          object TRANSFERt10000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't10000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 18
            Position.RowIndex = 0
          end
          object TRANSFERt5000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't5000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 19
            Position.RowIndex = 0
          end
          object TRANSFERt2000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't2000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 20
            Position.RowIndex = 0
          end
          object TRANSFERt1000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't1000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 21
            Position.RowIndex = 0
          end
          object TRANSFERt500: TcxGridDBBandedColumn
            DataBinding.FieldName = 't500'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 22
            Position.RowIndex = 0
          end
          object TRANSFERt200: TcxGridDBBandedColumn
            DataBinding.FieldName = 't200'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 23
            Position.RowIndex = 0
          end
          object TRANSFERt100: TcxGridDBBandedColumn
            DataBinding.FieldName = 't100'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 24
            Position.RowIndex = 0
          end
          object TRANSFERdescription: TcxGridDBBandedColumn
            DataBinding.FieldName = 'description'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 25
            Position.RowIndex = 0
          end
          object TRANSFERbank_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bank_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 26
            Position.RowIndex = 0
          end
          object TRANSFERbankbranch: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankbranch'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 27
            Position.RowIndex = 0
          end
          object TRANSFERcompany_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'company_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 28
            Position.RowIndex = 0
          end
          object TRANSFERdivision_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'division_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 29
            Position.RowIndex = 0
          end
          object TRANSFERworkarea_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'workarea_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 30
            Position.RowIndex = 0
          end
          object TRANSFERposition_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'position_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 31
            Position.RowIndex = 0
          end
          object TRANSFERlevel_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'level_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 32
            Position.RowIndex = 0
          end
          object TRANSFERemployeestatus_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employeestatus_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 33
            Position.RowIndex = 0
          end
          object TRANSFERuseradded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useradded'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 34
            Position.RowIndex = 0
          end
          object TRANSFERdateadded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateadded'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 35
            Position.RowIndex = 0
          end
          object TRANSFERuseredited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useredited'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 36
            Position.RowIndex = 0
          end
          object TRANSFERdateedited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateedited'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 37
            Position.RowIndex = 0
          end
          object TRANSFERlevel: TcxGridDBBandedColumn
            DataBinding.FieldName = 'level'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 1
            Position.RowIndex = 0
          end
        end
        object GRID_TRANSFERLevel1: TcxGridLevel
          GridView = TRANSFER
        end
      end
    end
    object TabCash: TcxTabSheet
      Caption = 'Cash'
      ImageIndex = 2
      object GRID_CASH: TcxGrid
        Left = 0
        Top = 0
        Width = 892
        Height = 427
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -15
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object CASH: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_Cash
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
          OptionsView.IndicatorWidth = 11
          OptionsView.BandHeaders = False
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
          object CASHtransferbank_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'transferbank_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 0
            Position.RowIndex = 0
          end
          object CASHpayroll_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'payroll_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 2
            Position.RowIndex = 0
          end
          object CASHtdate: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tdate'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 3
            Position.RowIndex = 0
          end
          object CASHtipe: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tipe'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 4
            Position.RowIndex = 0
          end
          object CASHbankaccountnumber: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankaccountnumber'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 5
            Position.RowIndex = 0
          end
          object CASHtakehomepay: TcxGridDBBandedColumn
            DataBinding.FieldName = 'takehomepay'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 6
            Position.RowIndex = 0
          end
          object CASHnip: TcxGridDBBandedColumn
            DataBinding.FieldName = 'nip'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 7
            Position.RowIndex = 0
          end
          object CASHemployee_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employee_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 8
            Position.RowIndex = 0
          end
          object CASHdepartment_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'department_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 9
            Position.RowIndex = 0
          end
          object CASHtdate2: TcxGridDBBandedColumn
            DataBinding.FieldName = 'tdate2'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 10
            Position.RowIndex = 0
          end
          object CASHbankaccountname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankaccountname'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 11
            Position.RowIndex = 0
          end
          object CASHdeptname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'deptname'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 12
            Position.RowIndex = 0
          end
          object CASHempname: TcxGridDBBandedColumn
            DataBinding.FieldName = 'empname'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 13
            Position.RowIndex = 0
          end
          object CASHtakehomepay2: TcxGridDBBandedColumn
            DataBinding.FieldName = 'takehomepay2'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 14
            Position.RowIndex = 0
          end
          object CASHt100000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't100000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 15
            Position.RowIndex = 0
          end
          object CASHt50000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't50000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 16
            Position.RowIndex = 0
          end
          object CASHt20000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't20000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 17
            Position.RowIndex = 0
          end
          object CASHt10000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't10000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 18
            Position.RowIndex = 0
          end
          object CASHt5000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't5000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 19
            Position.RowIndex = 0
          end
          object CASHt2000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't2000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 20
            Position.RowIndex = 0
          end
          object CASHt1000: TcxGridDBBandedColumn
            DataBinding.FieldName = 't1000'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 21
            Position.RowIndex = 0
          end
          object CASHt500: TcxGridDBBandedColumn
            DataBinding.FieldName = 't500'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 22
            Position.RowIndex = 0
          end
          object CASHt200: TcxGridDBBandedColumn
            DataBinding.FieldName = 't200'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 23
            Position.RowIndex = 0
          end
          object CASHt100: TcxGridDBBandedColumn
            DataBinding.FieldName = 't100'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 24
            Position.RowIndex = 0
          end
          object CASHdescription: TcxGridDBBandedColumn
            DataBinding.FieldName = 'description'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 25
            Position.RowIndex = 0
          end
          object CASHbank_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bank_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 26
            Position.RowIndex = 0
          end
          object CASHbankbranch: TcxGridDBBandedColumn
            DataBinding.FieldName = 'bankbranch'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 27
            Position.RowIndex = 0
          end
          object CASHcompany_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'company_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 28
            Position.RowIndex = 0
          end
          object CASHdivision_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'division_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 29
            Position.RowIndex = 0
          end
          object CASHworkarea_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'workarea_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 30
            Position.RowIndex = 0
          end
          object CASHposition_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'position_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 31
            Position.RowIndex = 0
          end
          object CASHlevel_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'level_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 32
            Position.RowIndex = 0
          end
          object CASHemployeestatus_id: TcxGridDBBandedColumn
            DataBinding.FieldName = 'employeestatus_id'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 33
            Position.RowIndex = 0
          end
          object CASHuseradded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useradded'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 34
            Position.RowIndex = 0
          end
          object CASHdateadded: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateadded'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 35
            Position.RowIndex = 0
          end
          object CASHuseredited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'useredited'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 36
            Position.RowIndex = 0
          end
          object CASHdateedited: TcxGridDBBandedColumn
            DataBinding.FieldName = 'dateedited'
            Width = 70
            Position.BandIndex = 0
            Position.ColIndex = 37
            Position.RowIndex = 0
          end
          object CASHlevel: TcxGridDBBandedColumn
            DataBinding.FieldName = 'level'
            Position.BandIndex = 0
            Position.ColIndex = 1
            Position.RowIndex = 0
          end
        end
        object GRID_CASHLevel1: TcxGridLevel
          GridView = CASH
        end
      end
    end
  end
  object txtID: TEdit
    Left = 353
    Top = 2
    Width = 120
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
    Width = 900
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
      Font.Height = -20
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
      Visible = False
      ExplicitHeight = 30
    end
    object LblEnddate: TLabel
      AlignWithMargins = True
      Left = 298
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
      Left = 93
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
      Left = 826
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
      Left = 734
      Top = 3
      Width = 86
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
      Left = 639
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
      Left = 497
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
      Left = 341
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
      Style.Font.Height = -15
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 4
      OnKeyDown = BtnEnddateKeyDown
      Width = 150
    end
    object BtnStartdate: TcxDateEdit
      AlignWithMargins = True
      Left = 142
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
      Style.Font.Height = -15
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 5
      OnKeyDown = BtnStartdateKeyDown
      Width = 150
    end
  end
  object Layout: TdxLayoutControl
    Left = 464
    Top = 37
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
      'select * from t_summary limit 0')
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
    object actDBG: TAction
      Caption = 'actDBG'
      ShortCut = 122
      OnExecute = actDBGExecute
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
    object N1CreateReportMonthly1: TMenuItem
      Caption = '&1 Create Report'
      OnClick = N1CreateReportMonthly1Click
    end
    object N2CreateReportManager1: TMenuItem
      Caption = '&2 Create Report Manager'
      Visible = False
      OnClick = N2CreateReportManager1Click
    end
    object N3CreateReportWeekly1: TMenuItem
      Caption = '&3 Create Report Weekly'
      Visible = False
      OnClick = N3CreateReportWeekly1Click
    end
    object N2ExportToExcel1: TMenuItem
      Caption = '&4 Export Non Manager'
      Visible = False
      OnClick = N2ExportToExcel1Click
    end
    object N3CreateExcelManager1: TMenuItem
      Caption = '&5 Export Manager'
      Visible = False
      OnClick = N3CreateExcelManager1Click
    end
    object N6ExportWeekly1: TMenuItem
      Caption = '&6 Export Weekly'
      Visible = False
      OnClick = N6ExportWeekly1Click
    end
    object N7DeleteAllDataSummary1: TMenuItem
      Caption = '&7 Delete All Data Summary'
      Visible = False
      OnClick = N7DeleteAllDataSummary1Click
    end
  end
  object ItemPrint: TPopupMenu
    Left = 376
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
    object hisMonth1: TMenuItem
      Caption = 'Th&is Month'
      ShortCut = 16441
      OnClick = hisMonth1Click
    end
    object PrevWeek1: TMenuItem
      Caption = '&Prev Week'
      OnClick = PrevWeek1Click
    end
    object NextWeek1: TMenuItem
      Caption = '&Next Week'
      OnClick = NextWeek1Click
    end
    object hisWeek1: TMenuItem
      Caption = 'T&his Week'
      ShortCut = 16440
      OnClick = hisWeek1Click
    end
  end
  object dxLayoutLookAndFeelList1: TdxLayoutLookAndFeelList
    Left = 200
    object dxLayoutCxLookAndFeel1: TdxLayoutCxLookAndFeel
      LookAndFeel.SkinName = 'UserSkin'
      PixelsPerInch = 96
    end
  end
  object ApplicationEvents1: TApplicationEvents
    OnException = ApplicationEvents1Exception
    Left = 584
    Top = 256
  end
  object cxGridPopupMenu2: TcxGridPopupMenu
    Grid = GRID_TRANSFER
    PopupMenus = <>
    Left = 168
    Top = 120
  end
  object DS_Transer: TDataSource
    DataSet = Q_Transfer
    Left = 136
    Top = 120
  end
  object Q_Transfer: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from t_transferbank limit 10')
    Params = <>
    Left = 104
    Top = 120
  end
  object cxGridPopupMenu3: TcxGridPopupMenu
    Grid = GRID_CASH
    PopupMenus = <>
    Left = 168
    Top = 168
  end
  object DS_Cash: TDataSource
    DataSet = Q_Cash
    Left = 136
    Top = 168
  end
  object Q_Cash: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from t_transferbank limit 10')
    Params = <>
    Left = 104
    Top = 168
  end
end
