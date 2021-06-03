#include<iostream>
using namespace std;

int main() {
    char fetchedName = getName();

    cout<<"Hello "<<fetchedName;
    return 0;
}

char getName() {
    char name = 'ABC';
    return name;
}