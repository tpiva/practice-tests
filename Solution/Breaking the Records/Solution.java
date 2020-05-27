import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the breakingRecords function below.
    static int[] breakingRecords(int[] scores) {
        int min = (int) Math.pow(10, 8);
        int max = -1;
        int countMax = 0;
        int countMin = 0;

        for(int i = 0; i < scores.length; i ++) {
            if (i == 0) {
                max = scores[i];
                min = scores[i];
            } else {
                if (scores[i] > max) {
                    max = scores[i];
                    countMax++;
                } else if (scores[i] < min) {
                    min = scores[i];
                    countMin++;
                }
            }
            
        }

        return new int[]{countMax, countMin};
    }
}
