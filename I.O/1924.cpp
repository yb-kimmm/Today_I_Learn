#include <iostream>

using namespace std;
int main()
{
  int input1 , input2  = 0;
  string dayOfTheWeekArr[] = {"SUN"  , "MON" , "TUE" , "WED" , "THU" , "FRI" , "SAT" };
  int monArr[] = {31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31};
  
  // 배열이 차지하는 메모리의 크기 = 배열의 길이 X sizeof(타입)
  int len = sizeof(monArr) / sizeof(monArr[0]);

  cin >> input1 >> input2;

  int totalDay = 0; // 총일수
  for (int i = 0; i < len; i++)
  {
    if( i < input1-1 ){
      totalDay += monArr[i];
    }
  }

  // 나머지 일수 구하기
  totalDay += input2;

  int dayOfTheWeek = totalDay % 7 ;

  cout << dayOfTheWeekArr[dayOfTheWeek];

  return 0;
}
