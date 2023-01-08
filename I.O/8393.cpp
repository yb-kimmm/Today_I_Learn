#include <iostream>

using namespace std;
int main()
{
  int input1 = 0 ;

  cin >> input1;
  int result = 0;
  for (int i = input1; i > 0; i--)
  {
    result += i;
  }
  
  cout << result;

  return 0;
}
