#include <iostream>

using namespace std;
int main()
{

  int max = -1000001;
  int min = 1000001;

  int num = 0;

  cin >> num;
  int array[num];

  for(int i = 0; i < num; i++){
    cin >> array[i];
  }


  for (int i = 0; i < num; i++)
  {
    if(max < array[i]){
      max = array[i];
    }  

    if(min > array[i]){
      min = array[i];
    }
  }
  
  cout << min <<  " " << max;

  return 0;
}
