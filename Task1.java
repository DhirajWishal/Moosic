
import java.util.Scanner;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.FileInputStream;

public class Task1 {
    public static Scanner in = new Scanner(System.in);
    public static int boothNum = 0;
    public static String[] FirstName = new String[7];
    public static String[] LastName = new String[7];
    public static String[] VaccineReq = new String[7];
    public static int stock = 150;

    public static void main(String[] args) {
        initialise(FirstName, LastName, VaccineReq);
        mainMenu(in);
    }

    private static void initialise(String nameFirst[], String nameLast[], String reqVaccine[]) {
        for (int x = 0; x < 6; x++) {
            nameFirst[x] = "e";
            nameLast[x] = "e";
            reqVaccine[x] = "e";
        }
    }

    public static void mainMenu(Scanner in) {
        boolean checker = true;
        while (checker) {
            System.out.println("\n" + "                   COVID-19 VACCINATION CENTER Program\n"
                    + "‧₊˚.____________________________________________________________________‧₊˚.\n" + "\n"
                    + "            100 or VVB: View all Vaccination Booths\n"
                    + "            101 or VEB: View all Empty Booths\n"
                    + "            102 or APB: Add Patient to a Booth\n"
                    + "            103 or RPB: Remove Patient from a Booth\n"
                    + "            104 or VPS: View Patients Sorted in alphabetical order\n"
                    + "            105 or SPD: Store Program Data into file\n"
                    + "            106 or LPD: Load Program Data from file\n"
                    + "            107 or VRV: View Remaining Vaccinations\n"
                    + "            108 or AVS: Add Vaccinations to the Stock\n"
                    + "            999 or EXT: Exit the Program\n" + "\n"
                    + "‧₊˚.____________________________________________________________________‧₊˚.\n" + "\n"
                    + "Type in an option you want to display: ");
            String inpt = in.nextLine();
            switch (inpt) {
                case "100":
                case "VVB":
                    System.out.println("\n" + "'View all Vaccination Booths' loaded!" + "\n");
                    viewAllBooths();
                    break;
                case "101":
                case "VEB":
                    System.out.println("\n" + "'View all Empty Booths' loaded!" + "\n");
                    viewAllEmBooths();
                    break;
                case "102":
                case "APB":
                    System.out.println("\n" + "'Add Patient to a Booth' loaded!" + "\n");
                    addPatBooths(in);
                    break;
                case "103":
                case "RPB":
                    System.out.println("\n" + "'Remove Patient from a Booth' loaded!" + "\n");
                    removePatBooths(in);
                    break;
                case "104":
                case "VPS":
                    System.out.println("\n" + "'View Patients Sorted in alphabetical order' loaded!" + "\n");
                    viewSorted();
                    break;
                case "105":
                case "SPD":
                    System.out.println("\n" + "'Store Program Data into file' loaded!" + "\n");
                    storeIntoFile();
                    break;
                case "106":
                case "LPD":
                    System.out.println("\n" + "'Load Program Data from file' loaded!" + "\n");
                    loadFromFile();
                    break;
                case "107":
                case "VRV":
                    System.out.println("\n" + "'View Remaining Vaccinations' loaded!" + "\n");
                    viewRemaining();
                    break;
                case "108":
                case "AVS":
                    System.out.println("\n" + "'Add Vaccinations to the Stock' loaded!" + "\n");
                    addVaccines(in);
                    break;
                case "999":
                case "EXT":
                    System.out.println("\n" + "Exiting program...." + "\n");
                    System.exit(0);
                default:
                    System.out.println("\n" + "'Wrong value entered!" + "\n");
            }
        }
    }

    public static void viewAllBooths() {
        for (int x = 0; x < 6; x++) {
            if (FirstName[x].equals("e")) {
                System.out.println("booth" + x + " is empty \n");
            } else {
                System.out.println("booth " + x + " occupied by " + FirstName[x] + "\n" + "Last Name : " + LastName[x]
                        + "\n" + "Vaccine Type : " + VaccineReq[x] + "\n");
            }
        }
    }

    public static void viewAllEmBooths() {
        for (int x = 0; x < 6; x++) {
            if (FirstName[x].equals("e")) {
                System.out.println("booth" + x + " is empty");
            }
        }
    }

    public static void addPatBooths(Scanner in) {
        for (int x = 0; x < 6; x++) {
            if (FirstName[x].equals("e")) {
                System.out.println("booth" + x + " is empty");
            }
        }
        boolean checker = true;
        while (checker) {
            System.out.println("\nVaccination Booths\n" + "‧₊˚.___________________________‧₊˚.\n" + "\n"
                    + "Booth 0 & 1: AstraZeneca\n" + "Booth 2 & 3: Sinopharm\n" + "Booth 4 & 5: Pfizer\n" + "\n"
                    + "‧₊˚.___________________________‧₊˚.\n");
            System.out.println("\n Enter booth number (0-5): ");
            String numbooth = in.nextLine();
            boothNum = Integer.parseInt(numbooth);
            switch (boothNum) {
                case 0:
                case 1:
                    VaccineReq[boothNum] = "AstraZeneca";
                    break;
                case 2:
                case 3:
                    VaccineReq[boothNum] = "Sinopharm";
                    break;
                case 4:
                case 5:
                    VaccineReq[boothNum] = "Pfizer";
                    break;
                default:
                    System.out.println("False value entered!");
                    break;
            }
            if (boothNum < 6) {
                System.out.println("\n Enter customer first name for booth " + boothNum + " :");
                String customerName = in.nextLine();
                FirstName[boothNum] = customerName;
                System.out.println("\n Enter customer last name for booth " + boothNum + ":");
                String surName = in.nextLine();
                LastName[boothNum] = surName;
                System.out.println("\n" + customerName + " entered!");
                stock = stock - 1;
                if (stock == 20) {
                    System.out.println("Warning! 20 Vaccinations remaining!");
                }
                checker = false;
            } else {
                System.out.println("Invalid Number Entered!");
                checker = true;
            }
        }
    }

    public static void removePatBooths(Scanner in) {
        for (int x = 0; x < 6; x++) {
            if (!FirstName[x].equals("e")) {
                System.out.println("booth" + x + " is occupied by " + FirstName[x]);
            }
        }
        boolean checker = true;
        while (checker) {
            System.out.println("\n Enter booth number you wish to remove the customer from : ");
            boothNum = Integer.parseInt(in.nextLine());
            if (boothNum < 6) {
                FirstName[boothNum] = "e";
                LastName[boothNum] = "e";
                VaccineReq[boothNum] = "e";
                System.out.println("\n Customer from booth " + boothNum + " successfully removed!");
                checker = false;
            } else {
                System.out.println("Invalid Number Entered!");
                checker = true;
            }
        }
    }

    public static void viewSorted() {
        String comparer[] = new String[7];
        String secondComparer[] = new String[7];
        for (int x = 0; x < 6; x++) {
            comparer[x] = FirstName[x] + " " + LastName[x];
        }
        for (int x = 0; x < 6; x++) {
            secondComparer[x] = comparer[x];
        }
        for (int x = 0; x < 5; x++) {
            for (int i = 0; i < 5 - x; i++)
                if (secondComparer[i].compareTo(secondComparer[i + 1]) > 0) {
                    String placeHolder = secondComparer[i];
                    secondComparer[i] = secondComparer[i + 1];
                    secondComparer[i + 1] = placeHolder;
                }
        }
        for (int x = 0; x < 6; x++) {
            System.out.println("Patient name : " + secondComparer[x]);
        }
    }

    public static void storeIntoFile() {
        try (BufferedWriter in = new BufferedWriter(new FileWriter("push"))) {
            in.write(String.valueOf(stock));
            in.newLine();
            for (int x = 0; x < 6; x++) {
                in.write(FirstName[x]);
                in.newLine();
                in.write(LastName[x]);
                in.newLine();
                in.write(VaccineReq[x]);
                in.newLine();
            }
        } catch (IOException y) {
            y.printStackTrace();
        }
        System.out.println("Saved Data into the file!");
    }

    public static void loadFromFile() {
        try {
            Scanner pull = new Scanner(new FileInputStream("push"));
            stock = Integer.parseInt(pull.nextLine());
            for (int x = 0; x < 6; x++) {
                FirstName[x] = pull.nextLine();
                LastName[x] = pull.nextLine();
                VaccineReq[x] = pull.nextLine();
            }
        } catch (IOException y) {
            y.printStackTrace();
        }
        System.out.println("Loaded Data into the file!");
    }

    public static void viewRemaining() {
        System.out.println("Remaining number of vaccinations : " + stock);
    }

    public static void addVaccines(Scanner in) {
        System.out.println("\n Enter the amount of vaccinations you want to add in : ");
        int addStock = Integer.parseInt(in.nextLine());
        stock = addStock + stock;
        System.out.println("\n Successfully added " + addStock + " vaccinations!");
    }
}