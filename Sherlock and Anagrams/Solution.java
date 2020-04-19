import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    static Map<String, Integer> createMapCombination(char[] c) {
        Map<String, Integer> mapCombination = new HashMap<String, Integer>();                
        for (int i= 0; i < c.length; i++) {
            String cString = String.valueOf(c[i]);
            if (mapCombination.get(cString) != null) {
                mapCombination.put(cString, mapCombination.get(cString) + 1);
            } else {
                mapCombination.put(cString, 0);
            }
            
            for (int j = i + 1; j < c.length; j++) {
                char[] sorted =  (cString + String.valueOf(c[j])).toCharArray();
                Arrays.sort(sorted);
                cString = String.valueOf(sorted);
                
                if (mapCombination.get(cString) != null) {
                    mapCombination.put(cString, mapCombination.get(cString) + 1);
                } else {
                    mapCombination.put(cString, 0);
                }
            }
        }
        
        return mapCombination;
    }

    // Complete the sherlockAndAnagrams function below.
    static int sherlockAndAnagrams(String s) {
        Map<String, Integer> mapCombination = createMapCombination(s.toCharArray());
        int maxValue = 0;
        
        for (String key: mapCombination.keySet()) {
            if (mapCombination.get(key) > 0) {
                maxValue += getAp(mapCombination.get(key));
            }
        }
        
        return maxValue;
    }
    
    static int getAp (int n) { 
        // combination formula
        return (n * (n + 1)) / 2; 
    }

}
