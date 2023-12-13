
#include <iostream>

using namespace std;


int main(){
    int A , B , C;
    
    cin >> A >> B >> C;
    
    int result1 = (A + B)%C;
    int result2 = ((A%C) + (B%C))%C;
    int result3 = (A*B)%C;
    int result4 =  ((A%C) * (B%C))%C;
    
    cout << result1 << endl;
    cout << result2 << endl;
    cout << result3 << endl;
    cout << result4 << endl;
    
    return 0;
}
