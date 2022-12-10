#include <stdio.h>
#include <stdlib.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void hi500() {
  printf("* * *** 500 aliens *** * *\n");
}

EMSCRIPTEN_KEEPALIVE
int randomNP(int a) {
  return a*a;
}