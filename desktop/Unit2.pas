unit Unit2;

interface
uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, System.StrUtils, System.DateUtils,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ExtCtrls, Vcl.StdCtrls, System.IniFiles,
  Vcl.Imaging.pngimage, System.Actions, Vcl.ActnList, Vcl.Touch.GestureMgr,
  Vcl.Menus, Winapi.Activex, System.Win.ComObj,
  cxGraphics, cxControls, cxLookAndFeels,
  cxLookAndFeelPainters, cxContainer, cxEdit, dxSkinsCore, dxSkinBlack,
  dxSkinBlue, dxSkinBlueprint, dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom,
  dxSkinDarkSide, dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinsDefaultPainters, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, cxLabel, cxStyles, dxSkinscxPCPainter,
  cxCustomData, cxFilter, cxData, cxDataStorage, cxNavigator, Data.DB, cxDBData,
  cxDBLookupComboBox, cxGridCustomPopupMenu, cxGridPopupMenu,
  ZAbstractRODataset, ZAbstractDataset, ZDataset, cxGridLevel,
  cxGridCustomTableView, cxGridTableView, cxGridBandedTableView,
  cxGridDBBandedTableView, cxClasses, cxGridCustomView, cxGrid,
  cxGridDBLayoutView, cxgridexportlink, dxBarExtItems, dxBar,
  cxDBEditRepository, cxEditRepositoryItems;

procedure createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
procedure HapusPayrollExist(eid : string; payrolldate:tdatetime);
procedure SetSalaryNonAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery; tipe:string='ST');
procedure operTmpDetail;
function settingBulangPengali(eid:string; SDate, EDate:tdatetime) : Integer;
procedure settingJamsostek(q_emp,qh_payroll:tzquery);
function getValueJamsostek(kolom,jid:string; dt:tdatetime):double;
procedure SetSalaryAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery);
procedure isiAbsensi(qh:tzquery);

implementation

uses unit1, UPayroll;
procedure createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
var
  intQ1, intQ2, intQ3,q_tarif, q3, qh_payroll,qd_payroll : TZQuery;
  taxIrregular, taxFinal, taxType,cnt, k, bulanPengali : integer;
  selesai : boolean;
  bjab_pct, bjab_max,jhtYtd, bksYTD, jpsYTD, nettosebelum_m_employee,
  totalgross,totalgross2,bonusthr,bjab,bjab2, tax, pkp, thp,thp2,
  grossUp, jkm,jkk, jpk, ins, pph21sudahdibayar_m_employee,
  totalGrossTanpaTHR, totalGrossTHR, pajakTanpaTHR, pajakDenganTHR, pajakTHR,
  taxIRImport, taxALImport, taxYearly, taxImport, bjab_bln : double;
  isTaxIR, isTaxALAD, isTaxAD : Boolean;
  {Q,q1,qry,, q_ptkp,  qz,q_pengali,q_nettosblm, q_bjab: tzQuery;
  ,bulanPengali,thn,bln,tgl,blnbjab: integer;
  sql,hf,employee_id,name: String;
  ,grossYearly,grossytd, jhtYtd,
  ,  ro, : double;
  ,,jhte,jhtc,,,baseJamsostek: double;
  selesai,debug: boolean;
  nettosebelum_m_employee,nettosebelum,pph21sudahdibayar_m_employee:double;
  d1,month1,y1,d2,month2,y2:integer;}
  function getTHP( qh : tzquery) : double;
  var
    d, c : double;
    qt : tzquery;
  begin
    result := 0;
    qt     := createquery;
    qt.Query('select * from m_thp where acc=''D'' ');
    d := 0;
    while not qt.Eof do
    begin
      d := d + qh.getFieldDouble(qt.getFieldString('payrollheaderfield'));
      qt.Next;
    end;

    qt.Query('select * from m_thp where acc=''C'' ');
    c := 0;
    while not qt.Eof do
    begin
      c := c + qh.getFieldDouble(qt.getFieldString('payrollheaderfield'));
      qt.Next;
    end;
    qt.Free;
    result := d - c;
  end;
  procedure SetBulanBjab;
  var
    qb : tzquery;
  begin
    bjab_bln := 12;
    qb := createquery;
    if formatdatetime('yyyy-MM', qh_payroll.getFieldDateTime('joindate') ) >
       formatdatetime('yyyy-01', payrolldate )  then
    begin
      //join di tahun ini
      if qh_payroll.isNotNull('resigndate') then
      begin
        //join di tahun ini, resigndate sudah diisi
        {if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           formatdatetime('yyyy', payrolldate ) then
        begin
          bjab_bln := 1+MonthsBetween(qh_payroll.getFieldDateTime('joindate'), qh_payroll.getFieldDateTime('resigndate'));
        end;} //perbaiki ini karena acuhan bulan dari payroll date bukan bulan resign, 28 ags 2016
        if ( formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('resigndate') ) >=
             formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('startdate') )
           ) and
           ( formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('resigndate') ) <=
             formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('enddate') )
           ) then
        begin
          //ambil payroll pertama
          qb.Query('select tdate from t_payroll where '+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+formatdatetime('yyyy', qh_payroll.getFieldDateTime('tdate') )+''' order by tdate limit 1');
          if qb.RecordCount > 0 then
          begin //ambil payroll pertama, dibandingin dengan bulan payroll sekarang
            bjab_bln := 1+MonthsBetween(qb.getFieldDateTime('tdate'), qh_payroll.getFieldDateTime('tdate'));
          end else
          begin //dari bulan jan sampe bulan payroll sekarang
            bjab_bln := 1+MonthsBetween(EncodeDate( strtoint(formatdatetime('yyyy', qh_payroll.getFieldDateTime('tdate'))),1,1),
                                        qh_payroll.getFieldDateTime('tdate'));
          end;
        end;
      end else
      begin
        //resigndate kosong
        qb.Query('select tdate from t_payroll where '+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+formatdatetime('yyyy', qh_payroll.getFieldDateTime('tdate') )+''' order by tdate limit 1');
        if qb.RecordCount > 0 then
        begin //ambil payroll pertama, dibandingin dengan bulan payroll sekarang
          bjab_bln := 1+MonthsBetween(qb.getFieldDateTime('tdate'), qh_payroll.getFieldDateTime('tdate'));
        end else
        begin //dari bulan jan sampe bulan payroll sekarang
          bjab_bln := 1+MonthsBetween(EncodeDate( strtoint(formatdatetime('yyyy', qh_payroll.getFieldDateTime('tdate'))),1,1),
                                      qh_payroll.getFieldDateTime('tdate'));
        end;
      end;
    end else
    begin
      if qh_payroll.isNotNull('resigndate') then
      begin
        //resigndate sudah diisi
        {if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           formatdatetime('yyyy', payrolldate ) then
        begin
          bjab_bln := strtoint( formatdatetime('MM', qh_payroll.getFieldDateTime('resigndate') ) );
        end;} //perbaiki 28 ags 2016
        if ( formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('resigndate') ) >=
             formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('startdate') )
           ) and
           ( formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('resigndate') ) <=
             formatdatetime('yyyy-MM-dd', qh_payroll.getFieldDateTime('enddate') )
           ) then
        begin
          //ambil payroll pertama
          qb.Query('select tdate from t_payroll where '+gets('employee_id', qh_payroll)+' and '+es+
                   'year(tdate)='''+formatdatetime('yyyy', qh_payroll.getFieldDateTime('tdate') )+''' order by tdate limit 1');
          if qb.RecordCount > 0 then
          begin //dari payroll pertama ke payroll bulan berjalan
            bjab_bln := 1+MonthsBetween(qb.getFieldDateTime('tdate'), qh_payroll.getFieldDateTime('tdate'));
          end else
          begin // dari jan sampe payroll bulan berjalan
            bjab_bln := 1+MonthsBetween(EncodeDate( strtoint(formatdatetime('yyyy', qh_payroll.getFieldDateTime('tdate'))),1,1),
                                        qh_payroll.getFieldDateTime('tdate'));
          end;
        end;
      end
    end;
    //dbg('bjab_bln : '+floattostr(bjab_bln));
    qb.Free;
  end;
  function getBiayaJabatan(amount: double): double;
  var
    a: double;
  begin
    a := amount * bjab_pct / 100;
    //if a > (bjab_max * 12 ) then a := bjab_max * 12;
    if a > (bjab_max * bjab_bln ) then a := bjab_max * bjab_bln;
    a := RoundUp(a, 0);
    result := a;
  end;
  function getPPh21(amount: double): double;
  var
    pph21setahun, mulai,sampai,jumlahnilaipajak: double;
    tarif: string;
  begin
    mulai:=0;
    sampai:=0;
    jumlahnilaipajak:=0;
    tarif := 'tarif';
    if qh_payroll.getfieldstring('npwpemployee') = '' then tarif := 'tarifnonnpwp';
    jumlahnilaipajak := amount;
    q3.query('select tdate from m_ptkp where tdate <= '''+date2sql(payrolldate)+''' order by tdate desc');
    q_tarif.query('select * from m_tarif where tdate = '''+q3.date2sql('tdate')+''' and final=0 order by start');

    q_tarif.first;
    pph21setahun := 0;
    while not q_tarif.eof do
    begin
      mulai := q_tarif.getFieldDouble('start');
      sampai := q_tarif.getFieldDouble('finish');
      if jumlahnilaipajak > q_tarif.getFieldDouble('finish') then begin
         pph21setahun := pph21setahun + ((q_tarif.getFieldDouble('finish') - q_tarif.getFieldDouble('start') + 0) * q_tarif.getFieldDouble(tarif) / 100);
      end else
      begin
         pph21setahun := pph21setahun + ((jumlahnilaipajak - (q_tarif.getFieldDouble('start') -1)) * q_tarif.getFieldDouble(tarif) / 100);
         break;
      end;
      q_tarif.next;
    end;
    result := int(pph21setahun);
  end;
  function getPPh21_Ter(amount: double): double;
  var
    tarif: double;
    kategori: string;
  begin

    kategori := getqvaluestring('SELECT kategori FROM `m_ptkp`'+es+
                                'where name in ( select ptkp from m_employee where '+gets('employee_id', qh_payroll)+' )' );
    q3.query('select tdate from m_ptkp where tdate <= '''+date2sql(payrolldate)+''' order by tdate desc');
    q_tarif.query('select * from m_ter where kategori='''+kategori+''' and '+es+
                  ' '+floattostr(amount)+'>start and '+floattostr(amount)+'<=finish '+es+
                  'order by start limit 1');
    tarif := 0;
    if q_tarif.RecordCount > 0 then tarif := q_tarif.getFieldDouble('tarif');
    if qh_payroll.getfieldstring('npwpemployee') = '' then tarif := tarif * 1.2;

    result := int(amount*tarif/100);
  end;
  function HitungPajakTHR( totalGross3, totalJHTEmployee3, ptkp3 : double) : double;// totalGrossTanpaTHR, qh_payroll.getfield('totaljhtemployee'), qh_payroll.getfield('nontaxableincome') );
  var
    bjab3, totaltaxdeduct3, netto3, pkp3   : double;
  begin
    result          := 0;
    bjab3           := getBiayaJabatan(totalgross3);
    intQ1.query('SELECT * FROM m_employeestatus WHERE employeestatus_id ='''+qh_payroll.getFieldString('employeestatus_id')+''' ');
    if intQ1.recordcount > 0 then
    begin
      if intQ1.getFieldInteger('tidakpotongbjab') > 0 then bjab3 := 0;
    end;
    totaltaxdeduct3 := bjab3 + totalJHTEmployee3;
    netto3          := totalGross3 - totaltaxdeduct3;
    if netto3 > ptkp3 then
    begin
      pkp3            := netto3 - ptkp3;
      pkp3            := pkp3 / 1000;
      pkp3            := int(pkp3) * 1000;
      result          := getPPh21_Ter(pkp3);
    end;
  end;
  procedure sebelumTHR;
  begin
    //
  end;
  procedure processHitungPajak;
  begin
    //proses hitung tax
    sebelumTHR;
    repeat
      if taxType = 1 then
      begin
        qh_payroll.setfield('taxallowance', (-1) * getQvaluedouble(
          'select sum(taxallowance) from t_payroll '+
          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
          'employee_id = '''+qh_payroll.getFieldString('employee_id')+''' group by employee_id'));
      end;
      if isTaxALAD then qh_payroll.setfield('taxallowance', taxALImport);
      qh_payroll.setfield('gross',qh_payroll.getfield('totalincome')+
                                  qh_payroll.getfield('taxallowance')+
                                  qh_payroll.getfield('jkm')+
                                  qh_payroll.getfield('jkk')+
                                  qh_payroll.getfield('jkn')+
                                  qh_payroll.getfield('jpk')+
                                  qh_payroll.getfield('ins')
                                  );
      qh_payroll.setfield('gross_yearly', (qh_payroll.getfield('gross') * bulanPengali)+
                                           qh_payroll.getfield('grossmonthly') );
      qh_payroll.setfield('grossdeduct_yearly', qh_payroll.getfield('grossdeduct') * bulanPengali);
      //versi awal
//      totalGross := (qh_payroll.getfield('thrbonus2')+
//                     qh_payroll.getfield('thrbonustaxallowance')+
//                     qh_payroll.getfield('gross_yearly')+
//                     qh_payroll.getfield('gross_ytd'));
      totalGross := (qh_payroll.getfield('gross')+
                     qh_payroll.getfield('gross_nonthp')+
                     qh_payroll.getfield('gross_thp'));
      qh_payroll.setfield('totalgross', totalgross);
      totalgrosstanpathr  := totalgross;
      totalGrossTHR       := totalgrosstanpathr + qh_payroll.getfielddouble('thrbonus');
      bonusthr            := 0;
      bjab                := getBiayajabatan(totalgrosstanpathr);
      bjab2               := getBiayajabatan(bonusthr);
      intQ1.query('SELECT * FROM m_employeestatus WHERE employeestatus_id ='''+qh_payroll.getFieldString('employeestatus_id')+''' ');
      if intQ1.recordcount > 0 then
      begin
        if intQ1.getFieldInteger('tidakpotongbjab') > 0 then
        begin
          bjab := 0;
          bjab2:= 0;
       end;
      end;
      qh_payroll.setfield('bjab', bjab);
      qh_payroll.setfield('bjab2', bjab2);
      if ((bjab+bjab2)<(bjab_max*bjab_bln)) then
      begin
         qh_payroll.setfield('bjab2', bjab2);
      end else
      begin
         qh_payroll.setfield('bjab2', (bjab_max*bjab_bln)-bjab);
      end;

//      qh_payroll.setfield('totaltaxdeduct', qh_payroll.getfield('bjab') +
//                                            qh_payroll.getfield('bjab2') +
//                                            qh_payroll.getfield('totaljhtemployee') +
//                                            qh_payroll.getfield('totaljpsemployee') ) ;
      qh_payroll.setfield('totaltaxdeduct', qh_payroll.getfield('grossdeduct') ) ;

      pajakTanpaTHR       := HitungPajakTHR( totalGrossTanpaTHR,
                                                  qh_payroll.getfield('totaljhtemployee')+
                                                  qh_payroll.getfield('totaljpsemployee'),
                                              qh_payroll.getfield('nontaxableincome') );
      pajakDenganTHR      := HitungPajakTHR( totalGrossTHR,
                                                  qh_payroll.getfield('totaljhtemployee')+
                                                  qh_payroll.getfield('totaljpsemployee'),
                                             qh_payroll.getfield('nontaxableincome') );
      pajakTHR            := pajakDenganTHR - pajakTanpaTHR;

      qh_payroll.setfield('nett', qh_payroll.getfield('totalgross')-
                                  qh_payroll.getfield('totaltaxdeduct') );
//      qh_payroll.setfield('taxableincome', qh_payroll.getfield('nett')-
//                                           qh_payroll.getfield('nontaxableincome') );
      qh_payroll.setfield('taxableincome', qh_payroll.getfield('nett') );
      if qh_payroll.getfield('taxableincome') <= 0 then qh_payroll.setfield('taxableincome', '0');
      pkp := qh_payroll.getfield('taxableincome');
      pkp := pkp / 1000;
      pkp := int(pkp) * 1000;
      qh_payroll.setfield('roundtaxableincome', pkp);
      taxYearly := getPPh21_Ter(pkp);
      qh_payroll.setfield('tax21_yearly', 0);
      qh_payroll.setfield('tax21_irregular', 0);
      qh_payroll.setfield('thrbonustax', 0);
      qh_payroll.setfield('tax21_ytd',
          pph21sudahdibayar_m_employee+
          qh_payroll.getfieldDouble('thrbonustax')+
          getQvaluedouble('select sum(tax21_irregular+tax21_monthly) from t_payroll '+
          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );
      qh_payroll.setfield('tax21_monthly', taxYearly);
      selesai := true;
//            qh_payroll.setfield('tax21_yearly', taxYearly);
//            qh_payroll.setfield('tax21_irregular', pajakTHR);
//            if isTaxIR then qh_payroll.setfield('tax21_irregular', taxIRImport);
//            qh_payroll.setfield('tax21_ytd',
//                pph21sudahdibayar_m_employee+
//                qh_payroll.getfieldDouble('thrbonustax')+
//                getQvaluedouble('select sum(tax21_irregular+tax21_monthly) from t_payroll '+
//                'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
//                'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
//                'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );
//            tax := roundUp( (taxYearly - qh_payroll.getfield('tax21_ytd')) / bulanPengali, 0); //ini kalo pajak lebih nya di bagi tiap bulan
//
//            if tax < 0 then       //ini kalo pajak lebih nya di bulan terakhir
//            begin
//              if formatdatetime('mm', qh_payroll.getfield('tdate')) < '12' then tax := 0; //ini kalo tax nya minus dan bukan bulan desember, maka pajak nol
//              intQ1.query('select resigndate from m_employee where employee_id = '+qh_payroll.getQ('employee_id'));
//              if intQ1.RecordCount > 0 then
//              begin
//                if intQ1.isNull('resigndate') then tax := 0 else //ini kalo tax nya minus dan belum resign, maka pajak nol
//                begin
//                  if intQ1.date2sql('resigndate') > qh_payroll.date2sql('tdate') then tax := 0; //ini kalo tax nya minus dan sudah resign dan resign dibulan setelah payroll, maka pajak nol
//                end;
//              end;
//            end;
//
//            if (bulanPengali = 1) or (qh_payroll.isNotNull('resigndate')) then
//            begin  //ini kalo pengali satu ataupun sudah resign tapi pengali >=1, harus hitung sisa pajakny
//              intQ1.query('select sum(tax21_irregular+tax21_monthly+pph21sebelum+thrbonustax) as pphsdhdibayar from t_payroll where employee_id = '''+qh_payroll.getfieldstring('employee_id')+''' and year(tdate) = '+formatdatetime('yyyy', payrolldate)+' and  month(tdate) <> 12 group by employee_id');
//              if intQ1.recordcount>0 then tax :=  taxYearly - intQ1.getfielddouble('pphsdhdibayar');
//            end;
//
//            qh_payroll.setfield('tax21_monthly', tax);
//            if taxIrregular = 2 then qh_payroll.setfield('tax21_monthly', tax + pajakTHR);// kalo gross up
//            if isTaxAD then qh_payroll.setfield('tax21_monthly', taxImport);
//
//            if taxtype = 1 then selesai := true;
//            if taxtype = 2 then
//            begin
//              if grossUp = tax then
//              begin
//                qh_payroll.setfield('taxallowance', qh_payroll.getfield('tax21_monthly'));
//                if isTaxALAD then qh_payroll.setfield('taxallowance', taxALImport);
//                selesai := true;
//              end else
//              begin
//                qh_payroll.setfield('taxallowance', qh_payroll.getfield('tax21_monthly'));
//                if isTaxALAD then qh_payroll.setfield('taxallowance', taxALImport);
//                grossUp := tax;
//              end;
//            end;
      cnt := cnt + 1;
    until (selesai = true) or (cnt >= 100);
    // selesai proses hitung tax
    if taxIrregular = 2 then
    begin
      qh_payroll.setfield('tax21_monthly', qh_payroll.getfield('tax21_monthly')-
                                           qh_payroll.getfield('tax21_irregular') );
    end;
    thp := getTHP(qh_payroll);

    qh_payroll.setfield('grandtotal',thp);
    qh_payroll.setfield('takehomepay', thp );
  end;
begin
  //frmpayroll.ShowProgressbar;
  qh_payroll  := createQuery;
  qd_payroll  := createQuery;
  intQ1       := createQuery;
  intQ2       := createQuery;
  intQ3       := createQuery;
  q_tarif     := createQuery;
  q3          := createQuery;
  if q3.query('select * from m_biayajabatan where tdate <= '''+date2sql(payrolldate)+''' order by tdate desc limit 1') > 0 then
  begin
    bjab_pct := q3.getfielddouble('biayajabatan');
    bjab_max := q3.getfielddouble('maxbiayajabatan');
  end;
  executeSQL('truncate tmp_payroll_detail');
  qh_payroll.query('select * from t_payroll limit 0 ');
  qd_payroll.query('select * from tmp_payroll_detail limit 0');

    HapusPayrollExist(q_emp.getFieldString('employee_id'), payrolldate);
    qh_payroll.Append;
    q_date.first;
    while not q_date.eof do
    begin
      if qh_payroll.isfieldexist(q_date.getField('payrollfield')) = true then
      begin
        qh_payroll.setField(q_date.getField('payrollfield'), q_date.getField('tdate'));
      end;
      q_date.next;
    end;
    //dbg('set payrolldate');

    //dbg('hapus payroll exist');
    for k := 0 to q_emp.fieldcount - 1 do
    begin
      if qh_payroll.isfieldexist(q_emp.fieldname(k)) = true then
      begin
        qh_payroll.setField(q_emp.fieldname(k), q_emp.getField(q_emp.fieldname(k)));
      end;
    end;

    //dbg('set default from m_employee');

    {intQ1.Query('select * from m_employee_mutation where '+es+
                ' '+gets('employee_id', qh_payroll)+' and '+es+
                'tdate <='''+date2sql(payrolldate)+''' '+es+
                'order by tdate desc limit 1');
    if intQ1.RecordCount > 0 then
    begin
      for k := 0 to intQ1.fieldcount - 1 do
      begin
        if (intQ1.fieldName(k) = 'employee_mutation_id') or (intQ1.fieldName(k) = 'tdate') or
           (intQ1.fieldName(k) = 'sknumber') or (intQ1.fieldName(k) = 'useradded') or (intQ1.fieldName(k) = 'dateadded') or
           (intQ1.fieldName(k) = 'useredited') or (intQ1.fieldName(k) = 'dateedited') then
        begin
        end else
        begin
          if qh_payroll.isfieldexist(intQ1.fieldname(k)) = true then
          begin
            qh_payroll.setField(intQ1.fieldname(k), intQ1.getField(intQ1.fieldname(k)));
          end;
        end;
      end;
    end;}
    //dbg('set default from m_employee_mutation');

    qh_payroll.SetMultiField('taxallowance,totalincome,basejamsostek,'+
                'jkm,jkk,jkn,jpk,ins,gross,grossmonthly,'+
                'thrbonus,gross_yearly,gross_ytd,thrbonus2,thrbonustaxallowance,nettosebelum,'+
                'grossdeduct,grossdeduct_yearly,grossdeduct_ytd,'+
                'totalgross,bjab,bjab2,'+
                'jhtemployee,jhtemployee_ytd,jhtemployee_yearly,totaljhtemployee,'+
                'jpsemployee,jpsemployee_ytd,jpsemployee_yearly,totaljpsemployee,'+
                'othertaxdeduct,totaltaxdeduct,nett,nontaxableincome,'+
                'taxableincome,roundtaxableincome,tax21_yearly,'+
                'tax21_ytd,thrbonustax,pph21sebelum,tax21_irregular,tax21_monthly,otherincome,jknemployee,'+
               ',otherdeduction,grandtotal,rounding,takehomepay,jpscompany,jhtcompany',0);
    if ( qh_payroll.date2sql('resigndate') < qh_payroll.date2sql('startdate') ) or
       ( qh_payroll.date2sql('resigndate') > qh_payroll.date2sql('enddate') ) then
    begin
      //dbg('ok1');
      qh_payroll.setField('resigndate', null);
    end;
    //qh_payroll.setField('level', SentencesCase( leveltipe));
    qh_payroll.setField('npwpdate', null);
    qh_payroll.setField('npwpemployee', '');
    if q_emp.isNull('npwp') then
    begin
      //dbg('npwp null');
      qh_payroll.setField('npwpemployee', '')
    end else
    begin
      if q_emp.isNotNull('npwpdate') then
      begin
        //dbg('npwp date is not null');
        if Lastday(qh_payroll.getFieldDateTime('enddate')) >= Lastday(q_emp.getFieldDateTime('npwpdate')) then
        begin
          qh_payroll.setField('npwpdate', q_emp.getField('npwpdate'));
          qh_payroll.setField('npwpemployee', q_emp.getField('npwp'));
        end;
      end else
      begin
        //dbg('npwp date is null');
        qh_payroll.setField('npwpemployee', q_emp.getField('npwp'));
      end;
    end;
    qh_payroll.Post;
    qh_payroll.Edit;

    SetBulanBjab;
    //dbg('default 0');
    SetSalaryNonAT(payrolldate,q_date,q_emp, qh_payroll, qd_payroll);
    //dbg('set salary non at');
    qh_payroll.Post;
    bulanPengali := settingBulangPengali(q_emp.getFieldString('employee_id'), qh_payroll.getFieldDateTime('startdate'), qh_payroll.getFieldDateTime('enddate'));
    //dbg('bulan pengali : '+inttostr(bulanpengali));
    settingJamsostek(q_emp, qh_payroll);
    dbg('set bulan jamsostek');
    selesai := false;
    taxType := qh_payroll.getfield('taxtype');
    taxIrregular := qh_payroll.getfield('taxirregular');
    taxFinal     := qh_payroll.getfield('taxfinal');
    qh_payroll.edit;

    //process THR not joingaji
    intQ1.query('select sum(amount) as thrbonus2, sum(taxallowance) as thrbonustaxallowance,'+es+
                   'sum(pph21) as thrbonustax from t_thr where '+es+
                   'joingaji = 0 and '+es+
                   'year(tdate) = '''+qh_payroll.getYearSQL('tdate')+''' and '+
                   'month(tdate) = '''+qh_payroll.getMonthSQL('tdate')+''' and '+es+
                   'employee_id = '+qh_payroll.getQ('employee_id')+ ' group by employee_id');
    if intQ1.RecordCount > 0 then qh_payroll.SetMultiFieldQ('thrbonus2,thrbonustaxallowance,thrbonustax', intQ1);
    //end process THR not joingaji

    /// cari netto sebelum di m_employee, setelah diambil, diisi 0
    nettosebelum_m_employee := getQValuedouble('select nettosebelum from m_employee where employee_id = '+q_emp.getQ('employee_id'));
    ExecuteSQL('update m_employee set nettosebelum=0 where employee_id = '+q_emp.getQ('employee_id'));
    qh_payroll.setfield('nettosebelum',nettosebelum_m_employee);
    dbg('set nettosebelum');

    pph21sudahdibayar_m_employee := getQValuedouble('select pph21sebelum from m_employee where employee_id = '+q_emp.getQ('employee_id'));
    ExecuteSQL('update m_employee set pph21sebelum=0 where employee_id = '+q_emp.getQ('employee_id'));
    qh_payroll.setfield('pph21sebelum', pph21sudahdibayar_m_employee);
    dbg('set pph21sebelum');

    //tambahin disini 2015-07-05
    qh_payroll.setfield('gross_ytd', nettosebelum_m_employee + getQvaluedouble(
      'select sum(gross+grossmonthly+thrbonus+thrbonus2+thrbonustaxallowance) from t_payroll '+
      'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
      'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
      'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );

    dbg('set gross ytd');

    qh_payroll.setfield('grossdeduct_ytd', getQValueDouble('select grossdeduct+grossdeduct_ytd from t_payroll '+
                                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                                          'employee_id = '''+q_emp.getFieldString('employee_id')+''' order by tdate desc limit 1'));
    dbg('set gross deduct ytd');

    jhtYtd := getQvaluedouble('select sum(jhtemployee) from t_payroll '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id');
    qh_payroll.setfield('jhtemployee_ytd', jhtytd);
    qh_payroll.setfield('jhtemployee_yearly', qh_payroll.getfield('jhtemployee') * bulanPengali);
    qh_payroll.setfield('totaljhtemployee', qh_payroll.getfield('jhtemployee_yearly')+jhtytd);
    dbg('set jht employee');

    {
    bks bukan pengurang pajak kaya jht
    bksYtd := getQvaluedouble('select sum(bksemployee) from t_payroll '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id');
    qh_payroll.setfield('bksemployee_ytd', bksytd);
    qh_payroll.setfield('bksemployee_yearly', qh_payroll.getfield('bksemployee') * bulanPengali);
    qh_payroll.setfield('totalbksemployee', qh_payroll.getfield('bksemployee_yearly')+bksytd);}
    //dbg('set bks employee');

    jpsYtd := getQvaluedouble('select sum(jpsemployee) from t_payroll '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id');
    qh_payroll.setfield('jpsemployee_ytd', jpsytd);
    qh_payroll.setfield('jpsemployee_yearly', qh_payroll.getfield('jpsemployee') * bulanPengali);
    qh_payroll.setfield('totaljpsemployee', qh_payroll.getfield('jpsemployee_yearly')+jpsytd);
    dbg('set jps employee');

    qh_payroll.setfield('nontaxableincome', getqvaluedouble('select ptkp from m_ptkp '+
                        'where name='''+q_emp.getFieldString('ptkp')+''' and '+es+
                        'tdate <='''+qh_payroll.date2sql('tdate')+''' order by tdate desc limit 1') );
    dbg('set PTKP');
    //pajak diimport di t_ad
    taxALImport := 0;
    taxImport   := 0;
    taxIRImport := 0;
    isTaxALAD   := False;
    isTaxAD     := False;
    isTaxIR     := False;
    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+q_emp.getFieldString('employee_id')+''' and '+es+
                'tdate >= '''+qh_payroll.date2sql('startdate')+''' and '+es+
                'tdate <= '''+qh_payroll.date2sql('enddate')+'''  and '+es+
                'salary_id = 357 group by employee_id'); //T. Pajak
    //msgok(intQ1.SQL.Text);
    if intQ1.recordcount>0 then
    begin
      isTaxALAD   := True;
      taxALImport := intQ1.getFieldDouble('amount');

      //msgok(floattostr(taxALImport));
    end;

    dbg('set import tax AL');
    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+q_emp.getFieldString('employee_id')+''' and '+es+
                'tdate >= '''+qh_payroll.date2sql('startdate')+''' and '+es+
                'tdate <= '''+qh_payroll.date2sql('enddate')+'''  and '+es+
                'salary_id = 358 group by employee_id'); //P. Pajak
    //msgok(intQ1.SQL.Text);
    if intQ1.recordcount>0 then
    begin
      isTaxAD   := True;
      taxImport := intQ1.getFieldDouble('amount');
      //msgok(floattostr(taximport));
    end;

    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+q_emp.getFieldString('employee_id')+''' and '+es+
                'tdate >= '''+qh_payroll.date2sql('startdate')+''' and '+es+
                'tdate <= '''+qh_payroll.date2sql('enddate')+'''  and '+es+
                'salary_id = 313 group by employee_id'); //P. Pajak irregular
    if intQ1.recordcount>0 then
    begin
      isTaxIR     := True;
      taxIRImport := intQ1.getFieldDouble('amount');
    end;

    //pajak diimport di t_ad
    dbg('mulai proses hitung pajak');
    processHitungPajak;
    dbg('set proses hitung pajak');
    qh_payroll.Post;
    SetSalaryAT(payrolldate,q_date,q_emp, qh_payroll, qd_payroll);
    dbg('set salary AT');
    qh_payroll.Edit;
    SetSalaryNonAT(payrolldate,q_date,q_emp, qh_payroll, qd_payroll, 'ST2');
    dbg('set salary non AT 2');
    isiAbsensi(qh_payroll);
    dbg('set absensi');
    isiKolomUser(True, qh_payroll);
    dbg('isi kolom user');
    qh_payroll.Post;
    operTmpDetail;
    dbg('set oper tmp detail');
  qh_payroll.Free;
  qd_payroll.Free;
  intQ1.Free;
  intQ2.Free;
  intQ3.Free;
  Q3.Free;
  q_tarif.Free;
end;

procedure isiAbsensi(qh:tzquery);
var
  qx : tzquery;
  ssql : string;
  harikerja:integer;
begin
  dbg('mulai set absensi');
  qx := createquery;
  harikerja := 0;
  qh.setField('harikerja', '0');
  qx.Query('select harikerja from m_employee where '+gets('employee_id', qh)+' ');
  if qx.RecordCount > 0 then
  begin
    harikerja := qx.getFieldInteger('harikerja');
    qh.setField('harikerja', qx.getFieldInteger('harikerja'));
  end;

  qh.setField('sisapinjaman', '0');
  qx.Query('select sum(coalesce(sisa,0)) as sisapinjaman from t_loan where '+gets('employee_id', qh)+' group by employee_id');
  if qx.RecordCount > 0 then
  begin
    harikerja := qx.getFieldInteger('sisapinjaman');
    qh.setField('sisapinjaman', qx.getFieldInteger('sisapinjaman'));
  end;

//  if harikerja = 0 then
//  begin
//    qx.Query('select department_id, harikerja from m_department where '+gets('department_id', qh)+' ');
//    if qx.RecordCount > 0 then qh.setField('harikerja', qx.getFieldInteger('harikerja'));
//  end;

  dbg('set hari kerja');
//  ssql := 'select employee_id, sum(masuk4) as masuk4, sum(masuk5) as masuk5, sum(masuk) as masuk, sum(libur4) as libur4, sum(libur) as libur, sum(cuti) as cuti, '+es+
//             '  sum(sakit) as sakit, sum(izin) as izin, sum(sakit2) as sakit2, sum(alpa) as alpa, sum(off) as off, '+es+
//             '  sum(libur3_4) as libur3_4, sum(libur3) as libur3 from t_rekap '+es+
//             '  where tdate between '''+date2sql(startdate)+''' and '''+date2sql(enddate)+''' and '+gets('employee_id', qh)+' '+es+
//             '  group by employee_id ';
//  pesan(ssql);
//  qx.Query(ssql);
//  qh.SetMultiField('masuk4,masuk5,masuk,libur4,libur,libur3_4,libur3,cuti,sakit,izin,sakit2,alpa,off', '0');
//  if qx.RecordCount >0  then qh.SetMultiFieldQ('masuk4,masuk5,masuk,libur4,libur,libur3_4,libur3,cuti,sakit,izin,sakit2,alpa,off', qx);
  qx.Free;
  dbg('set absensi');
end;

procedure HapusPayrollExist(eid : string; payrolldate:tdatetime);
var
  xx : tzquery;
begin
  xx := createquery;
  xx.query('select payroll_id from t_payroll where employee_id = '''+eid+''' and tdate = '''+date2sql(payrolldate)+'''');
  if xx.recordcount > 0 then
  begin
    ExecuteSQL('delete from t_payroll_detail where payroll_id = '+xx.getQ('payroll_id'));
    ExecuteSQL('delete from t_payroll where payroll_id = '+xx.getQ('payroll_id'));
  end;

  xx.Free;
end;
procedure SetSalaryNonAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery; tipe:string='ST');
var
  Q, qry : TZQuery;
  sql, hf : string;
  k : integer;
begin
  Q   := createQuery;
  qry := createQuery;
  Q.query('select * from m_salary where acctype<>''tunjangan'' and txtlap = '''+tipe+''' order by procorder');
  pesan(q.SQL.text);
  q.First;
  while not q.Eof do
  begin
    dbg(q.getFieldString('name'));
    sql := q.getFieldString('param');
    hf  := q.getFieldString('payrollheaderfield');
    sql := trim(sql);
    if trim(Sql) <> '' then
    begin
      sql := Replace(sql,'$EMPLOYEE_ID', q_emp.getFieldString('employee_id'));
      sql := Replace(sql,'$SALARY_ID', q.getFieldString('salary_id'));

      q_date.first;
      while not q_date.eof do
      begin
        sql := Replace(sql, '$'+q_date.getFieldString('payrollfield'), q_date.date2sql('tdate'));
        q_date.next;
      end;
      if LowerCase(tipe) = 'st' then
      begin
        //if q.getFieldInteger('salary_id') = 205 then
        //begin
          pesan('name : '+q.getFieldString('name')+es+
                'slipname : '+q.getFieldString('slipname')+es+
                'sql : '+sql);
        //end;
        //dbg('xx1');
        qry.query(sql);
        //dbg(qry.RecordCount);
        //dbg('xx2');
      end else
      begin
        qry.query(sql);
      end;

      if qry.RecordCount > 0 then
      begin
         //dbg('salary : '+q.getFieldString('name'));
         if qry.isfieldexist('amount') then
         begin
           if hf <> '' then
           begin
             qh_payroll.setfield(hf, qh_payroll.getfield(hf) + int(qry.getFieldDouble('amount'))); //disini hilangin koma
           end;
           qd_payroll.Append;
           qd_payroll.Setfield('payroll_id', qh_payroll.getField('payroll_id'));
           qd_payroll.copyData(q);
           qd_payroll.setfield('amount', qry.getFieldDouble('amount'));
           qd_payroll.setfield('debugamount', 0);
           qd_payroll.setfield('diff', 0);
           qd_payroll.post;
         end;
         for k := 0 to qry.fieldcount - 1 do
         begin
           if uppercase(qry.fieldname(k)) <> 'AMOUNT' then
           begin
             if qh_payroll.isfieldexist(qry.fieldname(k)) = true then
             begin
                qh_payroll.setfield(qry.fieldName(k), qry.getfield(qry.fieldName(k)));
                qh_payroll.post;
             end;
           end;
         end;
      end;
    end;
    dbg('set next');
    q.Next;
  end;
  Q.Free;
  qry.free;
end;
procedure operTmpDetail;
begin
  ExecuteSQL('insert into t_payroll_detail (payroll_id,salary_id,amount,debugamount,diff,salarycode,name,slipname,acc,sliporder,summaryorder,jurnalorder) '+
              'select payroll_id,salary_id,amount,debugamount,diff,salarycode,name,slipname,acc,sliporder,summaryorder,jurnalorder from tmp_payroll_detail ');
  ExecuteSQL('truncate tmp_payroll_detail');
end;
function settingBulangPengali(eid:string; SDate, EDate:tdatetime) : Integer;
var
  q : tzquery;
  y1,month1,d1,y2,month2,d2, thn,bln,tgl, sthn : word;
begin
  decodedate(edate,thn,bln,tgl);
  result := 13-bln;
  q := createquery;
  q.query('select resigndate, resigntype_id from m_employee where employee_id='''+eid+ '''');
  if not q.isNull('resigndate') then
  begin
    sthn := getQValueInteger('select yearly from m_resigntype where '+gets('resigntype_id', q)+' ');
    //decodedate(payrolldate,y1,month1,d1);
    //decodedate(q.getfield('resigndate'),y2,month2,d2);
    //if (y1=y2) and (month1=month2) then
    if (q.date2sql('resigndate') >= date2sql(sdate)) and (q.date2sql('resigndate') <= date2sql(edate)) then
    begin
      if sthn = 1 then result := 13-bln else result :=1; //liat disetahunkan atau tidak di m_resigntype nya
    end else
    begin
      result := 13-bln;
    end;
  end  else
  begin
    result := 13-bln;
  end;
  q.Free;
end;
function getValueJamsostek(kolom, jid:string; dt:tdatetime):double;
begin
  result := 0;
  kolom  := lowercase(kolom);
  result := getQValueDouble('select base from m_jamsostekrate '+es+
                'where jamsostek_id='''+jid+''' and name='''+kolom+''' '+es+
                'and tdate <='''+date2sql(dt)+''' order by tdate desc limit 1 ');
end;
procedure settingJamsostek(q_emp,qh_payroll:tzquery) ;
var
  q1 : tzquery;
  minBase, maxBaseJKN, maxBaseJPS,
  baseJamsostek, jkm, jkk, jhtc, jhte, jknc, jkne , jpsc, jpse,
  baseJamsostek1, jkm1, jkk1, jhtc1, jhte1, jknc1, jkne1, jpsc1, jpse1,
  jkmr, jkkr, jhtcr, jhter, jkncr, jkner , jpscr, jpser : double;
begin
  qh_payroll.Edit;
  jkm  := 0;    jkmr  := 0;
  jkk  := 0;    jkkr  := 0;
  jhtc := 0;    jhtcr := 0;
  jhte := 0;    jhter := 0;
  jknc := 0;    jkncr := 0;
  jkne := 0;    jkner := 0;
  jpsc := 0;    jpscr := 0;
  jpse := 0;    jpser := 0;

  q1   := createquery;
  {q1.query(' select  e.employee_id, j.* '+
           ' from m_employee e '+
           ' left join m_jamsostek j on j.jamsostek_id = e.jamsostek_id '+
           ' where e.employee_id = '''+q_emp.getfieldstring('employee_id')+'''');}
  q1.query(' select * from m_jamsostek where '+gets('jamsostek_id', qh_payroll)+' ');
  //pesan(q1.SQL.Text);
  if q1.recordcount > 0 then
  begin
    //dbg(uppercase(q1.getfieldstring('type')));
    baseJamsostek := 0;
    if uppercase(q1.getfieldstring('type')) = 'RATE' then
    begin
      minbase       := getValueJamsostek('UMR',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
      //dbg(minbase);
      basejamsostek := getQvaluedouble('select sum(amount)  from tmp_payroll_detail '+
                                 ' inner join m_salary on '+
                                 ' m_salary.salary_id = tmp_payroll_detail.salary_id '+
                                 ' where m_salary.acctype<>''tunjangan'' and  m_salary.slipname in '+
                                 ' (select slipname from m_jamsostek_base '+
                                 ' where jamsostek_id = '''+q1.getfieldstring('jamsostek_id')+''') '+
                                 ' group by payroll_id ');
      baseJamsostek1:= baseJamsostek;
      //if baseJamsostek1 <= minBase then baseJamsostek1 := minBase;
    end else
    if uppercase(q1.getfieldstring('type')) = 'FIX BASE' then
    begin
      baseJamsostek := getValueJamsostek('Fix Base',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    end;

    jkmr        := getValueJamsostek('JKM Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jkkr        := getValueJamsostek('JKK Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jhtcr       := getValueJamsostek('JHTComp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jhter       := getValueJamsostek('JHTEmp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jkncr       := getValueJamsostek('JKNComp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jkner       := getValueJamsostek('JKNEmp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jpscr       := getValueJamsostek('JPSComp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jpser       := getValueJamsostek('JPSEmp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    maxBaseJKN  := getValueJamsostek('Max Base BPJS Kesehatan',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    maxBaseJPS  := getValueJamsostek('Max Base BPJS Pensiun',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    //dbg(maxBaseJKN);
    {dbg('basejamsostek : '+floattostr(basejamsostek)+es+
        'jkmr : '+floattostr(jkmr)+es+
        'jkkr : '+floattostr(jkkr)+es+
        '');}
    if baseJamsostek > 0 then
    begin
      //dbg('1');
      jkm       := round( (jkmr *baseJamsostek)  / 100 );   jkm1      := round( (jkmr *baseJamsostek1)  / 100 );
      jkk       := round( (jkkr *baseJamsostek)  / 100 );   jkk1      := round( (jkkr *baseJamsostek1)  / 100 );
      jhte      := round( (jhter*baseJamsostek)  / 100 );   jhte1     := round( (jhter*baseJamsostek1)  / 100 );
      jhtc      := round( (jhtcr*baseJamsostek)  / 100 );   jhtc1     := round( (jhtcr*baseJamsostek1)  / 100 );
      jknc      := round( (jkncr*basejamsostek)  / 100 );   jknc1     := round( (jkncr*basejamsostek1)  / 100 );
      jkne      := round( (jkner*basejamsostek)  / 100 );   jkne1     := round( (jkner*basejamsostek1)  / 100 );
      jpsc      := round( (jpscr*basejamsostek)  / 100 );   jpsc1     := round( (jpscr*basejamsostek1)  / 100 );
      jpse      := round( (jpser*basejamsostek)  / 100 );   jpse1     := round( (jpser*basejamsostek1)  / 100 );
      if basejamsostek >= maxBaseJKN then
      begin
        jknc    := round( (jkncr*maxBaseJKN) / 100 );
        jkne    := round( (jkner*maxBaseJKN) / 100 );
      end;
      if basejamsostek >= maxBaseJPS then
      begin
        jpsc    := round( (jpscr*maxBaseJPS) / 100 );
        jpse    := round( (jpser*maxBaseJPS) / 100 );
      end;
      //dbg('2');

      if basejamsostek1 >= maxBaseJKN then
      begin
        jknc1    := round( (jkncr*maxBaseJKN) / 100 );
        jkne1    := round( (jkner*maxBaseJKN) / 100 );
      end;
      if basejamsostek1 >= maxBaseJPS then
      begin
        jpsc1    := round( (jpscr*maxBaseJPS) / 100 );
        jpse1    := round( (jpser*maxBaseJPS) / 100 );
      end;
    end;
    //dbg('3');
    if uppercase(q1.getfieldstring('type')) = 'FIX VALUE' then
    begin
      jkm       := jkmr;    jkm1      := jkmr;
      jkk       := jkkr;    jkk1      := jkkr;
      jhte      := jhter;   jhte1     := jhter;
      jhtc      := jhtcr;   jhtc1     := jhtcr;
      jknc      := jkncr;   jknc1     := jkncr;
      jkne      := jkner;   jkne1     := jkner;
      jpsc      := jpscr;   jpsc1     := jpscr;
      jpse      := jpser;   jpse1     := jpser;
    end;
    //dbg('a');
    qh_payroll.setfield('typejamsostek', q1.getfieldstring('type'));
    qh_payroll.setfield('basejamsostek', basejamsostek);
    qh_payroll.setfield('jkm', qh_payroll.getfield('jkm') + jkm);
    qh_payroll.setfield('jkk', qh_payroll.getfield('jkk') + jkk);
    qh_payroll.setfield('jhtcompany', qh_payroll.getfield('jhtcompany') + jhtc);
    qh_payroll.setfield('jhtemployee', qh_payroll.getfield('jhtemployee') + jhte);
    qh_payroll.setfield('jkn', qh_payroll.getfield('jkn') + jknc);
    qh_payroll.setfield('jknemployee', qh_payroll.getfield('jknemployee') + jkne);
    qh_payroll.setfield('jpscompany', qh_payroll.getfield('jpscompany') + jpsc);
    qh_payroll.setfield('jpsemployee', qh_payroll.getfield('jpsemployee') + jpse);
    //dbg('b');
    qh_payroll.setfield('basejamsostek1', basejamsostek1);
    qh_payroll.setfield('jkm1', jkm1);
    qh_payroll.setfield('jkk1', jkk1);
    qh_payroll.setfield('jhtcompany1', jhtc1);
    qh_payroll.setfield('jhtemployee1', jhte1);
    qh_payroll.setfield('jkn1', jknc1);
    qh_payroll.setfield('jknemployee1', jkne1);
    qh_payroll.setfield('jpscompany1', jpsc1);
    qh_payroll.setfield('jpsemployee1', jpse1);
    //dbg('c');
  end;  // q1 > 0
  qh_payroll.Post;
  //dbg('d');
  q1.Free;
end;
procedure SetSalaryAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery);
var
  q2 : tzquery;
  stSal : double;
begin
  q2 := createquery;
  Q2.query('select * from m_salary where acctype<>''tunjangan'' and txtlap=''AT'' order by acc, procorder ');
  while not Q2.eof do
  begin
    //dbg(q2.getFieldString('salary_id'));
    if qh_payroll.isfieldexist(Q2.getfield('payrollheaderfield')) then
    begin
      {pesan('select coalesce( round( sum(d.amount),0), 0) as amount '+es+
                               'from tmp_payroll_detail d '+es+
                               'left join m_salary s on d.salary_id = s.salary_id '+
                               'where '+gets('payroll_id', qh_payroll)+' and '+es+
                               's.txtlap=''ST'' and '+gets('payrollheaderfield', q2)+' '+es+
                               'group by payroll_id');}
      stSal := getQValueDouble('select coalesce( round( sum(d.amount),0), 0) as amount '+es+
                               'from tmp_payroll_detail d '+es+
                               'left join m_salary s on d.salary_id = s.salary_id '+
                               'where '+gets('payroll_id', qh_payroll)+' and '+es+
                               's.acctype<>''tunjangan'' and s.txtlap=''ST'' and '+gets('payrollheaderfield', q2)+' '+es+
                               'group by payroll_id');
      qd_payroll.append;
      qd_payroll.SetMultiField('debugamount,diff',0);
      qd_payroll.setfield('payroll_id', qh_payroll.getFieldString('payroll_id'));
      qd_payroll.copydata(Q2);
      qd_payroll.setfield('amount', qh_payroll.getfielddouble(Q2.getfield('payrollheaderfield'))-stSal  );
      if qd_payroll.getfield('debugamount') > 0 then
      begin
        qd_payroll.setfield('diff', qd_payroll.getfielddouble('amount') - qd_payroll.getfielddouble('debugamount'));
      end;
      qd_payroll.post;
    end;
    Q2.next;
  end;
  Q2.free;
end;
end.
