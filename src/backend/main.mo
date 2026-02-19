import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Iter "mo:core/Iter";


// Add with clause after imports but before actor declaration.

actor {
  type RequestId = Nat;

  type TowingRequest = {
    id : RequestId;
    name : Text;
    phone : Text;
    location : Text;
    vehicleType : Text;
    serviceDetails : Text;
    dropLocation : ?Text;
    timestamp : Int;
  };

  module TowingRequest {
    public func compare(request1 : TowingRequest, request2 : TowingRequest) : Order.Order {
      compareByName(request1, request2);
    };

    public func compareByName(request1 : TowingRequest, request2 : TowingRequest) : Order.Order {
      Text.compare(request1.name, request2.name);
    };

    public func compareById(request1 : TowingRequest, request2 : TowingRequest) : Order.Order {
      Nat.compare(request1.id, request2.id);
    };
  };

  let requests = List.empty<TowingRequest>();
  var nextId : RequestId = 1;

  public shared ({ caller }) func submitRequest(
    name : Text,
    phone : Text,
    location : Text,
    vehicleType : Text,
    serviceDetails : Text,
    dropLocation : ?Text,
  ) : async () {
    if (name.isEmpty() or phone.isEmpty()) {
      Runtime.trap("Name and phone number are required.");
    };

    let request : TowingRequest = {
      id = nextId;
      name;
      phone;
      location;
      vehicleType;
      serviceDetails;
      dropLocation;
      timestamp = 0;
    };

    requests.add(request);
    nextId += 1;
  };

  public query ({ caller }) func getAllRequests() : async [TowingRequest] {
    requests.toArray().sort(TowingRequest.compareById);
  };

  public query ({ caller }) func getRequest(id : RequestId) : async ?TowingRequest {
    requests.values().find(func(request) { request.id == id });
  };
};
