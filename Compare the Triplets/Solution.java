import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class Solution {

    // Complete the compareTriplets function below.
    static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
        List<Integer> points = new ArrayList<>();
        points.add(0, new Integer(0));
        points.add(1, new Integer(0));
        for (int i = 0; i < a.size(); i++) {
            if (a.get(i) != b.get(i)) {
                if (a.get(i) > b.get(i)) {
                    Integer var = points.get(0);
                    var++;
                    points.set(0, var);
                } else {
                    Integer var = points.get(1);
                    var++;
                    points.set(1, var);
                }
            }            
        }
        
        return points;
    }
}
