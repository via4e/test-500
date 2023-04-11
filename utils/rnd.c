#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void hi500()
{
  printf("* * aprile 2023 *** 500 aliens *** * *\n");
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

EMSCRIPTEN_KEEPALIVE
int fib(int n)
{
  int f[n+2];
  int i;

  f[0] = 0;
  f[1] = 1;

  for (i = 2; i <= n; i++)
  {
      f[i] = f[i-1] + f[i-2];
  }

  return f[n];
}
