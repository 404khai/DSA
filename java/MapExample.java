import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        // 1. Initialize a Map (Key: String, Value: Integer)
        Map<String, Integer> inventory = new HashMap<>();

        // 2. Add elements using put()
        inventory.put("Apple", 50);
        inventory.put("Banana", 30);
        inventory.put("Orange", 20);

        // 3. Retrieve elements using get()
        int appleCount = inventory.get("Apple"); // Returns 50

        // 4. Check for presence
        boolean hasGrapes = inventory.containsKey("Grapes"); // Returns false

        // 5. Remove an entry
        inventory.remove("Orange");

        // 6. Iterate through the map
        for (Map.Entry<String, Integer> entry : inventory.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
