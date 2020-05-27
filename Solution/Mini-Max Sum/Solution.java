import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the miniMaxSum function below.
    static void miniMaxSum(int[] arr) {
        List<Long> results = new ArrayList<>();
        results = calculate(arr, results, 0);
        Collections.sort(results);
        System.out.print(results.get(0) + " " + results.get(results.size()-1));
    }

    static List<Long> calculate(int[] arr, List<Long> arrSum, int position) {
        if (position <= arr.length -1 ) {
            long result = 0;
            for (int i = 0; i < arr.length; i++) {
                if (i == position) {
                    continue;
                }
                result += arr[i];
            }
            arrSum.add(result);
            return calculate(arr, arrSum, ++position);
        } else {
            return arrSum;    
        }
    }

}
