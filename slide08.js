/// calculte total = semua jam kerja

//1. Membuat cetakan object untuk menyimpan data pegawai
class Emplpoyee{
  constructor(_fullName,_birth,gender,_email,_phone){
    this.name = _fullName
    this.birth = _birth
    this.gender = gender
    this.email = _email
    this.phone = _phone
  }
}


//2. Menyiapkan class turunan untuk menentukan data gaji pegawai

class FullTime extends Emplpoyee{
  // private property
  #salary;
  constructor(_fullName,_birth,gender,_email,_phone){
    super(_fullName,_birth,gender,_email,_phone);
    this.attendances =[];// dimasukkan didalam class untuk menyendirikan data tiap pegawai
    this.#salary={
      fullTime : 100000,
      overTime : 75000,
    }
  }


  addWorking (clockIn,clockOut){
    console.log(clockIn)
    //INPUT : clockin : string, clockout : string
    //PROCESS : 
    // 1. menghitung jumlah jam dari input clockIn dan clockOut
    //    rumus jam = clockOut - clockIn
    const jam = parseInt(clockOut.replace(/[.0]/g,"") - clockIn.replace(/[.0]/g,""))

    // 2. Ketika didapat jumlah jam maka diperiksa apakah melebihi 6 jam
    //    if jam > 6 makaa perlu dicatat jumlah overtimenya
    //      lalu dihitung gajinya untuk mainSalary = 6x100.000 dan overTime = 75.000
    //    else langsung hitung jam x100.000

    let mainSalary = 0;
    let overTimeSalary = 0;
    if(jam < 6){
      mainSalary = this.#salary.fullTime*6
    }else if (jam > 6){
      mainSalary = this.#salary.fullTime*6
      overTimeSalary = (jam-6)*this.#salary.overTime
    }
    // 3. menyimpan data clockIn, clockOut, jam, salary dedalam property this.attendance
    const data={
      date : new Date().toLocaleString(),
      jam_masuk : clockIn,
      jam_keluar : clockOut,
      jam_kerja : jam,
      jumlah_gaji : overTimeSalary + mainSalary
    }
    this.attendances.push(data)
  }

  totalSalary = ()=>{
    let amount = 0;
    this.attendances.forEach((e,idx)=>(amount+=e.jumlah_gaji))
    return amount
  }
}

const pegawaiA = new FullTime(
  "Ade swara",
  "1978-12-23",
  "Male",
  "as@mail.com",
  "0897582223"
)

pegawaiA.addWorking("08.00","16.00")
pegawaiA.addWorking("08.00","16.00")
pegawaiA.addWorking("08.00","16.00")
pegawaiA.addWorking("08.00","16.00")
pegawaiA.addWorking("08.00","16.00")
pegawaiA.addWorking("08.00","16.00")
console.log(pegawaiA)

console.log(pegawaiA.totalSalary())

class PartTime extends Emplpoyee{

}






