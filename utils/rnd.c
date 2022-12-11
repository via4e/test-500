#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void hi500()
{
  printf("* * *** 500 aliens *** * *\n");
}

EMSCRIPTEN_KEEPALIVE
int randomInt(int min, int max)
{
  int a = (min + rand() % max); 
  return a;
}

EMSCRIPTEN_KEEPALIVE
int randomNZP()
{
  return (-1 + rand() % 2);
}