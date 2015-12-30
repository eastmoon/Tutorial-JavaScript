/**
 * Created by Chen on 2015/12/30.
 */
var BehaviourObject = function() {
    this.name = "BehaviourObject";
    this.enableExecute = true;
    this.Execute = function() {}
}

var ManagementBehaviourObject = function() {
    // Implement behaviour object
    BehaviourObject.call(this);
    // Public variable
    this.childrenList = new Array();
    // Public method
    this.Update = function() {
        // First, execute chlidren function.
        this.UpdateChildren();
        // Second, execute self function.
        this.Execute();
    }
    // Private method
    this.UpdateChildren = function() {
        // Make sure list is array.
        if( Object.prototype.toString.call( this.childrenList ) === '[object Array]' )
        {
            // If object in list have execute function, than run it.
            for( var i = 0, obj = null ; i < this.childrenList.length ; i++ )
            {
                obj = this.childrenList[i];
                // if exist enableExecute, and value is true, run update function.
                if(obj["enableExecute"] != null)
                {
                    if(obj["enableExecute"])
                    {
                        // First, is exist update function, run it.
                        if(obj["Update"] != null)
                            obj["Update"]();
                        // Second, if don't have update, but exist execute function, run it.
                        else if(obj["Execute"] != null)
                            obj["Execute"]();
                    }
                }
            }
        }
    }
}

var SceneLayout = function() {
    // Implement Management behaviour object.
    ManagementBehaviourObject.call(this);
    // Override execute function
    this.Execute = function() {}
    // Public list
    this.childrenList = new Array();
    // Public Method
    this.AddScene = function( a_name, a_scene ) {
        var index = this.RetrieveSceneIndex(a_name);
        if(index < 0)
        {
            a_scene["name"] = a_name;
            this.childrenList.push(a_scene);
        }
    }
    this.RemoveScene = function( a_name ) {
        var index = this.RetrieveSceneIndex(a_name);
        if(index >= 0)
            this.childrenList.splice(index, 1);
    }
    this.RetrieveScene = function( a_name ) {
        var index = this.RetrieveSceneIndex(a_name);
        if(index >= 0)
            return this.childrenList[index];
        return null;
    }
    // Private Method
    this.RetrieveSceneIndex = function(a_name) {
        for( var i = 0 ; i < this.childrenList.length ; i++ )
            if(a_name === this.childrenList[i]["name"])
                return i;
        return -1;
    }
}

var StageScene = function() {
    // Implement Management behaviour object.
    ManagementBehaviourObject.call(this);
    // Constructor Scene
    {
        this.scene = new THREE.Scene();
        this.camera = null;
        this.renderer = null;
        // Setting childrenList
        this.childrenList = this.scene.children;
    }
    // Public method, override update function.
    this.Update = function() {
        // First, execute chlidren function.
        this.UpdateChildren();
        // Second, execute self function.
        this.Execute();
        // Render stage.
        if( this.renderer != null && this.camera != null )
        {
            this.renderer.setRenderTarget(null);
            this.renderer.clear();
            this.renderer.render( this.scene, this.camera );
        }
    }
}

var TextureScene = function() {
    // Implement Management behaviour object.
    ManagementBehaviourObject.call(this);
    // Constructor Scene
    {
        this.scene = new THREE.Scene();
        this.camera = null;
        this.renderer = null;
        this.texture = null;
        // Setting childrenList
        this.childrenList = this.scene.children;
    }
    // Public method, override update function.
    this.Update = function() {
        // First, execute chlidren function.
        this.UpdateChildren();
        // Second, execute self function.
        this.Execute();
        // Render stage.
        if( this.renderer != null && this.camera != null && this.texture != null)
        {
            this.renderer.setRenderTarget(this.texture);
            this.renderer.clear();
            this.renderer.render( this.scene, this.camera, this.texture );
        }
    }
}

var LayoutQueue = {
    Texture: new SceneLayout(),
    Stage: new SceneLayout()
}
