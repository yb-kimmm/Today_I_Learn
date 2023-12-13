#include <iostream>

using namespace std;

int main(){
    
    int A , B;

    cin >> A >> B;

    int min = 1; //최소공약수
    int max = A >= B ? A : B; //최대공배수
    
    int ori_A , ori_B;
    
    ori_A = A;
    ori_B = B;

    int array[100] = {0};

    int cnt = 0;

    for ( int i = max; i > 0; i--){
   

        if( A % i == 0 && B % i == 0){
            A = A / i;
            B = B / i;
            
            min = min * i;
            
        }
    }
    
    cout << min << endl;
    cout << ori_A * ori_B / min;
    
    return 0;

}
