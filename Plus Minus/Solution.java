import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the plusMinus function below.
    static void plusMinus(int[] arr) {
        int pos = 0;
        int neg = 0;
        int neu = 0;
        for (int num: arr) {
            if (num == 0) {
                neu++;
            }
            if (num > 0) {
                pos++;
            }
            if (num < 0) {
                neg++;
            }
        }

        System.out.format("%.6f\n", ((float)pos / (float)arr.length));
        System.out.format("%.6f\n", ((float)neg / (float)arr.length));
        System.out.format("%.6f\n", ((float)neu / (float)arr.length));
    }

}
