// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
  //daysInYearの動作確認
  for(let i = 2000; i <= 2100; i++){
    console.log(i + "年は" + daysInYear(i) + "日です");
  }

  //dayOfWeekの動作確認
  console.log(dayOfWeek(2019, 10, 1))
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let l = 0;
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    fill(0);
    text(d, 20 * dow, 12 * l + 40);
    if(dow == 6){l += 1}
    dow = dayOfWeek(y, m, d + 1);
    text(dayOfWeekAsString(dow), 20 * dow, 25);
  }
  text(y + "年" + m + "月", 0, 10);  
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let ydf = abs(2023 - y);
  let dCount = 0;
  if(y >= 2023){
      for(let i = 0; i < ydf; i++){
      dCount += daysInYear(2023 + i);
    }
    dCount += dayOfYear(y, m, d) - 1;
    return dCount % 7;
  }
  else{
    for(let i = 0; i < ydf; i++){
      dCount -= daysInYear(2022 - i);
    }
    dCount += dayOfYear(y, m, d) - 1;
    return (7 - abs(dCount) % 7) % 7
  }  
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
