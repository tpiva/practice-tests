import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the birthdayCakeCandles function below.
    static int birthdayCakeCandles(int[] ar) {
        Map<Integer, Integer> mapCandles = new HashMap<Integer, Integer>();

        for(int a : ar) {
            if (mapCandles.get(a) != null) {
                mapCandles.put(a, mapCandles.get(a) + 1);
            } else {
                mapCandles.put(a, 1);
            }
        }

        int max = Integer.MIN_VALUE;
        for (Integer key: mapCandles.keySet()) {
            if (mapCandles.get(key) > max) {
                max = mapCandles.get(key);
            }
        }

        return max;
    }

}
