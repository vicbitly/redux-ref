Reference Implementation:
- react
- redux
- react-redux
- redux-thunk

Basic Architecture

The reference implementation is broken up into five layers:

- API: V3, V4, 3rd Party
This is responsible for endpoint calls. As the lowest-level dependency, it has
no vision on other layers. It exposes an abstraction over AJAX / fetch or other
implementations for transporting data async.

Handles details like:
- V3 vs. V4
- RESTful interfaces vs. RPC (aka POST everything) interfaces
- offline caching, retries<sup>1</sup>

- Services: API-to-store translation layer  
This is responsible for any data transformation from the API layer that the app
needs. It consumes the API layer and exposes an abstraction over data mapping
or processing, providing the app store with data as it wants it.

Handles details like:
- stripping out extraneous data
- mapping, joining, merging data from multiple endpoints
- offline caching, retries<sup>1</sup>

- Redux: Actions, Reducers, Store
This maintains the state of the app. It acts as a local datastore.

- Selectors: Store-to-component translation layer

- React: Containers, Components
